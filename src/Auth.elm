port module Auth exposing
    ( Error
    , State(..)
    , UserInfo
    , signIn
    , signOut
    )


port signInPort : () -> Cmd msg


port signOutPort : () -> Cmd msg


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


signIn : Cmd msg
signIn =
    signInPort ()


signOut : Cmd msg
signOut =
    signOutPort ()
