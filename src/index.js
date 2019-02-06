import React from "react"
import ReactDOM from "react-dom"
import NewComponent from "./components/newComponent"

const Index = () => {
  return <div>Hello React! Welcome: <NewComponent /> </div>
}

ReactDOM.render(<Index />, document.getElementById("index"))