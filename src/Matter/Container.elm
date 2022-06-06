module Matter.Container exposing
    ( Axis(..)
    , alignCenter
    , app
    , card
    , textCenter
    )

import Html exposing (Attribute, div)
import Html.Attributes exposing (class)
import Matter.Generic exposing (Element, pack, unpackAll)



-- TYPES


type alias Container msg =
    List (Element msg) -> Element msg


type Axis
    = Vertical
    | Horizontal



-- CONSTRUCTORS


app : Container msg
app =
    withClass "mr-app"


card : Container msg
card =
    withClass "mr-card"


textCenter : Container msg
textCenter =
    withClass "mr-text-center"


alignCenter : Axis -> List (Attribute msg) -> Container msg
alignCenter axis attributes =
    let
        axisClass =
            case axis of
                Vertical ->
                    "mr-align-center-y"

                Horizontal ->
                    "mr-align-center-x"
    in
    unpackAll
        >> div ([ class "mr-align-center", class axisClass ] ++ attributes)
        >> pack



-- LOCALS


withClass : String -> Container msg
withClass class_ =
    unpackAll >> div [ class class_ ] >> pack
