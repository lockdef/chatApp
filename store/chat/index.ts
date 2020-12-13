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

export const mutations: Mutation = {
  ADD(state: State, chat: Chat) {
    if (state.chat.find((c) => c.chatId === chat.chatId)) return
    state.chat.push(chat)
  },
  SET(state: State, chat: Chat) {
    if (state.chat.find((c) => c.chatId === chat.chatId)) return
    state.chat.unshift(chat)
  },
  SET_UNSUBSCRIBE(state: State, unsubscribe: () => void) {
    state.unsubscribe = unsubscribe
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

export const getState = <T extends keyof State>(state: Store<any>, name: T) => {
  return state.state.chat[name] as State[T]
}
