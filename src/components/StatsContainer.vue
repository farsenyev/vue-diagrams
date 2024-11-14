<template>
  <div class="container-stat">
    <p class="stat-title">{{chartData.name}}</p>
    <div class="nums-container">
      <div class="stat" v-for="(stat, i) in chartData.nums" :key="i">
        <p class="stat-label" >{{stat.name}}</p>
        <span class="stat-value" :style="{color: stat.color}">{{stat.value}}</span>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "StatsContainer",
  props: {
    chartData: {
      type: Object,
      required: true
    }
  },
  methods: {
    isLastBar(i) {
      return i === Object.keys(this.chartData.nums).length - 1;
    }
  }
}
</script>

<style scoped>

</style>