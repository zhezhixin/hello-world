<template>
    <div class="zz-echart">
    <div id='myChart' :style="{width: '300px',height:'300px'}"></div>
    </div>
</template>
<script>


import echarts from 'echarts'//引用echarts 这里没有用到vue-echarts

import 'echarts/lib/chart/line' //这里是chart/line 不是charts/line
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
/*
let echarts = require('echarts'); //这里引用方式import echarts from 'echarts/lib/echarts'
// 引入折线图组件
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
*/
export default {
    methods: {
        drawLine(){
             let myChart = echarts.init(document.getElementById('myChart'))
             myChart.setOption({
                 title: {text:'use echarts'},
                 tooltip: {},
                 xAxis: {
                     data:['a','b','c','d','e','f']
                 },
                 yAxis: {},
                 series: [{
                     name: 'sell',
                     type: 'bar',
                     data:[5,20,36,10,10,20]
                 }]
             });
        }
    },
    mounted () {
        this.drawLine();
    }
}
</script>