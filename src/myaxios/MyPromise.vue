<template>
  <div class="pro">
   <div class="currency"><span>{{msg}}</span></div>
  </div>
</template>

<script>
export default {
  name: 'promise',
  data () {
    return {
     msg: 1
    }
  },
  methods: {
      usepromise () {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(this.msg*2);
          }, 3000);
        }).then((res) => {
          console.log(res)
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(res*2) //这里是res*2 不是this.msg*2
            }, 6000);
          })
        }).then(res => {
          console.log(res)
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(res*2)
            }, 3000);
          })
        })
      }
  },
  mounted () {
      this.usepromise().then(res => console.log(this.msg = res))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pro {
    margin: 0 auto;
    width: 30px ;
    height: 30px;
    background:black;
    text-align: center;
    span{
        color:white;
        line-height: 30px;
    }
}
</style>
