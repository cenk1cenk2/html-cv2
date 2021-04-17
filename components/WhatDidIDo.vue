<template>
  <AppSection title="timeline">
    <section class="grid grid-cols-1 xl:grid-cols-2 gap-8 2xl:gap-12 w-full justify-items-center">
      <Timeline v-bind="workTimeline" class="w-full"></Timeline>
      <Timeline v-bind="educationTimeline" class="w-full"></Timeline>
    </section>
  </AppSection>
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
