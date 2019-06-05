import { hot } from 'react-hot-loader/root'
import React from 'react'
import Router from '@/routes'
import dva from '@/utils/dva/index'
import models from '@/models'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'

import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-cn')

const createHistory = require('history').createBrowserHistory
export const history = createHistory()
export const routerReducer = connectRouter(history)
export const routerMiddlewareForDispatch = routerMiddleware(history)

export const app = dva({
  models,
  initState: {},
  extraReducers: { router: routerReducer },
  onAction: [routerMiddlewareForDispatch],
})

const f: React.FC = app.start(
  <LocaleProvider locale={zhCN}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </LocaleProvider>
)

export default (process.env.NODE_ENV === 'development' ? hot(f) : f)
