<template>
  <div class="layout">
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
  Header, Main, Nav
}
};
</script>

<style lang="scss" scoped>
.layout {
}
</style>
