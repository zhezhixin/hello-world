<template>
  <div class="wait">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>

    <input v-model="f"/>
    <div>使用watch：{{fullname}}</div>
    <div>使用computed:{{dofull}}</div>
  </div>
</template>

<script>

export default {
    data () {
        return {
            f:'firstName',
            l:'lastName',
            fullname: 'firstName lastName',//在watch 里需要先定义一个数据

            message: 'hello'//在computed 里是reversedMessage一个计算属性
        }
    },
    watch: {
        //当一条数据影响多条数据的时候就需要用watch； 当f 或 l 属性发生改变 f或l函数就会运行
        //在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
        f (val) {
            this.fullname = val + ' ' + this.l
        },
        l (val){
            this.fullname = this.f + ' ' + val
        }
    },
    computed: {
        //只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 message 还没有发生改变，
        //多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

        reversedMessage () {
            return this.message.split('').reverse().join('') //返回值不改变原值
        },
       
        dofull () {
            return this.f +' ' +this.l //典型用于购物车，一条数据受多种因素的影响
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
