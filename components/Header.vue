<template>
  <div
    class="fixed top-0 w-screen bg-white-bg flex justify-between items-center flex-d h-20"
  >
    <h1 class="text-green-text px-4 m-3 mr-0 text-3xl font-bold">ChatApp</h1>
    <div>
      <a
        v-if="user"
        href="https://www.notion.so/ChatApp-3c87cc033e454e0da9590eb5e8b23cc3"
        class="bg-white-bg border-green-text font-bold border-solid border-2 rounded-2xl px-4 py-3 m-3 mr-8 text-md text-green-text"
      >
        About
      </a>
      <button
        v-if="!user"
        class="bg-white-bg border-green-text font-bold border-solid border-2 rounded-2xl px-4 py-3 m-3 mr-8 text-md text-green-text"
        @click="signIn"
      >
        SignIn
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

import SignInUsecase from '@/usecase/auth/signInUsecase'
import GetUserUsecase from '@/usecase/auth/getUserUsecase'

const signInUsecase = new SignInUsecase()
const getUserUsecase = new GetUserUsecase()

export default Vue.extend({
  computed: {
    user() {
      return getUserUsecase.execute(this.$store)
    },
  },
  methods: {
    signIn() {
      signInUsecase.execute()
    },
  },
})
</script>
