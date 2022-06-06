import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged
} from "firebase/auth"
import config from "./config"

const firebaseApp = initializeApp(config.firebase)
const provider = new GoogleAuthProvider()
const auth = getAuth()

function logIn(ports) {
  console.log("LogIn called")
  signInWithPopup(auth, provider)
    .then(result => {
      result.user.getIdToken().then(idToken => {
        console.info("auth ok")
        ports.signInInfoPort.send({
          token: idToken,
          email: result.user.email,
          uid: result.user.uid
        })
      })
    })
    .catch(error => {
      console.error("auth error:", error.code, error.message)
      ports.signInErrorPort.send({
        code: error.code,
        message: error.message
      })
    })
}

function attachPorts(ports) {
  ports.signInPort.subscribe(() => logIn(ports))

  ports.signOutPort.subscribe(() => {
    console.log("SignOut called")
    signOut(auth)
  })

  onAuthStateChanged(auth, user => {
    console.log("auth state changed")
    if (!user) {
      console.log("logged out")
      return
    }
    user
      .getIdToken()
      .then(idToken => {
        console.log("logged in")
        ports.signInInfoPort.send({
          token: idToken,
          email: user.email,
          uid: user.uid
        })
      })
      .catch(error => {
        console.log("error retrieving cached user:", error)
      })
  })
}

export default {
  attachPorts
}
