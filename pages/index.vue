<template>
  <div class="bg-gradient-to-br from-green-bg to-purple-bg w-screen h-screen">
    <Header />
    <div class="pt-20 mx-auto max-w-4xl h-screen bg-white-blur">
      <Message message="こんぺこー！！" :is-myself="true" />
      <Message message="こんぺこー！！" :is-myself="false" />
      <Message message="こんぺこー！！" :is-myself="true" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Header from '@/components/Header.vue'
import Message from '@/components/Message.vue'

export default Vue.extend({
  components: {
    Header,
    Message,
  },
})
</script>
<style></style>
