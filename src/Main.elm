module Main exposing (..)

import Auth
import Browser
import Html exposing (Html, h1, h4, text)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Matter.Button exposing (button)
import Matter.Container exposing (app, card, textCenter)
import Matter.Generic exposing (Element, pack, packAll, unpack)



-- MAIN


main : Program () Model Msg
main =
    Browser.element
        { init = always ( Auth.Anon, Cmd.none )
        , update = update
        , view = view >> unpack
        , subscriptions = always Sub.none
        }



-- MODEL


type alias Model =
    Auth.State



-- MSG


type Msg
    = SignIn
    | SignOut



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SignIn ->
            ( model, Auth.signIn )

        SignOut ->
            ( model, Auth.signOut )


view : Model -> Element Msg
view =
    viewPopupContent
        >> packAll
        >> card
        >> List.singleton
        >> app


viewPopupContent : Model -> List (Html Msg)
viewPopupContent model =
    case model of
        Auth.Anon ->
            popupCard "Let's dance!"
                "At last you are here! We've been waiting. Click through and get to dancing."
                "Sign In with Google"

        Auth.Err authError ->
            popupCard "Ooops..."
                "Something went wrong."
                "Sign In with Google"

        Auth.Ok userInfo ->
            popupCard "You're in."
                "Let's dance!."
                "Sign Out"


popupCard : String -> String -> String -> List (Html Msg)
popupCard title body callToAction =
    [ h1 [] [ text title ]
    , h4 []
        [ text body ]
    , unpack <|
        textCenter
            [ button [ onClick SignIn ] [ text callToAction ] ]
    ]
