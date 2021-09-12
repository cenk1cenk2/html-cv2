<template>
  <AppSection title="timeline">
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 2xl:gap-12 w-full justify-items-center">
      <Timeline v-bind="workTimeline" class="w-full"></Timeline>
      <Timeline v-bind="educationTimeline" class="w-full"></Timeline>
    </div>
  </AppSection>
</template>

<script lang="ts">
import { faUserGraduate, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { defineComponent } from '@nuxtjs/composition-api'

import { EDUCATION_TIMELINE } from '@/data/education.data'
import { WORK_TIMELINE } from '@/data/work.data'

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
