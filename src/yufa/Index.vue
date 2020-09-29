<template>
  <div class="yufa">
    <example></example>
  </div>
</template>

<script>
import Example from '@/yufa/Example'
export default {
  name: 'yufa',
  components: {
      Example
  },
  data () {
      return {
          obj:{a:2}
    }
  },
  methods: {
      t () {
        function foo () {
            setTimeout(()=>{
                console.log('this.a: ',this.a)
                console.log(this)
            },100)
        }
        var obj2 = {
            a:5
        }
        foo.call(this.obj)
        foo.call(obj2)
      },
      foo2 () {
          setTimeout (()=>{
              console.log('this.a: ',this.obj.a)
              console.log(this)
          },100)
      },
      foo3 () {
          setTimeout (() =>{
              console.log('this.a: ',this.a)
              console.log(this)
          },100)
      },
  },
  mounted () {
      //this.t() //this.a:  2
      //this.foo2()// this.a:  2
      //https://www.cnblogs.com/greatdesert/p/11038026.html
      this.foo3(this.obj) //this.a:  undefined foo3 在vue中init 已经bind了vm 
      this.$options.methods.foo3.bind(this).call(this.obj) //this.a:  undefined
      this.$options.methods.foo3.call(this.obj)//this.a:  2
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
