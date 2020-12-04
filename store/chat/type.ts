import { Chat } from '@/entities/chat'

export const ModuleName = 'chat'

export interface State {
  chat: Chat[]
  unsubscribe: () => void
}

export const MutationName = {
  ADD: 'ADD' as const,
  GET: 'GET' as const,
  CLEAR: 'CLEAR' as const,
}

export const MutationPath = {
  [MutationName.ADD]: `${ModuleName}/ADD`,
  [MutationName.GET]: `${ModuleName}/GET`,
  [MutationName.CLEAR]: `${ModuleName}/CLEAR`,
}

export type MutationPayload = {
  [MutationName.ADD]: Chat
  [MutationName.GET]: undefined
  [MutationName.CLEAR]: undefined
}

export type Mutation = {
  [MutationName.ADD]: (state: State, payload: MutationPayload['ADD']) => void
  [MutationName.GET]: (state: State, payload: MutationPayload['ADD']) => Chat[]
  [MutationName.CLEAR]: (
    state: State,
    payload: MutationPayload['CLEAR']
  ) => void
}
