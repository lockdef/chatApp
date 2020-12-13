<template>
  <div class="bg-gradient-to-br from-green-bg to-purple-bg w-screen h-screen">
    <Header />
    <div
      id="messageBox"
      class="pt-20 pb-28 overflow-y-scroll scrollbar-none mx-auto max-w-4xl h-screen bg-white-blur"
    >
      <div v-for="chat in chats" :key="chat.id" class="flex flex-col">
        <Message :message="chat.sentence" :is-myself="false" />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { Chat } from '@/entities/chat'

import Header from '@/components/Header.vue'
import Message from '@/components/Message.vue'
import Footer from '@/components/Footer.vue'

import GetChatUsecase from '@/usecase/chat/getChatUsecase'
import FetchChatUsecase from '@/usecase/chat/fetchChatUsecase'
import SubscribeChatUsecase from '@/usecase/chat/subscribeChatUsecase'

const getChatUsecase = new GetChatUsecase()
const fetchChatUsecase = new FetchChatUsecase()
const subscribeChatUseCase = new SubscribeChatUsecase()

export default Vue.extend({
  components: {
    Header,
    Message,
    Footer,
  },
  async fetch({ store }) {
    await fetchChatUsecase.execute(store)
    subscribeChatUseCase.execute(store)
  },
  computed: {
    chats(): Chat[] {
      return getChatUsecase.execute(this.$store)
    },
  },
  mounted() {
    this.scroolToBottom()
  },
  destroyed() {
    subscribeChatUseCase.clear(this.$store)
  },
  methods: {
    scroolToBottom() {
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
