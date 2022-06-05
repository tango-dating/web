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
        // ports.signInInfo.send({
        //   token: idToken,
        //   email: result.user.email,
        //   uid: result.user.uid
        // })
      })
    })
    .catch(error => {
      console.error("auth error:", error.code, error.message)
      // ports.signInError.send({
      //   code: error.code,
      //   message: error.message
      // })
    })
}

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
      // app.ports.signInInfo.send({
      //   token: idToken,
      //   email: user.email,
      //   uid: user.uid
      // })
    })
    .catch(error => {
      console.log("error retrieving cached user:", error)
    })
})

function attachPorts(ports) {
  ports.signInPort.subscribe(() => logIn(ports))
  ports.signOutPort.subscribe(() => {
    console.log("SignOut called")
    signOut(auth)
  })
}

export default {
  attachPorts
}
