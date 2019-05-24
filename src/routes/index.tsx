import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import React from 'react'
import store from 'src/store'
import Home from 'src/pages/home'
const f: React.FC = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

export default (process.env.NODE_ENV === 'development' ? hot(f) : f)
