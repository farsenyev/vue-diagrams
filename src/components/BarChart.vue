<template>
  <div class="container-bar">
    <p class="barchart-title">{{chartData.name}}</p>
    <div class="chart">
      <div class="bar" v-for="(bar, i) in chartData.nums" :key="i" :style="{ height: `${heightParent}px` }">
        <span class="bar-value">{{bar.value}}</span>
        <div class="bar-block" :style="{ height: `${calculateHeight(bar.value) - 20}%`, backgroundColor: bar.color}" />
        <span class="bar-label">{{bar.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BarChart",
  props: {
    chartData: {
      type: Object,
      required: true
    },
    heightParent: {
      type: Number
    }
  },
  methods: {
    calculateHeight(value) {
      const maxValue = Math.max(...this.chartData.nums.map(item => item.value));
      return (value / maxValue) * 100;
    },
  },
}
</script>

<style scoped>

</style>