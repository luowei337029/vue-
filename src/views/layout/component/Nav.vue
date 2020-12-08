<template>
  <div class="nav">
    <img src="../../../assets/logo1.png" alt="" class="imgs" />
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
      :collapse="isCollapse"
      router
    >
      <template v-for="(item, index) in routerList">
        <el-submenu v-if="!item.hidden" :key="index" :index="index + ''">
          <!-- 一级菜单 -->
          <template slot="title">
            <svg-icon :iconClass="item.meta.icon" className="font-22" />
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
import SvgIcon from "../../../icons/SvgIcon.vue";
export default {
  components: { SvgIcon },
  name: "Nav",
  data() {
    return {
      routerList: []
    };
  },
  created() {
    this.routerList = this.$router.options.routes;
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    },
    
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
  height: 100vh;
  background-color: #344a5f;
  @include webkit(transition, all 0.3s);
  .Svgicon {
    display: inline;
    margin-right: 20px;
  }
  .imgs {
    display: block;
    margin: 0 auto;
    @include webkit(transition, all 0.3s);
  }
}
.open {
  .nav {
    width: $NavMaxWidth;
  }
  .imgs {
    display: block;
    margin: 0 auto;
  }
}
.close {
  .nav {
    width: $NavMinWidth;
  }
  .imgs {
    display: block;
    width: 100%;
  }
}
</style>
