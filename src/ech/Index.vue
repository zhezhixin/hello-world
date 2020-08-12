<template>
    <div class="zz-echart">
    <div id='myChart' :style="{width: '300px',height:'300px'}"></div>
    </div>
</template>
<script>
import ECharts from 'echarts'

import 'echarts/lib/echart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'

export default {
    methods: {
        drawLine(){
             let myChart = ECharts.init(document.getElementById('myChart'))
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
                     data:['5,20,36,10,10,20']
                 }]
             });
        }
    },
    mounted () {
        this.drawLine();
    }
}
</script>