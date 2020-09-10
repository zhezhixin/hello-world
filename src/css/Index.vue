<template>
  <div class="my-css">
    <div class="parent">
      <div class="child">
      </div>
    </div>

    <div class="usekeyframes">
    </div>

    <div class="inline-bl">bsdffffsssdsad
      <span>baidubaidubaidu</span>
      <span>googlegooglegoogle</span>
    </div>
    
    <span class="iconfont">&#xe60e;</span>
    <i class="iconfont testicon"></i>
    <i class="el-icon-sunrise"></i>

    <div id="wrap" class= "clearfix" >
      <div class="v1bar">Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword</div>
      <div class="inv1bar">Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword</div>
      <div class="cbar">Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword</div><br>
    
      <div class="scrollbar" id="default-style">
        <div class="force-overflow">
        </div>
      </div>
      <div class="scrollbar" id="style1">
        <div class="force-overflow">
        </div>
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

.danger p { 
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

.usekeyframes {
  width: 100px;
  height: 100px;
  background:rgb(123, 118, 172);
  position: relative;
  animation: mymove 5s infinite;
  -moz-animation:mymove 5s infinite; /* Firefox */
  -webkit-animation:mymove 5s infinite; /* Safari and Chrome */
  -o-animation:mymove 5s infinite; /* Opera */
}

@keyframes mymove {
  0% {left:0}
  25% {left:200px}
  75% {left: 50px}
  100% {left: 100px}
}

.inline-bl {
  width: 800px;
  height: 100px;
  background-color: grey;
  span {
    background:rgb(187, 131, 159);
    display: inline-block;
    width: 200px;
    height: 30px;
    border: 1px solid black;
    vertical-align: bottom;
    text-align: center;
    line-height: 30px;
  }
}


.iconfont {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color:rgb(50, 97, 87);
  font-size: 8rem;
}
.testicon{
  color: rgb(150, 89, 150);
  font-size: 4rem;
}

#wrap {
  width: 500px;
}
.clearfix:after,
.clearfix:before{
  content:'';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.v1bar,
.inv1bar,
.cbar {
  display: block;
  width:10rem;
  overflow: auto;
  height: 2rem;
  background: purple;
}
.inv1bar::-webkit-scrollbar {
  display: none;
}
/*定义滚动条高及背景 横滚动条的尺寸*/  
.cbar::-webkit-scrollbar{ 
  width: 3px;
  height: 8px;
  background-color: #aaa;
}
.cbar::-webkit-scrollbar-thumb{
  background: #000;
}

.scrollbar {
  float: left;
  height: 300px;
  width: 65px;
  background-color: #d9e0af;
  overflow-y:scroll;
  margin-bottom: 25px;
  border: 1px solid rgb(0, 0, 0);
}
.force-overflow {
  min-height: 450px;
}

/*定义滚动条轨道 内阴影+圆角 RGBA(R,G,B,A) A：Alpha透明度,取值0~1之间,30%不透明度*/  
#style1::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
/*定义滚动条宽及背景 宽对应竖滚动条的尺寸*/  
#style1::-webkit-scrollbar {
  width: 12px;
  background-color:#f5f5f5;
}
/*定义滑块 内阴影+圆角*/  
#style1::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow:inset 0 0 6px rgba(0,0,0,.3);
  background-color: rgb(94, 114, 61);
}

.txbox {
  @include boxback;
  height: 80px;
  display: flex;
  justify-content: space-between;
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