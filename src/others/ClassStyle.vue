<template>
  <div class="mystyle">
      <div :class="{active: isActive, danger: !isActive}"></div>
      <button :class="{btn: isActive, 'btn-d':!isActive}" @click="changeclass">按键</button> | 
      <button :class="classObject" @click="changeclass">使用对象计算属性按键</button> |
      <button :class="[isActive ?activeClass:'', otherClass]" @click="changeclass">使用数组按键</button>
      <div :style="{color:activeColor,fontSize:fontSize+'px'}">样式</div>
      <div style="color:rgb(244, 200, 146),fontSize:30px">样式</div>
      <div :style="styleObject">对象</div>
      <div :style="[styleObject,divStyle]">多个对象</div>
  </div>
</template>

<script>
export default {
  name: 'myclass',
  data () {
    return {
        isActive: true,
        activeClass: 'btn',
        otherClass: 'btn-c',

        activeColor:'rgb(244, 200, 146)',
        fontSize:'30',
        styleObject: {
            width: '200px',
            height: '30px',
            lineHeight: '30px',
            color:'white',
            textAlign:'center',
            fontSize: '13px',
            backgroundColor: 'rgb(95, 63, 92)' //CSS property 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名
        },
        divStyle: {
            'font-weight':'bold',
            'border-radius': '15px'
        }
    }
  },
  methods: {
      changeclass () {
          this.isActive = !this.isActive;
      }
  },
  computed: {
      classObject () {
          return {
              btn: this.isActive,
              'btn-d': !this.isActive 
          }
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.active {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color:rgb(149, 186, 229);
}
.danger {
    width: 100px;
    height: 100px;
    background-color:rgb(233, 146, 146);
}
@mixin btn {
    font-weight: bold;
    border: 0px;
    border-radius: 5px;
}

.btn-c {
    color: white;
    background-color: rgb(70, 145, 70);
    @include btn;
}
.btn-d {
    color: white;
    background-color: rgb(190, 40, 40);
    @include btn;
}
.btn {
    color: white;
    background-color: rgb(49, 83, 155);
    @include btn;
}

</style>
