<template>
    <div class="test" :class="{editing:isChecked}">
        <li>
            <div class="view" :class="{state:iscom}">
                <input 
                    class="state"
                    type="checkbox"
                    v-model="iscom"
                />
                {{thisvalue}}
                <span class="handle">
                    <button class="destroy" @click="handledelete"></button>
                    <button @click="changethisvalue">编辑</button>
                </span>
            </div> 

            <input
                v-myfocus="isChecked"
                class="edit"
                type="text"
                v-model="inputStr"
                @blur="inputStred()"
                @keyup.13="inputStred()"            
            />
        </li>
    </div>
</template>
<script>
export default {
    props:['todo','index'],
    data (){
        return {
            thisvalue: this.todo.todo,
            iscom:this.todo.isComplete,
            isChecked: false,
            inputStr:''
        }
    },
    methods: {
        handledelete (){
            this.$emit('remove',this.index)
        },
        changethisvalue(){
            this.isChecked = true;
            this.inputStr = this.thisvalue;
        },
		inputStred(){
			this.thisvalue=this.inputStr;
            this.isChecked=false;
            this.$emit('edititem',this.index,this.inputStr)
		}
    },
    watch:{
        iscom (value){
            this.$emit('iscom',this.index,value)
        }
    },
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
}
li:hover .destroy{
    display: inline-block;
}
.destroy:hover {
	color: #af5b5e
}
.destroy:after {
	content: 'X'
}

li{
    position: relative;
    text-align: left;
    border-bottom: 1px solid #ededed;
    padding:0 0 10px 0;
}
.handle {
    position: absolute;
    right:0
}

</style>
