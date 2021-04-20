<template>
  <AppSection title="bio">
    <div class="w-full bg-gray-100 dark:bg-gray-800 shadow-xl">
      <article class="mx-auto p-2 lg:p-4 py-4 prose dark:prose-dark prose-xl lg:prose-2xl">
        <nuxt-content v-if="!readMore" :document="{ body: bio.excerpt }" />
        <nuxt-content v-if="readMore" :document="{ body: bio.body }" />
        <div class="text-center">
          <button
            class="bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 font-bold py-2 px-4 inline-flex items-center shadow-lg focus:outline-none"
            @click="readMoreToggle"
          >
            <span v-if="!readMore"><FontAwesomeIcon :icon="fa.down" class="pr-1 mr-2" />Read More...</span>
            <span v-if="readMore"><FontAwesomeIcon :icon="fa.up" class="pr-1 mr-2" />I had enough</span>
          </button>
        </div>
      </article>
    </div>
  </AppSection>
</template>

<script lang="ts">
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { IContentDocument } from '@nuxt/content/types/content'
import { defineComponent, useContext, computed, useStatic } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const { $content, params } = useContext()
    const slug = computed(() => params.value.slug)

    const bio = useStatic(
      async () => {
        const document = (await $content('bio').fetch()) as IContentDocument

        return document
      },
      slug,
      'bio'
    )

    return {
      bio,
      readMore: false,
      fa: {
        up: faChevronUp,
        down: faChevronDown
      }
    }
  },
  methods: {
    readMoreToggle () {
      this.readMore = !this.readMore
    }
  }
})
</script>
