<template>
  <div class="my-css">
    <div class="parent">
      <div class="child">
      </div>
    </div>
    <div class="box">
      <div class="fixed">
      </div>
    </div>

    <div class="aside"></div>
    <div class="main"></div>

    <div class="par">
      <div class="ch"></div>
      <div class="ch"></div>
    </div>
    
    <p>hahaha</p>
    <div class="wrap">
      <p>hehehe</p>
    </div>
  </div>
</template>

<script>
//import MyFan from './MyFan.vue'
export default {
  components: {
    
  }
}
</script>

<style>
    .my-map {
        width: 100%;
        height: 600px;
    }
    *{box-sizing: border-box;}
    .parent{
      border:1px solid;
      margin: 0 auto;
      padding: 10px;
    }
    .child{
      border: 1px solid red;
      height: 200px;
      width: 300px;
    }
    .box{
      width: 100px;
      height: 100px;
      background:grey;
      margin: 50px;
    }
    .fixed{
      position: fixed;
      top:0;
      left:0;
      width: 50px;
      height: 50px;
      background: red;
    }

    .aside {
      width: 100px;
      height: 150px;
      float: left;
      background: #f66;
    }
    .main {
      height: 200px;
      background: #fcc;
    }

    .par {
      border:5px solid #fcc;
      width: 300px;
      overflow: hidden;
    }
    .ch {
      border: 5px solid #f66;
      width: 100px;
      height: 100px;
      float:left
    }

    .wrap {
      overflow: hidden;
    }
    p{
      color:aquamarine;
      background: blueviolet;
      width:200px;
      line-height: 100px;
      text-align: center;
      margin:100px;
    }

</style>