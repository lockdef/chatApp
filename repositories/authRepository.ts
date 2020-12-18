import { Store } from 'vuex'
import { firebase, auth, googleProvider } from '@/infrastructure/firebase'
import { commit, getState } from '@/store/user'

export default class AuthRepository {
  /**
   * サインイン/ログインを行う
   */
  signIn() {
    auth.signInWithPopup(googleProvider).then()
  }

  /**
   * userの購読を開始する
   * @param store
   */
  subscribe(store: Store<any>) {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const cloneUser = JSON.parse(JSON.stringify(user))
        commit(store, 'SET', cloneUser)
      }
    })
    commit(store, 'SET_UNSUBSCRIBE', unsubscribe)
  }

  /**
   * userのprofileを更新する
   * @param store
   * @param profile
   */
  update(store: Store<any>, profile: Partial<firebase.User>) {
    const user = getState(store, 'user')
    if (!user) return
    user
      .updateProfile(profile)
      .then(() => {})
      .catch(() => {})
  }

  /**
   * ユーザー情報を取得する
   * @param store
   */
  getUser(store: Store<any>): firebase.User | null {
    return getState(store, 'user')
  }

  /**
   * ユーザー情報の購読を終了する
   * @param store
   */
  unsubscribe(store: Store<any>) {
    commit(store, 'CLEAR', undefined)
    getState(store, 'unsubscribe')()
  }
}
