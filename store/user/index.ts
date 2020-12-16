import { Store } from 'vuex'
import { firebase } from '@/infrastructure/firebase'
import {
  Mutation,
  MutationName,
  MutationPayload,
  MutationPath,
  State,
} from './type'

export const state = (): State => ({
  user: null,
  unsubscribe: () => {},
})

export const mutations: Mutation = {
  SET(state: State, user: firebase.User) {
    state.user = user
  },
  SET_UNSUBSCRIBE(state: State, unsubscribe: firebase.Unsubscribe) {
    state.unsubscribe = unsubscribe
  },
  CLEAR(state: State) {
    state.user = null
  },
}

export const commit = <T extends keyof typeof MutationName>(
  state: Store<any>,
  module: T,
  payload: MutationPayload[T]
) => {
  state.commit(MutationPath[module], payload)
}

export const getState = <T extends keyof State>(state: Store<any>, name: T) => {
  return state.state.user[name] as State[T]
}
