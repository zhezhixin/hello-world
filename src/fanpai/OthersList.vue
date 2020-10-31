<template>
    <div class="otherslist">
        <div class="page-top">
            <div class="page-content">
                <h2>任务计划列表</h2>
            </div>
        </div>
        <div class="main">
            <h3 class="big-title">添加任务：</h3>
            <input
                    placeholder="例如：吃饭睡觉打豆豆；    提示：+回车即可添加任务"
                    class="task-input"
                    type="text"
                v-on:keyup.enter="enterFn"
                    v-model="todo"
            />
            <ul class="task-count">
                <li>{{unComplete}}个任务未完成</li>
                <li class="action">
                    <a :class="{active:visibility!=='unCompleted'&&visibility!=='completed'}" @click="visibility='all'">所有任务</a>
                    <a :class="{active:visibility==='unCompleted'}"  @click="visibility='unCompleted'">未完成的任务</a>
                    <a :class="{active:visibility==='completed'}" @click="visibility='completed'">完成的任务</a>
                </li>
            </ul>
            <h3 class="big-title">任务列表：</h3>
            <div class="tasks">
        
                <span class="no-task-tip" v-show="!list.length">还没有添加任何任务</span>
                <ul class="todo-list" v-show="list.length">
                    <li class="todo" v-for="(item,index) in filterData" :key="index"
                    v-bind:class="{completed:item.isComplete,editing:item===edtorTodos}"
                    >
                        <div class="view">
                            <input class="toggle"
                                type="checkbox"
                                v-model="item.isComplete"
                            />
                            <label @dblclick="edtorTodo(item)">{{item.title}}</label>
                            <button
                                    class="destroy"
                                    @click="delFn(item)"
                            ></button>
                        </div>
                        <input
                                class="edit"
                                type="text"
                                v-focus="edtorTodos===item"
                                v-model="item.title"
                                @blur="edtoEnd(item)"
                                @keyup.enter="edtoEnd(item)"
                                @keyup.esc="cancelEdit(item)"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
//存取localStorage中的数据
var store = {
    save(key,value){
        window.localStorage.setItem(key,JSON.stringify(value));
    },
    fetch(key){
     return JSON.parse(window.localStorage.getItem(key))||[];
    }
}
//list取出所有的值
var list = store.fetch("storeData");

