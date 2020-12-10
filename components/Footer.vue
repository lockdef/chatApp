<template>
  <div class="flex absolute bottom-0 max-w-4xl w-full bg-white-bg">
    <textarea
      v-model="message"
      class="bg-gray-input w-180 h-16 px-6 py-4 lg:ml-12 ml-4 my-6 rounded-full resize-none text-lg text-black-text focus:outline-none focus:ring focus:border-green-main focus:ring-offset-green-main"
      cols="1"
    />
    <fa-icon icon="paper-plane" class="h-16 text-green-main" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

type LocalState = {
  message: string
}

export default Vue.extend({
  data(): LocalState {
    return {
      message: '',
    }
  },
})
</script>
