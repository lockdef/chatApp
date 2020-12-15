import { Store } from 'vuex'
import { firebase } from '@/infrastructure/firebase'
import AuthRepository from '@/repositories/authRepository'

export default class UpdateUserUsecase {
  authRepository: AuthRepository

  constructor() {
    this.authRepository = new AuthRepository()
  }

  /**
   * ユーザー情報を更新する
   * @parame store
   */
  execute(store: Store<any>, profile: Partial<firebase.User>) {
    this.authRepository.update(store, profile)
  }
}
