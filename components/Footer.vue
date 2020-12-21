<template>
  <div
    class="flex justify-between absolute bottom-0 max-w-4xl w-full bg-white-bg"
  >
    <textarea
      v-model="message"
      :placeholder="
        user ? '新しいメッセージを作成する' : 'サインインしてください'
      "
      class="scrollbar-none bg-gray-input w-full h-16 px-6 py-4 lg:ml-12 ml-4 my-6 rounded-full resize-none text-lg text-black-text boder-solid border-green-main focus:bg-white-bg focus:outline-none focus:ring focus:ring-green-main"
      cols="1"
      :disabled="!user"
      @keydown.enter.ctrl="createChat"
    />
    <button
      :class="{ 'opacity-60 cursor-default': message.length === 0 }"
      class="text-green-text text-right rounded-full focus:outline-none my-4 mr-4 ml-3 lg:mr-12"
      @click="createChat"
    >
      <font-awesome-icon
        :icon="['far', 'paper-plane']"
        :class="{ 'hover:bg-green-hover': message.length > 0 }"
        class="text-6xl p-3 rounded-full"
      />
    </button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { CreateChatDto } from '@/entities/chat'
import CreateChatUseCase from '@/usecase/chat/createChatUseCase'
import GetUserUsecase from '@/usecase/auth/getUserUsecase'

const createChatUseCase = new CreateChatUseCase()
const getUserUsecase = new GetUserUsecase()

type LocalState = {
  message: string
}

export default Vue.extend({
  data(): LocalState {
    return {
      message: '',
    }
  },
  computed: {
    user() {
      return getUserUsecase.execute(this.$store)
    },
  },
  methods: {
    async createChat() {
      if (this.message.length === 0) {
        return
      }
      if (!this.user) return
      const userId = this.user.uid
      const dto: CreateChatDto = {
        userId,
        sentence: this.message,
      }
      this.message = ''
      await createChatUseCase.execute(dto)
      const element = document.getElementById('messageBox')
      if (!element) return
      element.scrollTop = element.scrollHeight
    },
  },
})
</script>
<style scoped>
.scrollbar-none {
  -ms-overflow-style: none;
}
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
</style>
