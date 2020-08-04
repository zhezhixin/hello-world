<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input v-model="inputvalue"/>
    <button @click="handlesubmit">提交</button>
    <ul >
      <Todoitem 
      v-for="(todo,index) in list"
      :key="index"
      :todo="todo"
      :index="index"
      @remove="removeTodo"
      />
    </ul>
    <p>
      <router-link to="/">返回</router-link>
    </p>
  </div>
</template>

<script>
import Todoitem  from '@/components/Todoitem'
export default {
  components: {
    Todoitem
  },
  data () {
    return {
      inputvalue: '',
      list: []
    }
  },
  methods: {
    handlesubmit () {
      this.list.push(this.inputvalue)
      this.inputvalue = ''
    },
    removeTodo (index){
      this.list.splice(index, 1)
    }
  }
}
</script>
