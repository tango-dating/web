module Main exposing (..)

import Auth
import Browser
import Html exposing (Html, button, div, h1, text)
import Html.Events exposing (onClick)



-- MAIN


main : Program () Model Msg
main =
    Browser.element
        { init = always ( Auth.Anon, Cmd.none )
        , update = update
        , view = view
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


view : Model -> Html Msg
view model =
    case model of
        Auth.Anon ->
            div []
                [ h1 [] [ text "Let's dance!" ]
                , button [ onClick SignIn ] [ text "Google Sign In" ]
                ]

        Auth.Err authError ->
            div []
                [ h1 [] [ text <| Maybe.withDefault "something went wrong" authError.message ]
                , button [ onClick SignIn ] [ text "Google Sign In" ]
                ]

        Auth.Ok userInfo ->
            div []
                [ h1 [] [ text <| "your email: " ++ userInfo.email ]
                , button [ onClick SignOut ] [ text "Sign Out" ]
                ]
