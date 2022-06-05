module Matter.Generic exposing (..)

import Html exposing (Html)


type alias Element msg =
    () -> Html msg


pack : Html msg -> Element msg
pack =
    always


packAll : List (Html msg) -> List (Element msg)
packAll =
    List.map pack


unpack : Element msg -> Html msg
unpack element =
    element ()


unpackAll : List (Element msg) -> List (Html msg)
unpackAll =
    List.map unpack
