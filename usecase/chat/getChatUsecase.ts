import { Store } from 'vuex'
import ChatRepository from '@/repositories/chatRepository'
import { Chat } from '@/entities/chat'

export default class GetChatUsecase {
  chatRepository: ChatRepository

  constructor() {
    this.chatRepository = new ChatRepository()
  }

  /**
   * チャットを取得する
   * @param store
   */
  execute(store: Store<any>): Chat[] {
    return this.chatRepository.get(store)
  }
}
