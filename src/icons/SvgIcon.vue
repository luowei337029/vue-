<template>
  <div class="Svgicon">
    <svg :class="getClassName" aria-hidden="true">
      <use :xlink:href="getName"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Svgicon"
};
</script>

<style></style>
