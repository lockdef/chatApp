<template>
  <div class="bg-gradient-to-br from-green-bg to-purple-bg w-screen h-screen">
    <Header />
    <div
      id="messageBox"
      class="pt-20 pb-28 overflow-y-scroll scrollbar-none mx-auto max-w-4xl h-screen bg-white-blur"
    >
      <div v-for="chat in chats" :key="chat.id" class="flex flex-col">
        <Message
          :message="chat.sentence"
          :is-myself="chat.userId === user.uid"
        />
      </div>
      <Footer />
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
import SignInUsecase from '@/usecase/auth/signInUsecase'
import SubscribeUserUsecase from '@/usecase/auth/subscribeUserUsecase'
import UpdateUserUsecase from '@/usecase/auth/updateUserUsecase'

const getChatUsecase = new GetChatUsecase()
const fetchChatUsecase = new FetchChatUsecase()
const subscribeChatUsecase = new SubscribeChatUsecase()
const getUserUsecase = new GetUserUsecase()
const signInUsecase = new SignInUsecase()
const subscribeUserUsecase = new SubscribeUserUsecase()
const updateUserUsecase = new UpdateUserUsecase()

export default Vue.extend({
  middleware({ store }) {
    signInUsecase.execute()
    subscribeUserUsecase.execute(store)
  },
  components: {
    Header,
    Message,
    Footer,
  },
  async fetch({ store }: Context) {
    await fetchChatUsecase.execute(store)
  },
  computed: {
    chats(): Chat[] {
      return getChatUsecase.execute(this.$store)
    },
    chatsLength(): number {
      return this.chats.length
    },
    user(): firebase.User | null {
      return getUserUsecase.execute(this.$store)
    },
  },
  watch: {
    chatsLength: {
      handler() {
        this.scroolToBottom()
      },
    },
  },
  created() {
    subscribeChatUsecase.execute(this.$store)
  },
  mounted() {
    this.scroolToBottom()
  },
  destroyed() {
    subscribeChatUsecase.clear(this.$store)
  },
  methods: {
    scroolToBottom() {
      const element = document.getElementById('messageBox')
      if (!element) return
      element.scrollTop = element.scrollHeight
    },
    updateProfile() {
      updateUserUsecase.execute(this.$store, {})
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
