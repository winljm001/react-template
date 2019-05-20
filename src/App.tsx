import React from 'react'
import './App.scss'
import logo from './logo.svg'
import config from 'src/config'
import dva from 'src/utils/dva'
import models from 'src/models'
const app = dva({
  initialState: {},
  models,
})
const App: React.FC = props => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="test-cls">
          Edit <code>src/App.tsx</code> and save to reload. {config.baseUrl}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default app.start(<App />)
