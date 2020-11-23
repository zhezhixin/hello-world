<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ time }}</h1>
    <p>
      <router-link to="/">返回</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      time: new Date().toLocaleTimeString()
    }
  },
  methods: {
    tick(){
      this.timer = setInterval(() => {
        this.time = new Date().toLocaleTimeString()
      }, 1000);
    }
  },
  mounted () {
    this.tick()
  },
  beforeDestroy () {
    if (this.timer){
      clearInterval(this.timer)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
