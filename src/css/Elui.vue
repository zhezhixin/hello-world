<template>
  <div class="elui">
    <el-button @click="visible=true">Button</el-button>
    <el-dialog :visible.sync="visible" title="hello">
        <p> try element </p>
    </el-dialog>

    <div>  

    </div>
  </div>
</template>

<script>
// https://element.eleme.cn/#/zh-CN/component/quickstart  在项目中使用 Element
export default {
  name: 'el-ui',
  data () {
    return {
        visible: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"> //只能在本页面，子组件页面也不行

</style>
