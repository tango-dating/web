module Main exposing (..)

import Auth
import Browser exposing (Document, UrlRequest(..))
import Browser.Navigation as Nav
import Html exposing (h1, text)
import Matter.Generic exposing (unpack)
import Route exposing (Route)
import Url exposing (Url)



-- MAIN


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , update = update
        , view = view
        , subscriptions = always subscriptions
        , onUrlRequest = LinkClicked
        , onUrlChange = LinkChanged
        }



-- MODEL


type alias Model =
    { key : Nav.Key
    , route : Route
    , authModel : Auth.Model
    , profileModel : String
    }



-- MSG


type Msg
    = LinkClicked UrlRequest
    | LinkChanged Url
    | AuthMsg Auth.Msg



-- INIT


init : () -> Url -> Nav.Key -> ( Model, Cmd Msg )
init _ url key =
    mux url <| dummyModel key


dummyModel : Nav.Key -> Model
dummyModel key =
    { key = key
    , route = Route.Auth
    , authModel = Auth.init
    , profileModel = "Profile Page"
    }



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LinkClicked request ->
            case request of
                Internal url ->
                    ( model, Nav.pushUrl model.key (Url.toString url) )

                External href ->
                    ( model, Nav.load href )

        LinkChanged url ->
            mux url model

        AuthMsg authMsg ->
            let
                ( authModel, authCmd ) =
                    Auth.update authMsg model.authModel
            in
            ( { model
                | authModel = authModel
                , route = Auth.ok authModel Route.Profile model.route
              }
            , authCmd |> Cmd.map AuthMsg
            )



-- MUX


mux : Url -> Model -> ( Model, Cmd Msg )
mux url model =
    case Route.fromUrl url of
        Route.Auth ->
            ( { model | route = Route.Auth }, Cmd.none )

        Route.Profile ->
            ( { model | route = Route.Profile }, Cmd.none )



-- VIEW


view : Model -> Document Msg
view model =
    let
        authView =
            Auth.view model.authModel |> unpack |> Html.map AuthMsg

        body =
            Auth.ok model.authModel bodyFromRoute authView

        bodyFromRoute =
            case model.route of
                Route.Auth ->
                    authView

                Route.Profile ->
                    h1 [] [ text model.profileModel ]
    in
    { title = "Tango Dating", body = List.singleton body }



-- SUBSCRIPTIONS


subscriptions : Sub Msg
subscriptions =
    Sub.map AuthMsg Auth.subscriptions
