<template>
  <div class="grid grid-cols-6">
    <div class="hidden md:grid md:col-span-1 text-8xl text-center"><p class="side-text">TIMELINE</p></div>
    <div class="col-span-full md:col-span-4 flex justify-center mx-auto">
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-8 justify-items-center">
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
import { defineComponent } from '@vue/composition-api'

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
  @apply opacity-10 text-center overflow-hidden;

  > .dark-mode {
    @apply opacity-5;
  }

  writing-mode: sideways-lr;
}
</style>
