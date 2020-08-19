<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
export default {
  name: 'App',
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body,ul,ol,p,h1,h2,h3,h4,h5,h6,dl,dd,select,input,textarea,form{margin:0;padding:0}
li{list-style: none;}
a{text-decoration: none;}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
