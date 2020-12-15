import { Store } from 'vuex'
import { firebase, auth } from '@/infrastructure/firebase'
import { commit, getState } from '@/store/user'

export default class authRepository {
  /**
   * サインイン/ログインを行う
   */
  signIn() {
    auth
      .signInAnonymously()
      .then(() => {})
      .catch(() => {})
  }

  /**
   * userの購読を開始する
   * @param store
   */
  subscribe(store: Store<any>) {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        commit(store, 'SET', user)
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
    user.updateProfile(profile)
  }

  /**
   * ユーザー情報を取得する
   * @param store
   */
  getUser(store: Store<any>): firebase.User | null {
    return getState(store, 'user')
  }
}
