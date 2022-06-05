module Matter.Button exposing (..)

import Html exposing (Html)
import Html.Attributes exposing (class)
import Matter.Generic exposing (Element, pack)
import Html exposing (Attribute)


button : List (Attribute msg) -> List (Html msg) -> Element msg
button attributes =
    Html.button ( class "mr-button" :: attributes ) >> pack
