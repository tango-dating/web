module RouteTest exposing (..)

import Expect
import Route
import Test exposing (..)
import Url exposing (Protocol(..))


profileRoute : Test
profileRoute =
    test "profile route from URL"
        (\_ ->
            Expect.equal
                (Route.fromUrl <|
                    { protocol = Https
                    , host = "www.doesnotmatter.com"
                    , port_ = Nothing
                    , path = ""
                    , query = Just ""
                    , fragment = Just "u"
                    }
                )
                Route.Profile
        )


authRoute : Test
authRoute =
    test "auth route from URL"
        (\_ ->
            Expect.equal
                (Route.fromUrl <|
                    { protocol = Https
                    , host = "www.doesnotmatter.com"
                    , port_ = Nothing
                    , path = ""
                    , query = Just ""
                    , fragment = Just "a"
                    }
                )
                Route.Auth
        )
