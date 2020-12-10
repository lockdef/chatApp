<template>
  <div>
    <div
      :class="isMyself ? 'bg-green-main' : 'bg-white-bg'"
      class="p-6 inline-block my-8 mx-"
    >
      <p class="text-black-text" v-text="message" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
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
     * ユーザー自身のメッセージかどうか
     */
    isMyself: {
      required: true,
      type: Boolean,
    },
  },
})
</script>
