<template>
  <div class="elui">
    <el-button @click="visible=true">Button</el-button>
    <el-dialog :visible.sync="visible" title="hello">
        <p> try element </p>
    </el-dialog>

    <div id="layout">  
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>    
      </el-row>
      <el-row> 
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <span>:gutter="20" col 间隔20</span>
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <span> :offset="6" col 位移向后6个单位</span>
      <el-row>
        <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <span>type="flex" justify="space-between" col两端对齐，justify="center"为居中</span>
      <el-row type="flex" justify="space-between">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <span>响应式布局</span>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>

    </div>

    <div id="container" >
      <el-container style="height:500px;border:1px solid #eee">
        <el-aside width="200px" style="background-color:rgb(238, 241, 246)">
          <el-menu :default-openeds="['1','3']">

            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>导航一</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1"> 选项一</el-menu-item>
                <el-menu-item index="1-2"> 选项二</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组二">
                <el-menu-item index="1-3"> 选项三</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项四</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
 
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-message"></i>导航2</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1"> 选项一</el-menu-item>
                <el-menu-item index="2-2"> 选项二</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组二">
                <el-menu-item index="2-3"> 选项三</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="2-4">
                <template slot="title">选项四</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title"><i class="el-icon-message"></i>导航3</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="3-1"> 选项一</el-menu-item>
                <el-menu-item index="3-2"> 选项二</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组二">
                <el-menu-item index="3-3"> 选项三</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="3-4">
                <template slot="title">选项四</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>

          </el-menu>
        </el-aside>

        <el-container>
          <el-header style="text-align:right;font-size:12px;">
            <el-dropdown trigger="click">
              <i class="el-icon-setting" style="margin-right:15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>用户名</span>
          </el-header>
          
          <el-main>
            <el-table :data="tableData">
              <el-table-column prop="date" label="日期" width="140"></el-table-column>
              <el-table-column prop="name" label="姓名" width="120px"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </el-main> 
        </el-container>

      </el-container>
    </div>

  </div>
</template>

<script>
// https://element.eleme.cn/#/zh-CN/component/quickstart  在项目中使用 Element

export default {
  name: 'el-ui',
  data () {
    let formateDate = () => {
      let date = new Date();
      let y = date.getFullYear();
      let m = date.getMonth()+1;
      let d = date.getDate();
      m = m < 10? '0' + m : m;
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let mm = date.getMinutes();
      mm = mm < 10 ? "0" + mm : mm;
      return y + "-" + m + "-" + d + " " + h + ":" + mm;
    }
    const item = {
      date:formateDate(),
      name:'立史',
      address:'上海市普陀区金沙江路 1518 弄',
    };
    return {
        visible: false,
        tableData: Array(20).fill(item),
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style> 
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
      margin-bottom: 50px;
  }
  
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .el-header {
    background-color: #83c0d1;
    color:#333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }

  
</style>
