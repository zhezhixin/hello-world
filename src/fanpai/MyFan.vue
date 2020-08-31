<template>
  <div class="chartNum">
    <div class="box-item">
      <li :class="{'number-item': !isNaN(item) }"
        v-for="(item,index) in orderNum"
        :key="index">
          <span v-if="!isNaN(item)">
            <i ref="numberItem">0123456789</i>
          </span>
        <span class="comma" v-else>{{item}}</span>
      </li>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        orderNum: ['3','0','0','0'], // 默认订单总数
      }
    },
    mounted(){
      this.setNumberTransform()
      const orinum = parseInt(this.orderNum.join(""))    
      let num = orinum
      setInterval(() => {
        if(num == 9999){
          num = orinum
        }else{
          num++
        }
        this.toOrderNum(num) // 这里输入数字即可调用
      }, 1000);
    },
    methods: {
        // 设置文字滚动
      setNumberTransform () {
        const numberItems = this.$refs.numberItem // 拿到dom树的i 元素，计算4个元素数量 numberItem[0] 代表第一个i元素
        const numberArr = this.orderNum.filter(item => !isNaN(item))
        // 结合CSS 对数字字符进行滚动,显示订单数量
        for (let index = 0; index < numberItems.length; index++) {
          //对四个数字中的i设置位置
            const elem = numberItems[index]
            elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)` //用` 多行字符串
        }
      },
      // 处理总订单数字
      toOrderNum(num) {
        num = num.toString()
        // 把订单数变成字符串 '3001'
        this.orderNum = num.split('') // ['3','0','0','1']将其便变成数据，渲染至滚动数组
        this.setNumberTransform()
      },
    }
  }
</script>
<style scoped lang='scss'>
   /*订单总量滚动数字设置*/
  .box-item {
    //position: relative;
    height: 100px;
    font-size: 54px;
    line-height: 41px;
    text-align: center;
    list-style: none;
    //color: #2D7CFF;
    writing-mode: vertical-lr;//这里必须得加上竖排
    text-orientation: upright;
    /*文字禁止编辑*/
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
    /* overflow: hidden; */
  }
  /* 默认逗号设置 */
  /*滚动数字设置*/
  .number-item {
    width: 41px;
    height: 75px;
    /* 背景图片 */
    background: url(/images/text-bg-blue.png) no-repeat center center;
    background-size: 100% 100%;
    // background: #ccc;
    list-style: none; //去掉列表格式
    margin-right: 5px;
    // background:rgba(250,250,250,1);
    border-radius:4px;
    border:1px solid rgba(221,221,221,1);
    & > span {
      position: relative;
      display: inline-block;
      margin-right: 10px;
      width: 100%;
      height: 100%;
      writing-mode: vertical-rl;
      text-orientation: upright;
      overflow: hidden;
      & > i {
        font-style: normal;
        position: absolute;
        top: 11px;
        left: 50%;
        transform: translate(-50%,0);
        transition: transform 1s ease-in-out;
        letter-spacing: 10px;
      }
    }
  }
  .number-item:last-child {
    margin-right: 0;
  }
</style>