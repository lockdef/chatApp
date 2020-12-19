<template>
  <div>
    <loading
      :active="true"
      loader="dots"
      opacity="1"
      color=""
      :is-full-page="true"
    ></loading>
    <div class="bg-gradient-to-br from-green-bg to-purple-bg w-screen h-screen">
      <Header />
      <div
        id="messageBox"
        class="pt-20 pb-28 overflow-y-scroll scrollbar-none mx-auto max-w-4xl h-screen bg-white-blur"
      >
        <div v-for="chat in chats" :key="chat.id" class="flex flex-col">
          <Message :message="chat.sentence" :chat-id="chat.userId" />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import { firebase } from '@/infrastructure/firebase'

import { Chat } from '@/entities/chat'

import Header from '@/components/Header.vue'
import Message from '@/components/Message.vue'
import Footer from '@/components/Footer.vue'

import GetChatUsecase from '@/usecase/chat/getChatUsecase'
import FetchChatUsecase from '@/usecase/chat/fetchChatUsecase'
import SubscribeChatUsecase from '@/usecase/chat/subscribeChatUsecase'
import GetUserUsecase from '@/usecase/auth/getUserUsecase'
import SubscribeUserUsecase from '@/usecase/auth/subscribeUserUsecase'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

const getChatUsecase = new GetChatUsecase()
const fetchChatUsecase = new FetchChatUsecase()
const subscribeChatUsecase = new SubscribeChatUsecase()
const getUserUsecase = new GetUserUsecase()
const subscribeUserUsecase = new SubscribeUserUsecase()

export default Vue.extend({
  components: {
    Header,
    Message,
    Footer,
    Loading,
  },
  async fetch({ store }: Context) {
    await fetchChatUsecase.execute(store)
  },
  computed: {
    chats(): Chat[] {
      return getChatUsecase.execute(this.$store)
    },
    user(): firebase.User | null {
      return getUserUsecase.execute(this.$store)
    },
  },
  created() {
    subscribeUserUsecase.execute(this.$store)
    subscribeChatUsecase.execute(this.$store)
  },
  mounted() {
    this.scroolToBottom()
  },
  destroyed() {
    subscribeChatUsecase.clear(this.$store)
    // subscribeUserUsecase.clear(this.$store)
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
