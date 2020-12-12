import ChatRepository from '@/repositories/chatRepository'
import { CreateChatDto } from '@/entities/chat'

export default class CreateChatUsecase {
  chatRepository: ChatRepository

  constructor() {
    this.chatRepository = new ChatRepository()
  }

  /**
   * チャットを作成する
   * @param store
   */
  async excute(chat: CreateChatDto): Promise<void> {
    await this.chatRepository.create(chat)
  }
}
