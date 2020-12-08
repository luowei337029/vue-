<template>
  <div class="cityList">
    <el-cascader
      v-model="cityList"
      :options="cascader_options"
      :props="cascader_props"
      @change="changeCityList"
    ></el-cascader>
  </div>
</template>

<script>
import { GetCity } from "../../api/common";
export default {
  name: "cityList",
  props: {
    cityList: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      cascader_props: {
        lazy: true,
        lazyLoad(node) {
          const { level } = node;
          const requestData = {};
          // 省份
          // if (level === 0) {
          //   requestData.type = "province";
          // }
          requestData.type = "province";
          // 获取城市
          if (level === 1) {
            requestData.type = "city";
            requestData.province_code = node.value;
          }
          // 获取区县
          if (level === 2) {
            requestData.type = "area";
            requestData.city_code = node.value;
          }
          // 省市区接口
          GetCity(requestData).then((res) => {
            const data = res.data.data;
            // 省市区的value和label不一样 往里面加数据
            if (level === 0) {
              data.forEach((item) => {
                item.value = item.PROVINCE_CODE;
                item.label = item.PROVINCE_NAME;
              });
            }
            if (level === 1) {
              data.forEach((item) => {
                item.value = item.CITY_CODE;
                item.label = item.CITY_NAME;
              });
            }
            if (level === 2) {
              data.forEach((item) => {
                item.value = item.ARER_CODE;
                item.label = item.ARER_NAME;
                // 第三节 停下来
                item.leaf = level >= 2;
              });
            }
            console.log(res);
            // resolve(data);
          });
        },
      },
      cascader_options: []
    };
  },
  //   methods: {
  //     changeCityList(value) {
  //       this.$emit("update:cityList", value);
  //     }
  // },
  methods: {
    changeCityList(value) {
      this.$emit("update:cityList", value.join());
    }
  }
};
</script>

<style lang="scss" scoped>
.cityList {
}
</style>
