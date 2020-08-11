<template>
  <div class="wait">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>

    <input v-model="f"/>
    <button @click="f">submit</button>
    <div>{{fullname}}</div>
    <div>{{dofull}}</div>
  </div>
</template>

<script>

export default {
    data () {
        return {
            f:'f',
            l:'l',
            fullname: 'f l',//在watch 里shi
            
            message: 'hello'//在computed 里是reversedMessage一个计算属性
        }
    },
    watch: {
        //当一条数据影响多条数据的时候就需要用watch f 和l 也为一个属性
        f (val) {
            this.fullname = val + ' ' + this.l
        },
        l (val){
            this.fullname = this.f + ' ' + val
        }
    },
    computed: {
        reversedMessage () {
            return this.message.split('').reverse().join('') //返回值不改变原值
        },
//只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 message 还没有发生改变，
//多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
        dofull () {
            return this.f +' ' +this.l//典型用于购物车，受多种因素的影响
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
