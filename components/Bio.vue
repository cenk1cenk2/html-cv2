<template>
  <AppSection title="bio">
    <div class="w-full bg-gray-100 dark:bg-gray-800 shadow-xl">
      <article class="flex justify-center p-2 lg:p-4">
        <nuxt-content :document="bio" class="prose dark:prose-dark prose-xl lg:prose-2xl" />
      </article>
    </div>
  </AppSection>
</template>

<script lang="ts">
import { defineComponent, useContext, computed, useStatic } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const { $content, params } = useContext()
    const slug = computed(() => params.value.slug)

    const bio = useStatic(
      async () => {
        const bio = await $content('bio').fetch()

        return bio
      },
      slug,
      'bio'
    )

    return {
      bio
    }
  }
})
</script>
