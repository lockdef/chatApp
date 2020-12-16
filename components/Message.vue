<template>
  <div :class="{ 'justify-end': isMyself }" class="flex">
    <div
      :class="
        isMyself
          ? 'bg-green-main rounded-br-none'
          : 'bg-white-bg rounded-bl-none'
      "
      class="px-6 py-4 my-3 mx-4 rounded-full"
    >
      <p
        :class="isMyself ? 'text-white-bg' : 'text-black-text'"
        v-text="message"
      />
      <p class="text-black-text" v-text="`name: ${user.displayName}`" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { firebase } from '@/infrastructure/firebase'

import GetUserUsecase from '@/usecase/auth/getUserUsecase'

const getUserUsecase = new GetUserUsecase()

export default Vue.extend({
  props: {
    /**
     * メッセージ本文
     */
    message: {
      required: true,
      type: String,
    },
    /**
     * チャットID
     */
    chatId: {
      required: true,
      type: String,
    },
  },
  computed: {
    user(): firebase.User | null {
      return getUserUsecase.execute(this.$store)
    },
    isMyself(): boolean {
      const uid = this.user ? this.user.uid : 'null'
      return this.chatId === uid
    },
  },
})
</script>
