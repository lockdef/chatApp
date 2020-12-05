import ChatRepository from '@/repositories/chatRepository'
import { Chat } from '~/entities/chat'

export default class CreateChatUsecase {
  chatRepository: ChatRepository

  constructor() {
    this.chatRepository = new ChatRepository()
  }

  /**
   * チャットを作成する
   * @param store
   */
  excute(chat: Chat) {
    this.chatRepository.create(chat)
  }
}
