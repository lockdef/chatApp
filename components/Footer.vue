<template>
  <div
    class="flex justify-between absolute bottom-0 max-w-4xl w-full bg-white-bg"
  >
    <textarea
      v-model="message"
      placeholder="新しいメッセージを作成する"
      class="bg-gray-input w-full h-16 px-6 py-4 lg:ml-12 ml-4 my-6 rounded-full resize-none text-lg text-black-text boder-solid border-green-main focus:bg-white-bg focus:outline-none focus:ring focus:ring-green-main"
      cols="1"
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

const createChatUseCase = new CreateChatUseCase()

type LocalState = {
  message: string
}

export default Vue.extend({
  data(): LocalState {
    return {
      message: '',
    }
  },
  methods: {
    async createChat() {
      if (this.message.length === 0) {
        return
      }
      const dto: CreateChatDto = {
        userId: '',
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
