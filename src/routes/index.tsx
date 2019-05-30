import { hot } from 'react-hot-loader/root'
import React from 'react'
import Router from '@/pages/router'

import dva from '@/utils/dva/index'
import models from '@/models'

import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'

// tslint:disable-next-line: no-var-requires
const createHistory = require('history').createBrowserHistory
export const history = createHistory()
export const routerReducer = connectRouter(history)
export const routerMiddlewareForDispatch = routerMiddleware(history)

const app = dva({
  models,
  initState: {},
  extraReducers: { router: routerReducer },
  onAction: [routerMiddlewareForDispatch],
})

const f: React.FC = app.start(
  <ConnectedRouter history={history}>
    <Router />
  </ConnectedRouter>
)

export default (process.env.NODE_ENV === 'development' ? hot(f) : f)
