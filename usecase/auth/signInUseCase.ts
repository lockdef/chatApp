import AuthRepository from '@/repositories/authRepository'

export default class SignInUsecase {
  authRepository: AuthRepository

  constructor() {
    this.authRepository = new AuthRepository()
  }

  /**
   * サインインする
   */
  execute() {
    this.authRepository.signIn()
  }
}
