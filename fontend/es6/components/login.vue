<template>
    <div class="center">
        <div class="box">
            <el-input v-model="name" placeholder="请输入用户名"></el-input>
            <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
            <div class="box-button">
                <el-button type="primary" v-on:click="login">登陆</el-button>
                <el-button>注册</el-button>
            </div>
        </div>
    </div>
</template>
<style>
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.box {
    width: 300px;
    background: linear-gradient(149deg, #fff300, #ffe200);
    box-shadow: 0 15px 30px 0 #fff28a;
    padding: 50px;
}

.box input {
    margin: 0px 0px 30px 0;
}

.box-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.box-button button {
    width: 120px;
}
</style>
<script type="text/babel">
module.exports = {
    data: {
        name: 'ss',
        password: 'ss',
    },
    methods: {
        login() {
            console.log(this);
            if (this.name === 'admin' && this.password === 'password' ) {
                window.location.href = "/";
            } else {
                alert('用户名/密码错误！');
            }
        }
    }
}
</script>
