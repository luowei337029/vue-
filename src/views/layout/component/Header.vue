<template>
  <div class="header">
    <div class="pull-left header-icon" @click="Collapse">
      <svg-icon iconClass="menu" className="font-22" />
    </div>
    <div class="pull-right">
      <div class="user-info pull-left">
        <img src="../../../assets/face.jpg" alt="" />
        <span class="menmber">管理员</span>
      </div>
      <div class="pull-right header-icon">
        <svg-icon iconClass="exit" className="font-22" />
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "../../../icons/SvgIcon.vue";
export default {
  components: { SvgIcon },
  name: "Header",
  methods: {
    Collapse() {
      this.$store.commit("SET_COLLAPSE", this.$store.state.isCollapse);
      this.$store.dispatch('up')
    }
    
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  right: 0;
  height: 76px;
  @include webkit(box-shadow, 0 0 10px 0 rgba(0, 0, 0, 0.1));
  @include webkit(transition, all 0.3s);
  line-height: 76px;
  .header-icon {
    padding: 0 32px;
    cursor: pointer !important;
  }
  img {
    border-radius: 20px;
    margin-right: 10px;
    vertical-align: middle;
  }
  .user-info {
    border-right: 1px solid #ccc;
    padding: 0 20px;
  }
}
.open {
  .header {
    left: $NavMaxWidth;
  }
}
.close {
  .header {
    left: $NavMinWidth;
  }
}
</style>
