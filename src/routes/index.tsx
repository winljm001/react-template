import React from 'react'
import { Router, Route, Link } from 'dva/router'
import dynamic from 'dva/dynamic'
import { RouterAPI } from 'dva'
const about = () => {
  return <h1>about</h1>
}

const RouterWrapper = ({ history, app }: RouterAPI) => {
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: (dynamic as any)({
        app,
        models: () => {
          return [import('src/models/home')]
        },
        component: () => import('src/pages/home'),
      }),
    },
    {
      path: '/about',
      name: 'About',
      component: about,
    },
  ]
  return (
    <Router history={history}>
      <div>
        <Link to="/">go home</Link>
        <Link to="/about">go about</Link>
        {routes.map((item, index) => {
          return (
            <Route
              key={index}
              exact={item.path === '/'}
              path={item.path}
              component={item.component}
            />
          )
        })}
      </div>
    </Router>
  )
}

export default RouterWrapper
