import Vue from 'vue'
// 高德离线地图
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  // 高德key 自己到网上申请的
  key: 'f2e0665cbcecf1e2378a33103a9ad21b',
  // 插件集合 (插件按需引入)
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4'
})
