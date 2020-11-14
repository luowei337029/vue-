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
  left: 250px;
  top: 75px;
  bottom: 0;
  right: 0;
  border: 30px solid #ccc;
  border-bottom: none;
}
</style>
