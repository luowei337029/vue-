<template>
  <div class="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          :class="{ current: item.current }"
          v-for="(item, index) in menuTab"
          :key="index"
          @click="toggerMenu(item)"
        >
          {{ item.txt }}
        </li>
      </ul>
      <el-form
        label-position="top"
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="login-Form"
        size="small"
      >
        <el-form-item label="邮箱" prop="username">
          <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            minlength="6"
            maxlength="20"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          v-if="model === 'register'"
          label="重复密码"
          prop="passwords"
        >
          <el-input
            minlength="6"
            maxlength="20"
            v-model="ruleForm.passwords"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-row :gutter="11">
            <el-col :span="16">
              <el-input v-model="ruleForm.code"></el-input>
            </el-col>
            <el-col :span="8">
              <el-button type="success" class="submitBtn">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button
            type="danger"
            class="submitBtn"
            @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { stripscript, validateEmail, validatePassword } from "@/utils/validate";
export default {
  name: "login",
  data() {
    // 验证用户名为空
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (validateEmail(value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    // 验证密码
    var validatepassword = (rule, value, callback) => {
      // 过滤特殊字符
      this.ruleForm.password = stripscript(value);
      value = this.ruleForm.password;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (validatePassword(value)) {
        callback(new Error("密码为6至20位数字+字母"));
      } else {
        callback();
      }
    };
    // 验证重复密码
    var validatepasswords = (rule, value, callback) => {
      // 如果用的v-show控制重复密码的显示与隐藏 那么重复密码就不验证
      //   if (this.model === "login") {
      //     callback();
      //   }
      // 过滤特殊字符
      this.ruleForm.passwords = stripscript(value);
      value = this.ruleForm.passwords;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("重复密码不正确"));
      } else {
        callback();
      }
    };
    // 验证验码证
    var validateCode = (rule, value, callback) => {
      // 过滤特殊字符
      this.ruleForm.code = stripscript(value);
      value = this.ruleForm.code;
      let reg = /^[a-z0-9]{6}$/;
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (!reg.test(value)) {
        callback(new Error("验证码格式有误"));
      } else {
        callback();
      }
    };
    return {
      menuTab: [
        { txt: "登录", current: true, type: "login" },
        { txt: "注册", current: false, type: "register" },
      ],
      //   注册模块
      model: "login",
      ruleForm: {
        username: "",
        password: "",
        passwords: "",
        code: "",
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatepassword, trigger: "blur" }],
        passwords: [{ validator: validatepasswords, trigger: "blur" }],
        code: [{ validator: validateCode, trigger: "blur" }],
      },
    };
  },
  methods: {
    toggerMenu(data) {
      this.menuTab.forEach((item) => {
        item.current = false;
      });
      data.current = true;
      this.model = data.type;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background-color: #32495f;
  .login-wrap {
    width: 330px;
    margin: auto;
    .menu-tab {
      text-align: center;
      li {
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: #fff;
        border-radius: 2px;
        cursor: pointer;
      }
      .current {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
  .login-Form {
    margin-top: 29px;
    /deep/ label.el-form-item__label {
      color: #fff;
    }
    .submitBtn {
      display: block;
      width: 100%;
    }
  }
}
</style>
