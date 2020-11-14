<template>
  <div class="nav">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
      router
    >
      <template v-for="(item, index) in routerList">
        <el-submenu v-if="!item.hidden" :key="index" :index="index + ''">
          <!-- 一级菜单 -->
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ item.meta.name }}</span>
          </template>
          <!-- 子菜单 -->
          <el-menu-item
            v-for="(subItems, index) in item.children"
            :key="index"
            :index="subItems.path"
            >{{ subItems.meta.name }}</el-menu-item
          >
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      routerList: []
    };
  },
  created() {
    this.routerList = this.$router.options.routes;
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  width: 250px;
  height: 100vh;
  background-color: #344a5f;
}
</style>
