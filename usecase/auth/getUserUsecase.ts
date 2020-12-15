import { Store } from 'vuex'
import { firebase } from '@/infrastructure/firebase'
import AuthRepository from '@/repositories/authRepository'

export default class GetUserUsecase {
  authRepository: AuthRepository

  constructor() {
    this.authRepository = new AuthRepository()
  }

  /**
   * ユーザー情報を取得する
   * @parame store
   */
  execute(store: Store<any>): firebase.User | null {
    return this.authRepository.getUser(store)
  }
}
