<template>
  <div class="grid grid-cols-12 py-4 lg:py-8">
    <div class="hidden 2xl:grid 2xl:col-span-2 text-8xl text-center">
      <p class="side-text">{{ title }}</p>
    </div>
    <div class="col-span-full 2xl:col-span-8 w-full max-w-11/12 flex justify-center px-2 lg:px-4">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    return {}
  }
})
</script>

<style lang="postcss" scoped>
.side-text {
  @apply text-gray-200 dark:text-gray-700;

  writing-mode: vertical-lr;
  transform: rotate(180deg);
}
</style>
