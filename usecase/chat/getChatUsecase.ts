import { Store } from 'vuex'
import ChatRepository from '@/repositories/chatRepository'

export default class GetChatUsecase {
  chatRepository: ChatRepository

  constructor() {
    this.chatRepository = new ChatRepository()
  }

  /**
   * チャットを取得する
   * @param store
   */
  excute(store: Store<any>) {
    this.chatRepository.get(store)
  }
}
