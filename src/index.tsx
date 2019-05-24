// import { hot } from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
// import dva from 'dva'
// import createHistory from 'history/createBrowserHistory'
// import routers from 'src/routes'
// import models from 'src/models'
import App from 'src/pages/about'

// const app = dva({
//   initialState: {},
//   history: createHistory(),
// })

// // tslint:disable-next-line: no-var-requires
// app.router(routers)
// models.forEach(item => {
//   app.model(item as any)
// })
// app.start('#root')
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