export default {
    
  name: 'edit',
  data(){
      return{
        list:list,
        todo:'',
        edtorTodos:'',//记录正在编辑的数据,
        beforeTitle:"",//记录正在编辑的数据的title
        visibility:"all"//通过这个属性值的变化对数据进行筛选
  }},
    watch:{
        //下面的这种方法是浅监控
      /*list:function(){//监控list这个属性，当这个属性对应的值发生变化就会执行函数
          store.save("storeData",this.list);
      }*/
      //下面的是深度监控
        list:{
            handler:function(){
                store.save("storeData",this.list);
            },
            deep:true
        }
 
    },
    methods:{
        enterFn(){//添加任务
            //向list中添加一项任务
            //事件处理函数中的this指向的是当前这个根实例
            if(this.todo==""){return;}
                this.list.push({
                    title:this.todo,
                    isComplete:false
                });
                this.todo = "";
        },
        delFn(item){//删除任务
            var index = this.list.indexOf(item);
            this.list.splice(index,1)
        },
        edtorTodo(item){//编辑任务
            //编辑任务的时候记录编辑之前的值
            this.beforeTitle = item.title;
            this.edtorTodos = item;
        },
        edtoEnd(){//编辑完成
            this.edtorTodos="";
            // this.cancelEdit = this.edtorTodos;
        },
        cancelEdit(item){//取消编辑
            item.title = this.beforeTitle;
            this.beforeTitle = '';
            this.edtorTodos='';
        }
    },
    directives:{
        "focus":{
            update(el,binding){
                if(binding.value){
                    el.focus();
                }
            }
        }
    },
    computed:{
        unComplete(){
        return  this.list.filter(item=>{
                return !item.isComplete
            }).length
        },
        filterData(){
            //过滤的时候有三种情况 all completed unCompleted
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
            //如果找到了过滤函数，就返回过滤后的数据，如果没有找到就返回所有的数据
            return filter[this.visibility]?filter[this.visibility](list):list;
        }
 
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {
	margin: 0;
	background-color: #fafafa;
	font: 14px 'Helvetica Neue',Helvetica,Arial,sans-serif
}

h2 {
	margin: 0;
	font-size: 12px
}

a {
	color: #000;
	text-decoration: none
}

input {
	outline: 0
}

button {
	margin: 0;
	padding: 0;
	border: 0;
	background: 0;
	font-size: 100%;
	vertical-align: baseline;
	font-family: inherit;
	font-weight: inherit;
	color: inherit;
	outline: 0
}

ul {
	padding: 0;
	margin: 0;
	list-style: none
}

.page-top {
	width: 100%;
	height: 40px;
	background-color: #db4c3f
}

.page-content {
	width: 50%;
	margin: 0 auto
}

.page-content h2 {
	line-height: 40px;
	font-size: 18px;
	color: #fff
}

.main {
	width: 50%;
	margin: 0 auto;
	box-sizing: border-box
}

.task-input {
	width: 99%;
	height: 30px;
	outline: 0;
	border: 1px solid #ccc
}

.task-count {
	display: flex;
	margin: 10px 0
}

.task-count li {
	padding-left: 10px;
	flex: 1;
	color: #dd4b39
}

.task-count li:nth-child(1) {
	padding: 5px 0 0 10px
}

.action {
	text-align: center;
	display: flex
}

.action a {
	margin: 0 10px;
	flex: 1;
	padding: 5px 0;
	color: #777
}

.action a:nth-child(3) {
	margin-right: 0
}

.active {
	border: 1px solid rgba(175,47,47,0.2)
}

.tasks {
	background-color: #fff
}

.no-task-tip {
	padding: 10px 0 10px 10px;
	display: block;
	border-bottom: 1px solid #ededed;
	color: #777
}

.big-title {
	color: #222
}

.todo-list {
	margin: 0;
	padding: 0;
	list-style: none
}

.todo-list li {
	position: relative;
	font-size: 16px;
	border-bottom: 1px solid #ededed
}

.todo-list li:hover {
	background-color: #fafafa
}

.todo-list li.editing {
	border-bottom: 0;
	padding: 0
}

.todo-list li.editing .edit {
	display: block;
	width: 506px;
	padding: 13px 17px 12px 17px;
	margin: 0 0 0 43px
}

.todo-list li.editing .view {
	display: none
}

.todo-list li .toggle {
	text-align: center;
	width: 40px;
	height: auto;
	position: absolute;
	top: 5px;
	bottom: 0;
	margin: auto 0;
	border: 0;
	-webkit-appearance: none;
	appearance: none
}

.toggle {
	text-align: center;
	width: 40px;
	height: auto;
	position: absolute;
	top: 5px;
	bottom: 0;
	margin: auto 0;
	border: 0;
	-webkit-appearance: none;
	appearance: none
}

.toggle:after {
	content: url('data:image/svg+xml;utf8,<svgxmlns="http://www.w3.org/2000/svg"width="40"height="40"viewBox="-10-18100135"><circlecx="50"cy="50"r="40"fill="none"stroke="#ededed"stroke-width="3"/></svg>')
}

.toggle:checked:after {
	content: url('data:image/svg+xml;utf8,<svgxmlns="http://www.w3.org/2000/svg"width="40"height="40"viewBox="-10-18100135"><circlecx="50"cy="50"r="40"fill="none"stroke="#bddad5"stroke-width="3"/><pathfill="#5dc2af"d="M7225L42712756l-44202034-52z"/></svg>')
}

.todo-list li label {
	white-space: pre-line;
	word-break: break-all;
	padding: 15px 60px 15px 15px;
	margin-left: 45px;
	display: block;
	line-height: 1.2;
	transition: color .4s
}

.todo-list li.completed label {
	color: #d9d9d9;
	text-decoration: line-through
}

.todo-list li .destroy {
	display: none;
	position: absolute;
	top: 0;
	right: 10px;
	bottom: 0;
	width: 40px;
	height: 40px;
	margin: auto 0;
	font-size: 30px;
	color: #cc9a9a;
	margin-bottom: 11px;
	transition: color .2s ease-out
}

.todo-list li .destroy:hover {
	color: #af5b5e
}

.todo-list li .destroy:after {
	content: 'X'
}

.todo-list li:hover .destroy {
	display: block
}

.todo-list li .edit {
	display: none
}

.todo-list li.editing:last-child {
	margin-bottom: -1px
}
</style>
