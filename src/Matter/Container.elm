module Matter.Container exposing (app, card, textCenter)

import Html exposing (div)
import Html.Attributes exposing (class)
import Matter.Generic exposing (Element, pack, unpackAll)



-- TYPES


type alias Container msg =
    List (Element msg) -> Element msg



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



-- LOCALS


withClass : String -> Container msg
withClass class_ =
    unpackAll >> div [ class class_ ] >> pack
