import { create } from 'dva-core'
import React from 'react'
import { connect, Provider } from 'react-redux'
import { DvaInitOptions } from './types'

export { connect }
declare var global: any

export default function(options: DvaInitOptions) {
  const app = create(options)
  // HMR workaround
  if (!global.registered) {
    options.models.forEach(model => app.model(model))
  }
  global.registered = true
  app.start()
  const store = app._store
  app.start = (container: any) => () => <Provider store={store}>{container}</Provider>
  app.getStore = () => store

  return app
}
