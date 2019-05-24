import React, { Component } from 'react'
import { namespace } from 'src/models/home'
import { connect } from 'react-redux'

interface IProps {
  testState?: string
  dispatch?: any
}

class Home extends Component<IProps> {
  render() {
    return (
      <div>
        <h1>hdd2e</h1>
        <button
          onClick={() => {
            this.props.dispatch({
              type: `${namespace}/setState`,
              payload: {
                testState: Math.random() + 1111111,
              },
            })
          }}
        >
          点击触发dva reducer la
        </button>
        <h2>dva state:{this.props.testState}</h2>
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
