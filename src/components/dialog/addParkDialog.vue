<template>
  <el-dialog @close="Clear" title="收货地址" :visible.sync="dialogVisible">
    <!-- 表单 -->
    <el-form ref="form" :model="parkingAddForm" label-width="100px">
      <el-form-item label="车辆品牌">
        <el-input v-model="parkingAddForm.name"></el-input>
      </el-form-item>
      <el-form-item label="品牌型号">
        <el-input v-model="parkingAddForm.brandType"></el-input>
      </el-form-item>
      <el-form-item label="LOGO">
        <div class="upload-img">
          <div class="upload">
            <img
              src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1606912960&di=25bd95341234e70368520f4f32c4ebf7&src=http://a4.att.hudong.com/27/67/01300000921826141299672233506.jpg"
              alt=""
            />
          </div>
          <ul class="img-list">
            <li>
              <img
                src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1606912960&di=25bd95341234e70368520f4f32c4ebf7&src=http://a4.att.hudong.com/27/67/01300000921826141299672233506.jpg"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1606912960&di=25bd95341234e70368520f4f32c4ebf7&src=http://a4.att.hudong.com/27/67/01300000921826141299672233506.jpg"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1606912960&di=25bd95341234e70368520f4f32c4ebf7&src=http://a4.att.hudong.com/27/67/01300000921826141299672233506.jpg"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1606912960&di=25bd95341234e70368520f4f32c4ebf7&src=http://a4.att.hudong.com/27/67/01300000921826141299672233506.jpg"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1606912960&di=25bd95341234e70368520f4f32c4ebf7&src=http://a4.att.hudong.com/27/67/01300000921826141299672233506.jpg"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1606912960&di=25bd95341234e70368520f4f32c4ebf7&src=http://a4.att.hudong.com/27/67/01300000921826141299672233506.jpg"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1606912960&di=25bd95341234e70368520f4f32c4ebf7&src=http://a4.att.hudong.com/27/67/01300000921826141299672233506.jpg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </el-form-item>
      <el-form-item label="禁启用">
        <el-radio-group v-model="parkingAddForm.radio">
          <el-radio :label="3">禁用</el-radio>
          <el-radio :label="6" class="last">启用</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="parkingAddForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确定</el-button
        >
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: "addParkDialog",
  props: {
    flagVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogVisible: false,
      // 弹窗数据
      parkingAddForm: {
        name: "",
        brandType: "",
        radio: "",
        desc: "",
      },
    };
  },
  methods: {
    Clear() {
      //   this.$emit("update:flagVisible", false); // {}
      this.$emit("update:flagVisible", false);
      console.log(111);
    }
  },
  watch: {
    flagVisible: {
      handler(newValue) {
        this.dialogVisible = newValue;
      }
    }
  }
};
</script>

<style></style>
