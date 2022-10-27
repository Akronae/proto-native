import { Dispatch, SetStateAction } from "react"

/**
 * Extension of the value type returned by React.useState().
 */
export class ReactiveState<T> extends Array<T | Dispatch<SetStateAction<T>>> {
  0: T
  1: Dispatch<SetStateAction<T>>
  
  constructor(getter: T, setter: Dispatch<SetStateAction<T>>) {
    super()
    this[0] = getter
    this[1] = setter
  }
  
  get state(): T {
    return this[0]
  }
  set state(state: T) {
    if (this.state === state) return
    this[1](state)
  }
}