port module Auth exposing
    ( Model(..)
    , Msg(..)
    , init
    , ok
    , subscriptions
    , update
    , view
    )

import Html exposing (Html, h1, h4, text)
import Html.Attributes exposing (style)
import Html.Events exposing (onClick)
import Json.Decode as D
import Json.Decode.Pipeline as Pipeline
import Json.Encode as E
import Matter.Button exposing (button)
import Matter.Container exposing (Axis(..), alignCenter, app, card, textCenter)
import Matter.Generic exposing (Element, packAll, unpack)



-- TYPES


type alias SignInError =
    { code : Maybe String
    , message : Maybe String
    , credential : Maybe String
    }


type alias UserInfo =
    { token : String
    , email : String
    , uid : String
    }



-- MODEL


type Model
    = Anon
    | Err SignInError
    | Ok UserInfo


ok : Model -> a -> a -> a
ok model x y =
    case model of
        Ok _ ->
            x

        _ ->
            y



-- MSG


type Msg
    = SignIn
    | SignOut
    | AuthInfo (Result D.Error UserInfo)
    | AuthError (Result D.Error SignInError)



-- INIT


init : Model
init =
    Anon



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SignIn ->
            ( model, signIn )

        SignOut ->
            ( Anon, signOut )

        AuthInfo result ->
            ( updateAuthInfo result, Cmd.none )

        AuthError result ->
            ( updateAuthError result, Cmd.none )


updateAuthInfo : Result D.Error UserInfo -> Model
updateAuthInfo result =
    case result of
        Result.Err parsingError ->
            Err <|
                SignInError
                    Nothing
                    (Just <| D.errorToString parsingError)
                    Nothing

        Result.Ok userInfo ->
            Ok userInfo


updateAuthError : Result D.Error SignInError -> Model
updateAuthError result =
    case result of
        Result.Err parsingError ->
            Err <|
                SignInError
                    Nothing
                    (Just <| D.errorToString parsingError)
                    Nothing

        Result.Ok signInError ->
            Err signInError



-- VIEW


view : Model -> Element Msg
view =
    viewAuthCardContent
        >> packAll
        >> card
        >> List.singleton
        >> alignCenter Horizontal []
        >> List.singleton
        >> alignCenter Vertical [ style "height" "100vh" ]
        >> List.singleton
        >> app


viewAuthCardContent : Model -> List (Html Msg)
viewAuthCardContent model =
    case model of
        Anon ->
            viewAuthCard "Let's Tango!"
                "At last you are here! We've been waiting. Click through and get to dancing."
                SignIn
                "Sign In with Google"

        Err authError ->
            viewAuthCard "Ooops..."
                (Maybe.withDefault "Something went wrong." authError.message)
                SignIn
                "Sign In with Google"

        Ok userInfo ->
            viewAuthCard "You're in."
                ("However, if you wanted to sign out of "
                    ++ userInfo.email
                    ++ " for some reason, here's your chance."
                )
                SignOut
                "Sign Out"


viewAuthCard : String -> String -> Msg -> String -> List (Html Msg)
viewAuthCard title body event callToAction =
    [ h1 [] [ text title ]
    , h4 [] [ text body ]
    , [ button [ onClick event ] [ text callToAction ] ]
        |> textCenter
        |> unpack
    ]



-- SUBSCRIPTIONS


subscriptions : Sub Msg
subscriptions =
    Sub.batch
        [ signInInfoPort (D.decodeValue userInfoDecoder >> AuthInfo)
        , signInErrorPort (D.decodeValue signInErrorDecoder >> AuthError)
        ]



-- COMMANDS


signIn : Cmd msg
signIn =
    signInPort ()


signOut : Cmd msg
signOut =
    signOutPort ()



-- DECODERS


userInfoDecoder : D.Decoder UserInfo
userInfoDecoder =
    D.succeed UserInfo
        |> Pipeline.required "token" D.string
        |> Pipeline.required "email" D.string
        |> Pipeline.required "uid" D.string


signInErrorDecoder : D.Decoder SignInError
signInErrorDecoder =
    D.succeed SignInError
        |> Pipeline.required "code" (D.nullable D.string)
        |> Pipeline.required "message" (D.nullable D.string)
        |> Pipeline.required "credential" (D.nullable D.string)



-- PORTS


port signInPort : () -> Cmd msg


port signInInfoPort : (E.Value -> msg) -> Sub msg


port signInErrorPort : (E.Value -> msg) -> Sub msg


port signOutPort : () -> Cmd msg
