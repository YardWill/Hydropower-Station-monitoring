<template>
    <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in list" :key="item">
            <img :src="item" />
        </el-carousel-item>
        <div class="title">欢迎来到水电站远程监控系统</div>
    </el-carousel>
</template>

<style>
.el-carousel, .el-carousel__container, .el-carousel__item {
    height: 100%;
}
.el-carousel__item{
    display: flex;
    justify-content: center;
    align-items: center;
}
.el-carousel__item img {
    display: block;
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    height: 100%;
    margin: 0;
}
.title{
    position: absolute;
    top: 30%;
    text-align: center;
    z-index: 99;
    width: 100%;
    font-size: 60px;
    color: #FFFFFF;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
<script type="text/babel">
module.exports = {
    data() {
        return {
            list: ['/images/bg1.jpg', '/images/bg2.jpg', '/images/bg3.jpg', '/images/bg4.jpg']
        }
    },
    methods: {
        login() {
            if (this.name === 'admin' && this.password === 'password') {
                window.location.href = "/";
            } else {
                alert('用户名/密码错误！');
            }
        }
    }
}
</script>
