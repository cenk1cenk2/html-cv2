<template>
  <nav class="fixed top-0 z-40 w-full dark:border-gray-600 transition-all" :class="{ 'shadow border-b bg-gray-100 dark:bg-gray-800': scrolled }">
    <div class="lg:container mx-auto flex-1 px-4 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="lg:w-1/5 flex items-center pr-4" @click.stop="noop">
          <NuxtLink to="/" class="flex-shrink-0 flex-1 font-bold text-3xl" aria-label="cenk@kilic.dev logo">
            <span v-if="!logo">cenk@kilic.dev</span>

            <img v-if="logo" :src="logo.light" class="h-8 max-w-full light-img" alt="cenk@kilic.dev logo" />
            <img v-if="logo" :src="logo.dark" class="h-8 max-w-full dark-img" alt="cenk@kilic.dev logo" />
          </NuxtLink>
        </div>

        <div class="lg:w-1/5 flex items-center pl-4 lg:pl-8 justify-end">
          <div class="items-center lg:flex hidden">
            <AppIcons />
          </div>
        </div>
      </div>
    </div>

    <div class="fixed z-50 bottom-4 right-4">
      <div class="flex flex-end space-x-4">
        <!-- Menu button on smaller screens -->
        <button v-if="scrolled" class="rounded-full w-16 h-16 focus:outline-none bg-gray-600 text-white" aria-label="Go to top." @click="scrollToTop()">
          <FontAwesomeIcon :icon="fa.faChevronUp" class="text-3xl inline-block self-center hover:text-primary-500" />
        </button>
        <!-- Go to top button -->
        <button class="lg:hidden rounded-full w-16 h-16 focus:outline-none bg-gray-600 text-white" aria-label="Menu" @click.stop="menu = !menu">
          <FontAwesomeIcon v-if="menu" :icon="fa.faTimes" class="text-3xl inline-block self-center hover:text-primary-500 pt-1" />
          <FontAwesomeIcon v-else :icon="fa.faBars" class="text-3xl inline-block self-center hover:text-primary-500 pt-1" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { faChevronUp, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { defineComponent } from '@vue/composition-api'

import {} from '~/store'

export default defineComponent({
  setup () {},
  data () {
    return {
      scrolled: false
    }
  },
  fetch ({ app: { $accessor } }) {},
  computed: {
    menu: {
      get () {
        return this.$store.state.menu.open
      },
      set (val) {
        this.$store.commit('menu/toggle', val)
      }
    },
    fa () {
      return {
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
    },
    noop () {}
  }
})
</script>
