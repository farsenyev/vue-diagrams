<template>
  <div class="separate-bar-vert" :style="{height: `${height}px` }"/>
</template>

<script>
export default {
  name: "VerticalSeparator",
  props: {
    height: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>

</style>