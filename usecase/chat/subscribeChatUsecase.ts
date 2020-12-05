import { Store } from 'vuex'
import ChatRepository from '@/repositories/chatRepository'

export default class SubscribeChatUsecase {
  chatRepository: ChatRepository

  constructor() {
    this.chatRepository = new ChatRepository()
  }

  /**
   * チャットの購読を開始する
   * @param store
   */
  execute(store: Store<any>) {
    this.chatRepository.subscribe(store)
  }

  clear(store: Store<any>) {
    this.chatRepository.unsubscribe(store)
  }
}
