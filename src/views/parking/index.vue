<template>
  <div class="parking">
    <el-row>
      <el-col :span="18">
        <!-- 表单 -->
        <el-form :inline="true" :model="parkingForm" class="parkingForm">
          <el-form-item label="停车场名称">
            <el-input
              v-model="parkingForm.parkingName"
              placeholder="停车场名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="区域">
            <el-cascader
              v-model="parkingForm.parkingRegion"
              :options="options"
              @change="handleChange"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="parkingForm.type" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
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
          <router-link to="/parkingAdd">
            <el-button type="danger" size="small"
              >新增停车场</el-button
            ></router-link
          >
        </div>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="carsName" label="停车场名称" width="180">
      </el-table-column>
      <el-table-column prop="type" label="类型" width="180"> </el-table-column>
      <el-table-column prop="region" label="区域"> </el-table-column>
      <el-table-column prop="carsNmu" label="可停放车辆"> </el-table-column>
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
      <el-table-column prop="position" label="查看位置"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="danger" @click="Editor(scope.row)">编辑</el-button>
          <el-button size="small" @click="cancel(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "parking",
  data() {
    return {
      parkingForm: {
        parkingName: "",
        parkingRegion: "",
        type: "",
      },
      options: [
        {
          value: "111",
          label: "江西省",
          children: [
            {
              value: "21",
              label: "萍乡市",
              children: [
                {
                  value: "333",
                  label: "湘东区",
                },
                {
                  value: "444",
                  label: "路西",
                },
              ],
            },
          ],
        },
        {
          value: "222",
          label: "湖南省",
          children: [
            {
              value: "2133",
              label: "株洲",
              children: [
                {
                  value: "12",
                  label: "来了",
                },
                {
                  value: "234",
                  label: "请问",
                },
              ],
            },
          ],
        },
      ],
      tableData: [
        {
          carsName: "南山停车场",
          type: "室外",
          region: "广东省 深圳市 南山区",
          carsNmu: 20,
          disable: true,
          position: "12312424",
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
  },
};
</script>

<style lang="scss" scoped>
.parking {
  .parkingForm {
    margin-bottom: 20px;
  }
}
</style>
