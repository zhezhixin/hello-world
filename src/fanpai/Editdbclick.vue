<template>
  <div class="test" id="test" :class="{editing:isChecked}">
      <div class="view">
          <label @dblclick="dbTest()">{{item}}</label>
      </div>
      <input
        v-myfocus="isChecked"
        class="edit"
        type="text"
        v-model="inputStr"
        @blur="inputStred()"
        @keyup.13="inputStred()"
        /> 
  </div>
</template>

<script>
//https://blog.csdn.net/reai2011/article/details/103198970
export default {
  name: 'edit',
  data () {
    return {
        item:'双击改变',
        isChecked:false,
        inputStr:''
    }
  },
  methods:{
      dbTest(){
          this.isChecked = true;
          this.inputStr = this.item;
      },
      inputStred(){
          this.item = this.inputStr;
          this.isChecked = false;
      }
  },
  directives:{
      myfocus:{
          update(el,binding){
              if(binding.value){
                  el.focus();
              }
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.test.editing .edit {
    display: block;
    width: 150px;
}
.test.editing .view {
    display: none;
}
.test .edit {
    display: none;
}
</style>
