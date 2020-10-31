<template>
  <div class="about">
    <h1>任务计划列表</h1>
    <input v-model="inputvalue" @keyup.13="handlesubmit" ref="usernameInput"/>
    <button @click="handlesubmit">提交</button>
    <li v-show="!list.length">还没有添加任务</li>
    <ul class="task-count" v-show="list.length">
        <li>{{unComplete}}个任务未完成</li>
        <li class="action">
            <a :class="{active:visibility!=='unCompleted'&&visibility!=='completed'}" @click="visibility='all'">所有任务</a>
            <a :class="{active:visibility==='unCompleted'}"  @click="visibility='unCompleted'">未完成的任务</a>
            <a :class="{active:visibility==='completed'}" @click="visibility='completed'">完成的任务</a>
        </li>
    </ul>
    <!--https://cn.vuejs.org/v2/api/#key 重点 key 不能写成:key="index" 基于 key 的变化重新排列元素顺序-->
    <ul class="task-list" v-show="list.length">
      <Todoitem 
        class="todo"
        v-for="(todo,index) in filterData"
        :key="todo.todo"  
        :todo="todo"
        :index="index"
        @remove="removeTodo"
        @edititem="editTodo"
        @iscom="editComplete"
      />
    </ul>
    <p>
      <router-link to="/">返回</router-link>
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
      visibility: 'all'
    }
  },
  methods: {
    focus () {
      this.$refs.usernameInput.focus ();
    },
    handlesubmit () {
      if (this.inputvalue === ''){
        return 
      }
      this.list.push({
        todo:this.inputvalue,
        isComplete:false
      })
      this.inputvalue = ''
    },
    removeTodo (index){
      this.list.splice(index, 1)
    },
    editTodo(index,todo){
      var newtodo = {
        todo:todo,
        isComplete:this.list[index].isComplete
      }
      this.list.splice(index,1,newtodo)
    },
    editComplete(index,state){
      var newtodo = {
        todo:this.list[index].todo,
        isComplete:state
      }
      this.list.splice(index,1,newtodo)
    }
  },
  computed:{
    unComplete(){
      return this.list.filter(item=>{
        return !item.isComplete
      }).length
    },
    filterData(){
     var filter = {
          all:function(list){
              return list;
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
          }
      }
      return filter[this.visibility](this.list)
      
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
input{
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
	border: 1px solid rgba(175,47,47,0.2)
}

.task-list{
  width:550px;
  margin:0 auto;
}

</style>
