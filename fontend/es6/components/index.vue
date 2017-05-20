<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in list" :key="index">
      <h3>{{ item.src }}</h3>
      <img src={{ item.src }}  />
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
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
    data: {
        list: [{
            src: "/images/bg1.jpg",
        },{
            src: "/images/bg2.jpg",
        },{
            src: "/images/bg3.jpg",
        },{
            src: "/images/bg4.jpg",
        }],
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
