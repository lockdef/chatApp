import { Store } from 'vuex'
import { firestore } from '@/infrastructure/firebase'
import { Chat } from '@/entities/chat'
import { getState, commit } from '@/store/chat'

const chatCollection = 'chat'

export default class ChatRepository {
  /**
   * チャットをStoreから取得する
   * @param store
   */
  get(store: Store<any>) {
    return getState(store, 'chat')
  }

  /**
   * チャットを作成する
   * @param chat
   */
  create(chat: Chat) {
    firestore.collection(chatCollection).add(chat)
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
   * チャットの購読を終了する
   * @param store
   */
  unsubscribe(store: Store<any>) {
    getState(store, 'unsubscribe')()
  }
}
