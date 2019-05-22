const namespace = 'home'
export { namespace }
export default {
  namespace,
  state: {
    testState: 'TestState1111111',
  },
  effects: {
    *test({ payload }, { call, put }) {},
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
}
