<template>
  <div class="bg-gradient-to-br from-green-bg to-purple-bg w-screen h-screen">
    <Header />
    <div class="pt-20 mx-auto max-w-4xl h-screen bg-white-blur">
      <div class="flex flex-col">
        <Message message="こんぺこー！！" :is-myself="true" />
        <Message message="こんぺこー！！" :is-myself="false" />
        <Message message="こんぺこー！！" :is-myself="true" />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Header from '@/components/Header.vue'
import Message from '@/components/Message.vue'
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  components: {
    Header,
    Message,
    Footer,
  },
})
</script>
<style></style>
