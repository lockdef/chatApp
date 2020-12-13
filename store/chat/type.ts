import { Chat } from '@/entities/chat'

export const ModuleName = 'chat'

export interface State {
  chat: Chat[]
  unsubscribe: () => void
}

export const MutationName = {
  ADD: 'ADD' as const,
  SET: 'SET' as const,
  SET_UNSUBSCRIBE: 'SET_UNSUBSCRIBE' as const,
  CLEAR: 'CLEAR' as const,
}

export const MutationPath = {
  [MutationName.ADD]: `${ModuleName}/ADD`,
  [MutationName.SET]: `${ModuleName}/SET`,
  [MutationName.SET_UNSUBSCRIBE]: `${ModuleName}/SET_UNSUBSCRIBE`,
  [MutationName.CLEAR]: `${ModuleName}/CLEAR`,
}

export type MutationPayload = {
  [MutationName.ADD]: Chat
  [MutationName.SET]: Chat
  [MutationName.SET_UNSUBSCRIBE]: () => void
  [MutationName.CLEAR]: undefined
}

export type Mutation = {
  [MutationName.ADD]: (state: State, payload: MutationPayload['ADD']) => void
  [MutationName.SET]: (state: State, payload: MutationPayload['SET']) => void
  [MutationName.SET_UNSUBSCRIBE]: (
    state: State,
    payload: MutationPayload['SET_UNSUBSCRIBE']
  ) => void
  [MutationName.CLEAR]: (
    state: State,
    payload: MutationPayload['CLEAR']
  ) => void
}
