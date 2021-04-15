<template>
  <div class="fixed z-50 bottom-4 right-4">
    <div class="flex flex-end space-x-4">
      <!-- Go to top button -->
      <button v-if="scrolled" class="rounded-full w-16 h-16 focus:outline-none bg-gray-600 text-white" aria-label="Go to top." @click="scrollToTop()">
        <FontAwesomeIcon :icon="fa.faChevronUp" class="text-3xl inline-block self-center hover:text-primary-500" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { faChevronUp, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup () {
    return {
      scrolled: false,
      fa: {
        faChevronUp,
        faBars,
        faTimes
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 0
    },
    scrollToTop () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
})
</script>
