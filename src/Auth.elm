port module Auth exposing
    ( Error
    , State(..)
    , UserInfo
    , signIn
    , signOut
    )

-- PORTS


port signInPort : () -> Cmd msg


port signOutPort : () -> Cmd msg



-- TYPES


type State
    = Anon
    | Err Error
    | Ok UserInfo


type alias Error =
    { code : Maybe String
    , message : Maybe String
    , credential : Maybe String
    }


type alias UserInfo =
    { token : String
    , email : String
    , uid : String
    }



-- COMMANDS


signIn : Cmd msg
signIn =
    signInPort ()


signOut : Cmd msg
signOut =
    signOutPort ()
