import React, { Component } from 'react'
import { namespace } from '@/models/home'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { Link, Route } from 'react-router-dom'
interface IProps {
  testState?: string
  dispatch?: any
}

class Home extends Component<IProps> {
  goTo = route => {
    // dispatch路由相关的操作
    this.props.dispatch(push(route.url))
  }
  render() {
    return (
      <div>
        <h1>标题</h1>
        <button
          onClick={() => {
            this.props.dispatch({
              type: `${namespace}/setState`,
              payload: {
                testState: Math.random() + 11122222221111,
              },
            })
          }}
        >
          点击触发dva reducer la
        </button>
        <h2>dva state:{this.props.testState}</h2>

        <div>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
          </ul>

          <div>
            <button onClick={() => this.goTo({ url: '/about' })}>
              Click here to go about ! (if you can...)
            </button>
          </div>
          <div style={{ padding: '150px' }}>
            <Route exact path="/" component={() => <h1>about</h1>} />
            <Route path="/about" component={() => <h1>home</h1>} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = models => {
  return {
    ...models[namespace],
  }
}
export default connect(mapStateToProps)(Home)
