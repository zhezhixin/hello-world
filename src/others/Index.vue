<template>
  <div class="others">
    <Storetest>
        <template v-slot:footer>
            <h4>在父组件用v-slot: footer ,this is footer</h4>
        </template>
        <template v-slot:header>
             <h4>在父组件用template v-slot: header ,this is header</h4>
        </template>
    </Storetest>
    <Ditu>
    </Ditu>
    <wait></wait>
    <router-link to='/'>返回</router-link>
  </div>
</template>

<script>
import Storetest from '@/others/Storetest.vue'
import Ditu from '@/others/Ditu.vue'
import Wait from '@/others/Wait.vue'
export default {
  name: 'Others',
  components: {
      Storetest,
      Ditu,
      Wait
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
