import { Store } from 'vuex'
import ChatRepository from '@/repositories/chatRepository'

export default class FetchChatUsecase {
  chatRepository: ChatRepository

  constructor() {
    this.chatRepository = new ChatRepository()
  }

  /**
   * チャットをStateに保管する
   * @param store
   */
  async execute(store: Store<any>) {
    await this.chatRepository.fetch(store)
  }
}
