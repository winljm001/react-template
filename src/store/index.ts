import { create } from 'dva-core'
import models from 'src/models'
const app = create({
  models,
  initState: {},
})
// model注册
models.forEach(model => app.model(model))
app.start()
const store = app._store
export default store
