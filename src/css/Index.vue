<template>
  <div class="my-css">
    <div class="parent">
      <div class="child">
      </div>
    </div>

    <div class="danger">
      <p>混入(mixin)通过 <span>@mixin</span> 指令来定义。 @mixin name { property: value; property: value; ... }
以下实例创建一个名为 "important-text" 的混入：</p>
    </div>
    <div class="shadows">
    </div>

    <button class="button-basic">基础按钮</button>
    <button class="button-report">继承按钮</button>
    <button class="button-submit">继承按钮</button>

    <div class="txbox">
      <div>one</div>
      <div>two</div>
      <div>three
        <br>has 
        <br>extra
        <br>text
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
    
    <p class="c">hahaha</p>
    <div class="wrap">
      <p class="c">hehehe</p>
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

<style lang="scss" scoped> /* 此处如果有scoped 则body的css内容不生效,表示它的样式作用于当下的组件*/
$background:#cccccc;
$myColor: red;
$myFont: Helvetica, sans-serif;

body{
  background: $background;
  font-family: $myFont;
  color: $myColor;
}

@mixin important-text {
  color:rgb(255, 58, 58);
  font-size: 25px;
  font-weight: bold;
  border: 1px solid rgb(207, 226, 138);
}

@mixin boxback(){
  margin-top: 15px;
  background-color: rgb(149, 216, 228);
  width:0 auto;
}

@mixin bordered($color,$width){
  border: $width solid $color;
}

.danger {
  @include boxback;
  line-height: 80px;
  font-size: 15px;
  span {
    @include important-text;
    @include bordered(blue, 1px)
  }
}


@mixin box-shadow($shadows...) {
  -moz-box-shadow: $shadows;
  -webkit-box-shadow:$shadows;
  box-shadow: $shadows;
}

.shadows {
  @include boxback;
  height: 50px;
  @include box-shadow(0px 4px 5px #666,2px 6px 10px #999);
}

.button-basic {
  width: 125px;
  height: 50px;
  border:none;
  padding: 15px 30px;
  text-align: center;
  font-size:16px;
  cursor: pointer;
}

.button-report {
  @extend .button-basic;
  background-color: red;
}
.button-submit {
  @extend .button-basic;
  background-color: green;
  color:wheat
}



.txbox {
  @include boxback;
  height: 80px;
  display: flex;
  justify-content: space-between;
}





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
.c {
  color:aquamarine;
  background: blueviolet;
  width:200px;
  line-height: 100px;
  text-align: center;
  margin:100px;
}

</style>