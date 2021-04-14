<template>
  <div class="p-2 lg:p-4 bg-gray-100 dark:bg-gray-800 container shadow-xl">
    <h2 class="text-3xl font-bold pt-8 lg:pt-0 text-center">
      <FontAwesomeIcon :icon="timelineIcon" class="inline-block self-center mr-2" />
      {{ timelineName }}
    </h2>

    <div class="mx-auto lg:mx-0 pt-3 border-b-2 border-primary-500 opacity-50"></div>
    <ul class="pt-2">
      <li class="flex flex-row items-center h-28 lg:h-36" v-for="(timeline, index) in timelineData" v-bind:key="index">
        <div class="pr-10 lg:pr-16 border-r-4 border-gray-200 dark:border-gray-700 -mr-9 lg:-mr-12 h-full flex items-center">
          <div class="text-center flex flex-col w-28">
            <p>
              {{ timeline.end }}<br />
              {{ timeline.start }}
            </p>
            <p class="text-gray-400 italic text-sm" v-if="timeline.description">{{ timeline.description }}</p>
          </div>
        </div>
        <img
          :src="require(`~/assets/img/logo/${timeline.logo}`)"
          class="border-2 lg:border-4 border-gray-200 dark:border-gray-700 w-16 h-16 lg:w-24 lg:h-24 bg-cover rounded-full"
        />
        <div class="pl-2 lg:pl-4">
          <p class="font-semibold">{{ timeline.name }}</p>
          <p class="text-sm text-gray-400">{{ timeline.location }}</p>
          <p v-if="timeline.role">{{ timeline.role }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { Timeline } from '@/interfaces/timeline.interface'

export default defineComponent({
  props: {
    timeline: {
      type: Array as PropType<Timeline[]>,
      required: true
    },

    name: String,

    icon: {
      type: Object as () => IconDefinition
    }
  },

  setup(props) {
    return {
      timelineIcon: props.icon,
      timelineName: props.name,
      timelineData: props.timeline
    }
  }
})
</script>
