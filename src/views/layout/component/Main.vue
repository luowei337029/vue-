<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default { name: "Main" };
</script>

<style lang="scss" scoped>
.main {
  position: fixed;
  padding: 30px 30px;
  // left: 250px;
  top: 75px;
  bottom: 0;
  right: 0;
  border: 30px solid #ccc;
  border-bottom: none;
  @include webkit(transition, all 0.3s);
}
.open {
  .main {
    left: $NavMaxWidth;
  }
}
.close {
  .main {
    left: $NavMinWidth;
  }
}
</style>
