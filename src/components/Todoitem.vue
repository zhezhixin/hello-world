<template>
    <div class="test" :class="{editing:isEditing}">
        <li>
            <div class="view" :class="{state:todo.isComplete}">
                <input 
                    class="state"
                    type="checkbox"
                    v-model="todo.isComplete" 
                />
                {{index+1}}.{{todo.todo}}
                <span class="handle">
                    <button class="destroy" @click="handledelete"></button>
                    <button @click="changethisvalue">编辑</button>
                </span>
            </div> 

            <input
                v-myfocus="isEditing"
                class="edit"
                type="text"
                v-model="inputStr"
                @blur="inputStred()"
                @keyup.13="inputStred()"  
                style="width:300px;"          
            />
        </li>
    </div>
</template>
<script>
export default {
    props:['todo','index'],
    data (){
        return {
            //item:this.todo,
            //thisvalue: this.todo.todo,
            //iscom:this.todo.isComplete,
            isEditing: false,
            inputStr:''
        }
    },
    methods: {
        handledelete (){
            this.$emit('remove',this.todo.id)
        },
        changethisvalue(){
            this.isEditing = true;
            this.inputStr = this.todo.todo;
        },
		inputStred(){
			this.todo.todo=this.inputStr;
            this.isEditing=false;
            this.$emit('edititem',this.todo.id,this.inputStr)
		}
    },
    //父组件传递一个对象，子组件接受，子组件中，直接修改接受到的对象里面的值，可以修改，父子组件的值都会随之改变
    //在这里todo.isComplete就是如此，最好还是不要用这种。https://www.cnblogs.com/pangchunlei/p/11139356.html
    // watch:{
    //     iscom (){
    //         this.$emit('iscom',this.item.id)
    //     }
    // },
    directives:{
        myfocus:{
            update(el,binding){
                if(binding.value){
                    el.focus();
                }
            }
        }
    }
    
}
</script>

<style scoped lang="scss">
.test.editing .edit {
    display: inline-block;
    width: 150px;
}
.test.editing .view {
    display: none;
}
.test .edit {
    display: none;
}
.test .view{
    display: inline-block;
}
.state{
    text-decoration: line-through;
    text-decoration-color:rgb(170, 114, 114);
    color:rgb(116, 116, 113);
}
.destroy {
	display: none;
    outline: 0;
    border:0;
    background:0;
    font-size: 18px;
    color: #926c6e;
    margin-right: 10px;
}
li:hover .destroy{
    display: inline-block;
}
.destroy:hover {
	color: #aa383c
}
.destroy:after {
	content: 'X'
}

li{
    position: relative;
    text-align: left;
    border-bottom: 1px solid #ededed;
    padding:10px 0 0 0;
}
.handle {
    position: absolute;
    right:0;
    top:3px;
}

</style>
