import { Store } from 'vuex'
import { Chat } from '@/entities/chat'
import {
  Mutation,
  MutationName,
  MutationPayload,
  MutationPath,
  State,
} from './type'

export const state = (): State => ({
  chat: [],
  unsubscribe: () => {},
})

export const mutation: Mutation = {
  ADD(state: State, chat: Chat) {
    state.chat.push(chat)
  },
  GET(state: State) {
    return state.chat
  },
  CLEAR(state: State) {
    state.chat = []
  },
}

export const commit = <T extends keyof typeof MutationName>(
  state: Store<any>,
  module: T,
  payload: MutationPayload[T]
) => {
  state.commit(MutationPath[module], payload)
}
