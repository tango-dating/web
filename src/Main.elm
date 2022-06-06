module Main exposing (..)

import Auth
import Browser
import Html exposing (Html)
import Matter.Generic exposing (unpack)



-- MAIN


main : Program () Model Msg
main =
    Browser.element
        { init = always init
        , update = update
        , view = view
        , subscriptions = always subscriptions
        }



-- MODEL


type alias Model =
    { authModel : Auth.Model
    }



-- MSG


type Msg
    = AuthMsg Auth.Msg



-- INIT


init : ( Model, Cmd Msg )
init =
    let
        ( model, cmd ) =
            Auth.init
    in
    ( Model model, cmd |> Cmd.map AuthMsg )



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        AuthMsg authMsg ->
            let
                ( authModel, authCmd ) =
                    Auth.update authMsg model.authModel
            in
            ( Model authModel, authCmd |> Cmd.map AuthMsg )



-- VIEW


view : Model -> Html Msg
view model =
    Auth.view model.authModel |> unpack |> Html.map AuthMsg



-- SUBSCRIPTIONS


subscriptions : Sub Msg
subscriptions =
    Sub.map AuthMsg Auth.subscriptions
