import React        from "react"
import ReactDOM     from "react-dom"
import { Provider } from "react-redux"
import Layout       from "./components/Root"
import store        from "./store"

const root = document.getElementById('root')

ReactDOM.render(<Provider store={store}><Root /></Provider>, root);