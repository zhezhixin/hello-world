<template>
  <div class="storetest">
    <button @click="minus()">-</button>
    <span>computed: {{coun}}</span>
    <button @click="add()">+</button>
    <div>data: {{count}}</div>
    <div>data定义的属性不会因为它的赋值变量的变化而变化</div>
    <div>computed定义的属性会随它的赋值变量的变化而变化</div>
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
      count: this.$store.state.count
    }
  },
  computed:  {
    coun () {
      return this.$store.state.count
    }
  },
  methods: {
    add() {
      this.$store.commit('inceremnet')
      console.log(this.$store.state.count)
    },
    minus() {
      this.$store.commit('decremnet')
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
