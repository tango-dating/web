import { Elm } from "./Main.elm"
import auth from "./auth"

const app = Elm.Main.init({
  node: document.getElementById("app")
})

auth.attachPorts(app.ports)
