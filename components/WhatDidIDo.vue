<template>
  <div class="grid grid-cols-12">
    <div class="hidden 2xl:grid 2xl:col-span-2 text-8xl text-center"><p class="side-text">TIMELINE</p></div>
    <div class="col-span-full 2xl:col-span-8 flex justify-center mx-auto">
      <section class="grid grid-cols-1 xl:grid-cols-2 gap-4 2xl:gap-6 py-8 justify-items-center">
        <Timeline v-bind="workTimeline"></Timeline>
        <Timeline v-bind="educationTimeline"></Timeline>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { EDUCATION_TIMELINE } from '@/data/education.data'
import { WORK_TIMELINE } from '@/data/work.data'
import { faUserGraduate, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    return {
      educationTimeline: {
        timeline: EDUCATION_TIMELINE,
        icon: faUserGraduate,
        name: 'Education'
      },
      workTimeline: {
        timeline: WORK_TIMELINE,
        icon: faBuilding,
        name: 'Work'
      }
    }
  }
})
</script>

<style lang="postcss">
.side-text {
  @apply text-gray-200 dark:text-gray-700;

  writing-mode: vertical-lr;
  transform: rotate(180deg);
}
</style>
