<template>
  <div class="amap">
      <el-amap  vid="amapDemo" :events="events"   class="amap-demo">
      </el-amap>
  </div>
</template>
<script>
import { lazyAMapApiLoaderInstance } from 'vue-amap'
export default {
  name: 'Amap',
  data () {
    return {
      // map: 地图实例
      map: null,
      zoom: 10,
      events: {
      }
    }
  },
  mounted () {
    // 使用下面的方法就能使用高德原生sdk
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map('amapDemo', {
        center: new AMap.LngLat(116.368106, 39.908723),
        zoom: this.zoom
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.amap {
  height: 100vh;
}
</style>
