<template>
  <div class="Svgicon">
    <!-- svgClass: 自定义的样式 -->
    <!-- iconName: 阿里图标的样式 -->
    <svg :class="svgClass" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Svgicon",
  props: {
    // 图标的名字
    iconClass: {
      type: String,
      required: true
    },
    // 自定义的类样式
    className: {
      type: String,
      default: ""
    }
  },
  computed: {
    svgClass() {
      if (this.className) {
        return `svg-icon ${this.className}`;
      } else {
        return "svg-icon";
      }
    },
    iconName() {
      return `#icon-${this.iconClass}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  // color: #fff;
  &.font-22 {
    font-size: 22px;
  }
}
</style>
