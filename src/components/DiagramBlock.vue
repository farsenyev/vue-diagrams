<template>
  <div class="container">
    <p class="chart-title">{{ data.name }}</p>
    <div class="diagrams-grid" v-if="data.grid">
      <div class="grid-main">
        <slot name="main"/>
      </div>
      <div class="grid-side">
        <slot name="side"/>
      </div>
      <slot/>
    </div>
    <div class="diagrams-flex" v-else>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiagramBlock",
  components: {RoundDiagram, BarChart, SecondIndicator, StatsContainer},
  props: {
    data: {
      type: Object,
      required: true
    },
  },
}

import RoundDiagram from "@/components/RoundDiagram.vue";
import BarChart from "@/components/BarChart.vue";
import SecondIndicator from "@/components/SecondIndicator.vue";
import StatsContainer from "@/components/StatsContainer.vue";
</script>

<style scoped>

</style>