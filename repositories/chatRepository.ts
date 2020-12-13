import { Store } from 'vuex'
import { firestore } from '@/infrastructure/firebase'
import { Chat, CreateChatDto } from '@/entities/chat'
import { getState, commit } from '@/store/chat'
import { serverTimestamp } from '@/utils/time'

const chatCollection = 'chat'

export default class ChatRepository {
  /**
   * チャットをStoreから取得する
   * @param store
   */
  get(store: Store<any>): Chat[] {
    return getState(store, 'chat')
  }

  /**
   * チャットを作成する
   * @param chat
   */
  async create(chat: CreateChatDto): Promise<void> {
    await firestore
      .collection(chatCollection)
      .add({ ...chat, createdAt: serverTimestamp })
  }

  /**
   * チャットの購読を開始する
   * @param store
   */
  subscribe(store: Store<any>) {
    const unsubscribe = firestore
      .collection(chatCollection)
      .orderBy('createdAt', 'desc')
      .limit(10)
      .onSnapshot((chatSnapshot) => {
        chatSnapshot.docChanges().forEach((snapshot) => {
          const chat = {
            chatId: snapshot.doc.id,
            ...snapshot.doc.data(),
          } as Chat

          switch (snapshot.type) {
            case 'added':
              commit(store, 'ADD', chat)
              break
          }
        })
      })
    commit(store, 'SET_UNSUBSCRIBE', unsubscribe)
  }

  /**
   * chatを取得する
   * @param store
   */
  async fetch(store: Store<any>): Promise<void> {
    await firestore
      .collection(chatCollection)
      .orderBy('createdAt', 'desc')
      .limit(10)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const chat = {
            chatId: doc.id,
            ...doc.data(),
          } as Chat
          commit(store, 'SET', chat)
        })
      })
  }

  /**
   * チャットの購読を終了する
   * @param store
   */
  unsubscribe(store: Store<any>) {
    getState(store, 'unsubscribe')
  }
}
