<template>
  <div class="ditu">
   <Distpicker @province="onp" @city="onc" @area="ona">
   </Distpicker>
    {{provinceval}},{{cityval}},{{areaval}}
  </div>
</template>

<script>
import Distpicker from 'v-distpicker'
export default {
  name: 'ditu',
  components: {Distpicker},
  data () {
      return {
          cityval:'',
          provinceval:'',
          areaval:''
      }
  },
  methods: {
      onp (val) {
          this.provinceval = val.value
      },
      onc (val) {
          this.cityval = val.value
      },
      ona (val) {
          this.areaval = val.value
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
