<template>
  <div class="login">
    <el-form ref="myform" :model="myform" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="myform.username"></el-input>
        </el-form-item>
        <el-form-item label="密码子" prop="password">
            <el-input v-model="myform.password" type="password"></el-input>
        </el-form-item>        
        <el-form-item label-width="username" class="button">
            <el-button type="primary" @click="onLogin('myform')">Login</el-button>
            <el-button @click="resetForm('myform')">Reset</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
        myform: {
            username:null,
            password:null
        },
        rules: {
            username:[
                {required: true, message: 'your name',trigger: 'blur'}
            ],
            password:[
                {required: true, message: 'your password',trigger: 'blur' },
                { min: 3, message: '长度在 3 字符以上', trigger: 'blur' }
            ]
        }
    }
  },
  methods: {
     onLogin (name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
                this.$message({
                    message: '您登录成功了',
                    type: 'success'
                });
                sessionStorage.setItem('token','priest');
                this.$router.push({path: '/'})
            } else {
                this.$message.error('不好意思，您登录失败了');
            }
        });
    },
    resetForm(name) {
        this.$refs[name].resetFields();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login {
  width: 30%;
  margin: 30px auto;
}
.button {
    text-align: center;
}
</style>
