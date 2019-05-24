const namespace = 'home'
export { namespace }
export default {
  namespace,
  state: {
    testState: '1111ffffvvvv1111',
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
