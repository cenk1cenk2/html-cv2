<template>
  <section id="user-card">
    <div class="bg-cover" :style="{ 'background-image': `url('${require('@/assets/img/background.png')}')` }">
      <div class="flex items-start pt-20 pb-20 lg:pt-0 lg:pb-0 lg:items-center h-auto lg:h-screen lg:my-0 lg:pl-48">
        <div
          class="max-w-lg lg:max-w-3xl shadow-2xl transition ease-in-out duration-300 bg-white dark:bg-gray-800 bg-opacity-90 border-2 lg:border-4 border-gray-200 dark:border-gray-700 mx-auto"
        >
          <div class="p-4 lg:p-12 text-center lg:text-left">
            <div class="-mt-16 lg:-mt-96 lg:relative lg:top-72 lg:-left-64 lg:mr-64">
              <div
                class="block rounded-full shadow-xl bg-cover bg-center transition ease-in-out duration-500 border-2 lg:border-4 border-gray-300 dark:border-gray-600 h-48 w-48 lg:h-96 lg:w-96 mx-auto lg:mx-0"
                :style="{ 'background-image': `url('${require('@/assets/img/profile-pic.png')}')` }"
              ></div>
            </div>
            <div class="lg:pl-48">
              <h1 class="text-4xl font-bold pt-8 lg:pt-0 text-center">Cenk Kılıç</h1>

              <div class="mx-auto lg:mx-0 pt-3 border-b-2 border-primary-500 opacity-50"></div>
              <p class="pt-4 text-base font-bold flex justify-center">Electrical&Electronics Engineer by trait, developer by heart.</p>
              <p class="pt-4 text-sm flex justify-center">Vienna, Austria</p>

              <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                <a :href="`mailto:cenk@kilic.dev`" target="_blank"><FontAwesomeIcon :icon="fa.email" class="text-4xl transform hover:scale-110 hover:text-primary-500" /></a>
                <a href="https://srcs.kilic.dev" target="_blank"><FontAwesomeIcon :icon="fa.github" class="text-4xl transform hover:scale-110 hover:text-primary-500" /></a>
                <a href="https://linkedin.com/in/cenkkilic" target="_blank"
                  ><FontAwesomeIcon :icon="fa.linkedin" class="text-4xl transform hover:scale-110 hover:text-primary-500"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    return {
      fa: {
        github: faGithub,
        linkedin: faLinkedin,
        email: faEnvelope
      }
    }
  }
})
</script>
