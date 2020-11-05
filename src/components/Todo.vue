<template>
  <div class="about">
    <h1>任务计划列表</h1>
    <span style="position:relative;width:400px;display: inline-block;">
      <span class="el-icon-search" @click="visibility='search'" title="输入内容，点击小放大镜就能搜索"></span>
      <input class="myinput " v-model="inputvalue" @keyup.13="handlesubmit" ref="usernameInput" placeholder="Add a todo" icon="el-icon-search" />
    </span>
    <button @click="handlesubmit">添加</button>
    <ul class="task-count">
        <li>{{unComplete}}个任务未完成</li>
        <li class="action">
            <a :class="{active:visibility==='all'}" @click="visibility='all'">所有任务</a>
            <a :class="{active:visibility==='unCompleted'}"  @click="visibility='unCompleted'">未完成的任务</a>
            <a :class="{active:visibility==='completed'}" @click="visibility='completed'">完成的任务</a>
        </li>
    </ul>
    <li v-show="!list.length">还没有添加任务</li>
    <div v-show="visibility==='search'">搜索结果为：（共计{{this.filterData.length}}个任务）</div>
    <!--https://cn.vuejs.org/v2/api/#key 重点 key 不能写成:key="index" , 基于 key 的变化重新排列元素顺序-->
    <ul class="task-list" v-show="list.length">
      <Todoitem 
        class="todo"
        v-for="(todo,index) in filterData"
        :key="todo.id"  
        :todo="todo"
        :index="index"
        @remove="removeTodo"
        @edititem="editTodo"
        @iscom="editComplete"
      />
    </ul>
    <p class="action" v-show="visibility==='search'">
      <a :class="{active:visibility==='all'}" @click="visibility='all'">返回</a>
    </p>
  </div>
</template>

<script>
//Todo.vue 文件里的css 完全不写也不影响功能
//https://blog.csdn.net/lhjuejiang/article/details/81040236 参考
import Todoitem  from '@/components/Todoitem'
export default {
  components: {
    Todoitem
  },
  data () {
    return {
      inputvalue: '',
      list: [],
      visibility: 'all',
      searchData:[],
      id : 0
    }
  },
  methods: {
    focus () {
      this.$refs.usernameInput.focus ();
    },
    handlesubmit () {
      this.id += 1;
      if (this.inputvalue === ''){
        return 
      }
      this.list.push({
        id:this.id.toString(),
        todo:this.inputvalue,
        isComplete:false
      })
      this.inputvalue = ''
    },
    removeTodo (id){
      this.$confirm('删除该任务？','小提示',{
        confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
      }).then(()=>{
          this.list = this.list.filter((item) => {
              return item.id != id
          });
          this.$message({
              type: 'success',
              message: '删除成功!'
          });
      }).catch(()=>{
          this.$message({
              type: 'info',
              message: '已取消删除'
          }); 
      })
    },
    editTodo(id,todo){
      this.list.map(item=>{
        if (item.id == id){
          item.todo = todo
        }
      })
      /* 
      this.list[index].todo = todo
      var newtodo = {
        id:item.id,
        todo:todo,
        isComplete:item.isComplete
      }
      this.list.splice(index,1,newtodo)
      */
    },
    editComplete(id){
      this.list.map(item=>{
        if (item.id == id){
          item.isComplete = !item.isComplete
        }
      })
      /**
       * this.list[index].isComplete = !this.list[index].isComplete
      var newtodo = {
        id:item.id,
        todo:item.todo,
        isComplete:state
      }
      this.list.splice(index,1,newtodo)
      */
    }
  },
  computed:{
    unComplete(){
      return this.list.filter(item=>{
        return !item.isComplete
      }).length
    },
    filterData:{
      get(){
        var that = this
        var filter = {
          all:function(list){
              return list
          },
          completed:function(list){
              return list.filter(item=>{
                  return item.isComplete;
              })
          },
          unCompleted:function(list){
              return list.filter(item=>{
                  return !item.isComplete;
              })
          },
          search:function(list){
              return list.filter(item=>{
                console.log(that)
                console.log(this)
                console.log(that.inputvalue)
                console.log(item,item.todo.includes(that.inputvalue))
                  return item.todo.includes(that.inputvalue)
              })
          }
        }
        return filter[this.visibility](this.list)
      },
      set(val){
        console.log(val)
      }
    }
  },
  mounted () {
    this.focus();
  }
}
</script>


<style scoped lang="scss">
h1{
  line-height: 70px;
  background: rgb(79, 79, 107);
  color:rgb(243, 233, 233);
  text-align: center;
  height: 70px;
}
.about{
  text-align: center;
}
.myinput{
  vertical-align:middle; /*基准线让input和button对齐*/
  box-sizing: border-box;
  margin:30px auto;
  outline-style: none;
  border:2px solid rgb(196, 199, 206);
  border-right: 0;
  border-radius: 10px 0px 0px 10px;
  padding:10px 14px;
  width:400px;
  font-size: 18px;
  height: 40px;
  font-family: "Microsoft soft";
}
.el-icon-search{
  position: absolute;
  top:43px;
  right: 7px;
  cursor: pointer;
}

button,button:visited{
  vertical-align:middle;/*基准线让input和button对齐*/
  width:70px;
  font-size: 18px;
  border: 1px solid rgb(128, 154, 224);
  border-left: 0;
  height: 40px;
  border-radius: 0px 10px 10px 0px;
  background:rgb(128, 154, 224);
  color:rgb(255, 251, 251);
}
button:hover,button:active,button:focus{
  outline:0;/*focus 去掉点击后的框*/
  background:rgb(83, 88, 158);
}

.task-count{
  display: flex;
  margin: 0px 20% 10px 20%;
}
.task-count li{
  flex:1;
}
.task-count li:nth-child(1){ /*.task-count 的 第 1 个子元素，且元素的类型是li*/
  padding:5px 0 0 10px;
  color:rgb(101, 136, 106);
  font-weight: bold;
}
.action {
  display: flex;
}
.action a{
  flex:1;
  cursor: pointer;
  color: #777
}
.active {
	border: 1px solid rgba(25, 77, 51, 0.575);
  border-radius:5px;
}

.task-list{
  width:550px;
  margin:0 auto;
}
.searchshow{
  display: block;
}
</style>
