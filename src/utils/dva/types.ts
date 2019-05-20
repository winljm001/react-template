// copy自 https://github.com/dvajs/dva/blob/master/packages/dva/index.d.ts
// 注释了部分 History
import { AnyAction, Dispatch, MiddlewareAPI, Reducer, ReducersMapObject } from 'redux'
// import { History } from "history";

export type onActionFunc = (api: MiddlewareAPI<any>) => void

export type ReducerEnhancer = (reducer: Reducer<any>) => void

export interface Hooks {
  onError?: (e: Error, dispatch: Dispatch<any>) => void
  onAction?: onActionFunc | onActionFunc[]
  onStateChange?: () => void
  onReducer?: ReducerEnhancer
  onEffect?: () => void
  onHmr?: () => void
  extraReducers?: ReducersMapObject
  extraEnhancers?: any[]
}

export type DvaOption = Hooks & {
  initialState?: object
  history?: object
}

export interface EffectsCommandMap {
  put: <A extends AnyAction>(action: A) => any
  call: (...rest: any) => {}
  select: (...rest: any) => {}
  take: (...rest: any) => {}
  cancel: (...rest: any) => {}
  [key: string]: any
}

export type Effect = (action: AnyAction, effects: EffectsCommandMap) => void
export type EffectType = 'takeEvery' | 'takeLatest' | 'watcher' | 'throttle'
export type EffectWithType = [Effect, { type: EffectType }]
export type Subscription = (api: SubscriptionAPI, done: () => {}) => void
export type ReducersMapObjectWithEnhancer = [ReducersMapObject, ReducerEnhancer]

export interface EffectsMapObject {
  [key: string]: Effect | EffectWithType
}

export interface SubscriptionAPI {
  dispatch: Dispatch<any>
}

export interface SubscriptionsMapObject {
  [key: string]: Subscription
}

export interface Model {
  namespace: string
  state?: object
  reducers?: ReducersMapObject | ReducersMapObjectWithEnhancer
  effects?: EffectsMapObject
  subscriptions?: SubscriptionsMapObject
}

export interface RouterAPI {
  app: DvaInstance
}

export type Router = (api?: RouterAPI) => JSX.Element | object

export interface DvaInstance {
  /**
   * Register an object of hooks on the application.
   *
   * @param hooks
   */
  use: (hooks: Hooks) => void

  /**
   * Register a model.
   *
   * @param model
   */
  model: (model: Model) => void

  /**
   * Unregister a model.
   *
   * @param namespace
   */
  unmodel: (namespace: string) => void

  /**
   * Config router. Takes a function with arguments { history, dispatch },
   * and expects router config. It use the same api as react-router,
   * return jsx elements or JavaScript Object for dynamic routing.
   *
   * @param router
   */
  router: (router: Router) => void

  /**
   * Start the application. Selector is optional. If no selector
   * arguments, it will return a function that return JSX elements.
   *
   * @param selector
   */
  start: (selector?: HTMLElement | string) => any
}
type dva = (opts?: DvaOption) => DvaInstance
export default dva

export interface DvaInitOptions {
  initialState: object
  models: any[]
}
