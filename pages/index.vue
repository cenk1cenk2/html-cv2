<template>
  <div>
    <UserCard />
    <Bio />
    <WhatDidIDo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    return {}
  },
  head: { title: 'Cenk Kılıç' }
})
</script>
