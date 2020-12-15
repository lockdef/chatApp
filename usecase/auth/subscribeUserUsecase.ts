import { Store } from 'vuex'
import AuthRepository from '@/repositories/authRepository'

export default class SubscribeUserUsecase {
  authRepository: AuthRepository

  constructor() {
    this.authRepository = new AuthRepository()
  }

  /**
   * ユーザー情報を購読を開始する
   * @parame store
   */
  execute(store: Store<any>) {
    this.authRepository.subscribe(store)
  }

  /**
   * ユーザー情報の購読を終了する
   * @param store
   */
  clear(store: Store<any>) {
    this.authRepository.unsubscribe(store)
  }
}
