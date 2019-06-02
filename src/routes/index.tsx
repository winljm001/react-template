import React, { Component } from 'react'
import { namespace } from '@/models/home'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { Link, Route } from 'react-router-dom'
import Home from '@/pages/home'
import About from '@/pages/about'
import styles from './style.module.scss'
interface IProps {
  testState?: string
  dispatch?: any
}
class Router extends Component<IProps> {
  goTo = route => {
    // dispatch路由相关的操作
    this.props.dispatch(push(route.url))
  }
  render() {
    return (
      <div className={styles.page}>
        <button
          onClick={() => {
            this.props.dispatch({
              type: `${namespace}/setState`,
              payload: {
                testState: Math.random(),
              },
            })
          }}
        >
          点击触发dva reducer
        </button>
        <h2>dva state:{this.props.testState}</h2>
        <>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
          </ul>
          <div>
            <button onClick={() => this.goTo({ url: '/about' })}>使用dispatch跳转到About</button>
          </div>
          <div style={{ padding: '150px' }}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </>
      </div>
    )
  }
}

const mapStateToProps = models => {
  return {
    ...models[namespace],
  }
}
export default connect(mapStateToProps)(Router)
