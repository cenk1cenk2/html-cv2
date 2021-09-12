<template>
  <div class="p-2 lg:p-4 py-4 bg-gray-100 dark:bg-gray-800 shadow-xl w-full">
    <h2 class="text-3xl font-bold text-center">
      <FontAwesomeIcon :icon="timelineIcon" class="inline-block self-center mr-2" />
      {{ timelineName }}
    </h2>

    <div class="mx-auto lg:mx-0 pt-3 border-b-2 border-primary-500 opacity-50"></div>
    <ul class="pt-2">
      <li v-for="(t, index) in timelineData" :key="index" class="flex flex-row items-center h-28 xl:h-36">
        <div class="pr-9 xl:pr-12 border-r-4 border-gray-200 dark:border-gray-700 -mr-6 xl:-mr-9 h-full flex items-center">
          <div class="text-center flex flex-col w-20">
            <p>{{ t.end }}</p>
            <p>{{ t.start }}</p>
            <p v-if="t.description" class="text-gray-400 italic text-sm">{{ t.description }}</p>
          </div>
        </div>
        <div
          class="block border-2 bg-white xl:border-4 border-gray-200 dark:border-gray-700 w-16 h-16 xl:w-24 xl:h-24 shadow-xl rounded-full flex items-center overflow-hidden"
          :class="[t.fixedBg ? 'dark:bg-white' : 'dark:bg-gray-800']"
        >
          <div
            class="w-full h-full block bg-center bg-contain bg-no-repeat flex flex-auto overflow-hidden"
            :style="{ 'background-image': `url('${require('~/assets/img/logo/' + t.logo)}')` }"
          ></div>
        </div>

        <div class="pl-4 xl:pl-8 w-full">
          <p class="font-semibold">{{ t.name }}</p>
          <p class="text-sm text-gray-400">{{ t.location }}</p>
          <p v-if="t.role" class="text-sm 2xl:text-base">{{ t.role }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

import { Timeline } from '@/interfaces/timeline.interface'

export default defineComponent({
  props: {
    timeline: {
      type: Array as PropType<Timeline[]>,
      required: true
    },

    name: { type: String, required: true },

    icon: {
      type: Object,
      required: true
    }
  },

  setup (props) {
    return {
      timelineIcon: props.icon,
      timelineName: props.name,
      timelineData: props.timeline
    }
  }
})
</script>
