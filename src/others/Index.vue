<template>
  <div class="others">
    <div class="box">
      <Storetest>
          <template v-slot:footer>
              <h4>在父组件用v-slot: footer ,this is footer</h4>
          </template>
          <template v-slot:header>
              <h4>在父组件用template v-slot: header ,this is header</h4>
          </template>
      </Storetest>
    </div>
    <div class="box">
      <Ditu></Ditu>
    </div>
    <div class="box">
      <wait></wait>
    </div>

    <div class="box">
      <dong-tai></dong-tai>
    </div>
    <div class="box" >
      <router-link class="back" to='/'>返回</router-link>
    </div>
  </div>
</template>

<script>
import Storetest from '@/others/Storetest.vue'
import Ditu from '@/others/Ditu.vue'
import Wait from '@/others/Wait.vue'
import DongTai from '@/others/DongTai.vue'
export default {
  name: 'Others',
  components: {
      Storetest,
      Ditu,
      Wait,
      DongTai
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  margin: 30px auto;
  padding: 15px 25px;
  background-color: rgb(138, 182, 184);
  border:2px solid rgb(71, 71, 71);
  border-radius:7pt;
  width:80%;
}

.back:hover{
  color:rgb(216, 236, 176);
  font-weight: bold;
}
</style>
