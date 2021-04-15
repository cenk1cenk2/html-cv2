<template>
  <div>
    <section>
      <UserCard />
    </section>
    <section><WhatDidIDo></WhatDidIDo></section>
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
