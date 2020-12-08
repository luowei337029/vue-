<template>
  <div class="carsAdd">
    <el-form ref="form" :model="parkingAddForm" label-width="100px">
      <el-form-item label="车辆品牌">
        <el-select v-model="parkingAddForm.region" placeholder="请选择活动区域">
          <el-option label="奔驰" value="1"></el-option>
          <el-option label="宝马" value="2"></el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="车辆型号">
        <el-select v-model="parkingAddForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item label="停车场">
        <el-select v-model="parkingAddForm.region" placeholder="请选择活动区域">
          <el-option label="宝安" value="1"></el-option>
          <el-option label="南山" value="2"></el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="车牌号">
        <el-input v-model="parkingAddForm.carsType"></el-input>
      </el-form-item>
      <el-form-item label="车架号">
        <el-input v-model="parkingAddForm.carsType"></el-input>
      </el-form-item>
      <el-form-item label="发动机号">
        <el-input v-model="parkingAddForm.carsType"></el-input>
      </el-form-item> -->
      <el-form-item label="年检">
        <el-radio-group v-model="parkingAddForm.radio">
          <el-radio :label="3">已检</el-radio>
          <el-radio :label="6" class="distance">未检</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="保养日期">
        <el-row>
          <el-col :span="6"
            ><el-input v-model="parkingAddForm.carsType"></el-input
          ></el-col>
          <el-col :span="18"><span>下次保养日期: 2020-12-12</span></el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="档位">
        <el-radio-group v-model="parkingAddForm.gears">
          <el-radio label="1">自动挡</el-radio>
          <el-radio label="2" class="distance">手动</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="能源类型">
        <el-radio-group @change="changeType" v-model="parkingAddForm.energy">
          <el-radio label="1">电</el-radio>
          <el-radio label="2" class="distance">油</el-radio>
          <el-radio label="3" class="distance">混合动力</el-radio>
        </el-radio-group>
        <div
          class="progess-bar"
          v-if="parkingAddForm.energy == 1 || parkingAddForm.energy == 3"
        >
          <span class="oilMass">电量:</span>
          <el-row :gutter="10">
            <el-col :span="5">
              <div class="bars">
                <span class="top">
                  <label class="label-text">90%</label>
                </span>
              </div>
            </el-col>
            <el-col :span="2">
              <el-input size="small" value="100"></el-input>
            </el-col>
          </el-row>
        </div>
        <div
          class="progess-bar"
          v-if="parkingAddForm.energy == 2 || parkingAddForm.energy == 3"
        >
          <span class="oilMass">油量:</span>
          <el-row :gutter="10">
            <el-col :span="5">
              <div class="bars">
                <span class="top">
                  <label class="label-text">90%</label>
                </span>
              </div>
            </el-col>
            <el-col :span="2">
              <el-input size="small" value="100"></el-input>
            </el-col>
          </el-row>
        </div>
      </el-form-item>
      <el-form-item label="禁启用">
        <el-radio-group v-model="parkingAddForm.radio">
          <el-radio label="1">禁用</el-radio>
          <el-radio label="2" class="distance">启用</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- <el-form-item label="车辆属性">
        <div v-for="(item, index) in parkingAddForm.crasAttr" :key="index">
          <el-row>
            <el-col :span="2"><el-input :value="item.key"></el-input></el-col>
            <el-col :span="3"><el-input :value="item.value"></el-input></el-col>
            <el-col :span="1">
              <el-button @click="addCarAttr" v-if="index === 0" type="primary"
                >+</el-button
              >
              <el-button v-else @click="reduceCarAttr(index)">-</el-button>
            </el-col>
          </el-row>
        </div>
      </el-form-item> -->
      <el-form-item label="车辆描述">
        <!-- <el-input v-model="parkingAddForm.desc"></el-input> -->
        <div ref="editor" style="text-align:left"></div>
      </el-form-item>
      <el-form-item>
        <el-button type="danger">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 导入富文本编辑器
import E from "wangeditor";
export default {
  name: "parkingAdd",
  data() {
    return {
      parkingAddForm: {
        name: "",
        region: "",
        carsType: "",
        radio: "",
        // 档位
        gears: "1",
        // 能源类型
        energy: "1",
        // 禁启用
        disable: "1",
        // desc: "",
        crasAttr: [
          { key: "11", value: "属性1" },
          { key: "22", value: "属性2" },
          { key: "33", value: "属性3" },
        ],
      },
      //   富文本对象
      editor: null,
    };
  },
  mounted() {
    this.creatEditor();
  },
  methods: {
    //   能源类型
    changeType() {
      console.log(111);
    },
    // 增加车辆属性
    addCarAttr() {
      this.parkingAddForm.crasAttr.push({ key4: "33", value: "属性4" });
    },
    // 减少车辆属性
    reduceCarAttr(index) {
      console.log(index);
      this.parkingAddForm.crasAttr.splice(index, 1);
    },
    // 创建富文本编辑器
    creatEditor() {
      this.editor = new E(this.$refs.editor);
      //   this.editor.customConfig.onchange = html => {
      //     console.log(html);
      //   };
      this.editor.config.height = 200;
      this.editor.create(); //创建富文本实例
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
.carsAdd {
  .el-form-item {
    margin-bottom: 22px;
  }
  label.el-radio.distance {
    margin-left: 20px !important;
  }
}
</style>
