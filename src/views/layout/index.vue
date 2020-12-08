<template>
  <div class="layout" :class="[menuState ? 'close' : 'open']">
    <Header />
    <Main />
    <Nav />
  </div>
</template>

<script>
import Header from "./component/Header";
import Main from "./component/Main";
import Nav from "./component/Nav";
export default {
  components: {
    Header,
    Main,
    Nav,
  },
  computed: {
    menuState() {
      return this.$store.state.isCollapse;
    }
  }
};
</script>

<style lang="scss" scoped>
.layout {
}
</style>
