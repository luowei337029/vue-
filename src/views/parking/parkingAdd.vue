<template>
  <div class="parkingAdd">
    <el-form ref="form" :model="parkingAddForm" label-width="100px">
      <el-form-item label="停车场名称">
        <el-input v-model="parkingAddForm.name"></el-input>
      </el-form-item>
      <el-form-item label="区域">
        <city-list :cityList.sync="parkingAddForm.region"></city-list>
      </el-form-item>
      <el-form-item label="类型">
        <el-radio-group v-model="parkingAddForm.radio">
          <el-radio :label="3">备选项</el-radio>
          <el-radio :label="6" class="last">备选项</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="位置">
        <div class="position-map">
          <a-map class="map" />
        </div>
      </el-form-item>
      <el-form-item label="经纬度">
        <el-input v-model="parkingAddForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import AMap from "../amap/index";
import CityList from "../../components/cityList/index";
export default {
  name: "parkingAdd",
  components: {
    AMap,
    CityList
  },
  data() {
    return {
      parkingAddForm: {
        name: "",
        region: "",
        radio: "",
        desc: ""
      },
    };
  }
};
</script>

<style lang="scss" scoped>
.parkingAdd {
  .el-form-item {
    margin-bottom: 22px;
  }
  label.el-radio.last {
    margin-left: 10px !important;
  }
  .position-map {
    width: 100%;
    height: 500px;
    .map {
      height: 100%;
    }
  }
}
</style>
