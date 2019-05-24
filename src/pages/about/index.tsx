// import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import store from 'src/store'
import Home from '../home'
class Component1 extends Component {
  render() {
    return <Home />
  }
}
const f = () => (
  <Provider store={store}>
    {process.env.NODE_ENV === 'development' ? <Component1 /> : <Component1 />}
  </Provider>
)
export default f
