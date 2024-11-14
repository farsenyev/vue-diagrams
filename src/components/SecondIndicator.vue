<template>
  <div class="container-second">
    <p class="secondind-title">{{chartData.name}}</p>
    <p class="secondind-subtitle">{{chartData.subtitle}}</p>
  </div>
</template>

<script>
export default {
  name: "SecondIndicator.vue",
  props: {
    chartData: {
      charData: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>