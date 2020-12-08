<template>
  <div class="carsBrand">
    <el-row>
      <el-col :span="18">
        <!-- 表单 -->
        <el-form :inline="true" :model="parkingForm" class="carsBrandForm">
          <el-form-item label="车辆品牌">
            <el-input
              v-model="parkingForm.carsBrand"
              placeholder="选择品牌"
            ></el-input>
          </el-form-item>
          <el-form-item label="品牌型号">
            <el-select v-model="parkingForm.type" placeholder="活动区域">
              <el-option label="奔驰" value="shanghai"></el-option>
              <el-option label="宝马" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" size="small" @click="onSubmit"
              >查询</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <div class="pull-right">
          <el-button size="small" type="danger" @click="dialogShows"
            >新增车辆品牌</el-button
          >
        </div>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="logo" label="LOGO" width="180"> </el-table-column>
      <el-table-column prop="carBrand" label="车辆品牌" width="180">
      </el-table-column>
      <el-table-column prop="BrandType" label="品牌型号"> </el-table-column>
      <el-table-column label="禁启用">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.disable"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="danger" @click="Editor(scope.row)"
            >编辑</el-button
          >
          <el-button size="small" @click="cancel(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹窗 -->
    <addParkDialog :flagVisible.sync="dialogShow" />
  </div>
</template>

<script>
import addParkDialog from ".././../components/dialog/addParkDialog";
export default {
  name: "parking",
  components: {
    addParkDialog
  },
  data() {
    return {
      // 弹窗
      dialogShow: false,
      parkingForm: {
        carsBrand: "",
        type: "",
      },
      tableData: [
        {
          logo: "南山停车场",
          carBrand: "奔驰",
          BrandType: "广东省 深圳市 南山区",
          carsNmu: 20,
          disable: true,
        },
      ],
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    onSubmit(value) {
      console.log(value);
    },
    // 编辑
    Editor(value) {
      console.log(value);
    },
    // 删除
    cancel(value) {
      console.log(value);
    },
    dialogShows() {
      console.log(111);
      this.dialogShow = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.carsBrand {
  .carsBrandForm {
    margin-bottom: 20px;
  }
}
.el-form-item {
  margin-bottom: 22px;
}
label.el-radio.last {
  margin-left: 10px !important;
}
.map {
  width: 100%;
  height: 330px;
  border: 1px solid #ccc;
}
</style>
