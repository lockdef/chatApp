import { firebase } from '@/infrastructure/firebase'

export const ModuleName = 'user'

export interface State {
  user: firebase.User | null
  unsubscribe: firebase.Unsubscribe
}

export const MutationName = {
  SET: 'SET' as const,
  SET_UNSUBSCRIBE: 'SET_UNSUBSCRIBE' as const,
  CLEAR: 'CLEAR' as const,
}

export const MutationPath = {
  [MutationName.SET]: `${ModuleName}/SET`,
  [MutationName.SET_UNSUBSCRIBE]: `${ModuleName}/SET_UNSUBSCRIBE`,
  [MutationName.CLEAR]: `${ModuleName}/CLEAR`,
}

export type MutationPayload = {
  [MutationName.SET]: firebase.User
  [MutationName.SET_UNSUBSCRIBE]: firebase.Unsubscribe
  [MutationName.CLEAR]: undefined
}

export type Mutation = {
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
