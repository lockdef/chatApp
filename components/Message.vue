<template>
  <div :class="{ 'justify-end': isMyself }" class="flex">
    <div
      :class="
        isMyself
          ? 'bg-green-main rounded-br-none'
          : 'bg-white-bg rounded-bl-none'
      "
      class="px-6 py-4 my-3 mx-6 rounded-full"
    >
      <p
        :class="isMyself ? 'text-white-bg' : 'text-black-text'"
        v-text="message"
      />
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
