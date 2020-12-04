export interface Chat {
  /** チャットID */
  chatId: string

  /** 作成日 */
  createdAt: Date

  /** ユーザーID */
  userId: string

  /** 内容 */
  sentence: string
}
