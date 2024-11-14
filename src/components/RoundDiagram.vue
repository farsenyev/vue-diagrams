<template>
  <div class="round-diagram">
    <p class="round-name">{{chartData.name}}</p>
    <ul>
      <li class="round-plan">План {{chartData.plan}}</li>
      <li class="round-done"> Факт {{chartData.done}}</li>
    </ul>
    <p class="percent">Выполнено <span style="color: #e41335">{{ percentage }}%</span></p>
    <div class="pie" v-if="percentage <= 100" :style="{ '--p': percentage }"></div>
    <div class="pie exp" v-else :style="{ '--p': percentage - 100 }"></div>
  </div>

</template>

<script>
export default {
  name: "RoundDiagram",
  props: {
    chartData: {
      type: Object,
      required: true
    },
  },
  computed: {
    percentage() {
      return ((this.chartData.done / this.chartData.plan) * 100).toFixed(0);
    }
  }
}
</script>

<style scoped>

</style>