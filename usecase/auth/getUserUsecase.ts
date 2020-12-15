import { Store } from 'vuex'
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
  execute(store: Store<any>) {
    this.authRepository.getUser(store)
  }
}
