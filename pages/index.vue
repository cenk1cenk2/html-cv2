<template>
  <div>
    <section>
      <UserCard />
    </section>
    <div class="lg:w-4/5 flex justify-center mx-auto">
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 justify-items-center">
        <Timeline v-bind="educationTimeline"></Timeline>
        <Timeline v-bind="workTimeline"></Timeline>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { EDUCATION_TIMELINE } from '@/data/education.data'
import { WORK_TIMELINE } from '@/data/work.data'
import { faUserGraduate, faBuilding } from '@fortawesome/free-solid-svg-icons'

export default defineComponent({
  setup() {
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
