<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
          v-for="(option, i) of options"
          :key="i"
          @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Custom Select",
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
          ? this.default
          : this.options.length > 0
              ? this.options[0]
              : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped>
.custom-select {
  position: relative;
  width: auto;
  text-align: left;
  outline: none;
  line-height: 29px;
  box-sizing: border-box;
}

.custom-select .selected {
  background-color: #fff;
  border: 1px solid #b1b1b1;
  color: #000;
  padding: 0 20px 0 5px;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid #b1b1b1;
}

.custom-select .selected:after {
  content: url('https://api.iconify.design/ep/arrow-right.svg?color=black&rotate=90deg');
  position: absolute;
  display: block;
  top: 55%;
  transform: translateY(-50%);
  right: 3%;
  pointer-events: none;
  color: #b1b1b1;
}

.custom-select .items {
  color: #000;
  overflow: hidden;
  border-right: 1px solid #b1b1b1;
  border-left: 1px solid #b1b1b1;
  border-bottom: 1px solid #b1b1b1;
  position: absolute;
  background-color: #fff;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #000;
  padding-left: 5px;
  cursor: pointer;
  user-select: none;
  border-bottom: 1px solid #b1b1b1;
}

.custom-select .items div:hover {
  background-color: #fff;
}

.selectHide {
  display: none;
}
</style>
