<template>
  <div class="storetest">
    <input v-model="val" placeholder="输入加多少或减多少x"/>&nbsp;&nbsp;
    <button @click="minus">-</button>
    <button @click="minus_2">-x</button>
    <span>computed: {{coun}}</span>
    <button @click="add">+</button>
     <button @click="add_2">+x</button>
    <div>data: {{count}}</div>
    <div>data定义的属性不会因为它的赋值变量的变化而变化</div>
    <div>computed定义的属性会随它的赋值变量的变化而变化</div>
    <br>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'Storetest',
  data () {
    return {
      count: this.$store.state.count,
      val: null,
    }
  },
  computed:  {
    coun () {
      //方法二： let c = Math.floor(this.$store.state.count*100) / 100    //不四舍五入 向下取整
      //console.log(c)
      //方法一：保留两位小数，但是数值改变成了字符串类型,所以不能在store上计算
      return this.$store.state.count.toFixed(2) 
    }
  },
  methods: {
    add() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    },
    add_2() {
      if (this.val === null) {this.val = 1;}
      this.$store.dispatch ('increment',parseFloat(this.val))
    },
    minus() {
      this.$store.commit('decrement')
    },
    minus_2 () {
      if (this.val === null) {this.val = 1;}
      this.$store.dispatch('decrement',parseFloat(this.val));
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
