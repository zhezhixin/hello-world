<template>
  <div class="socket">
  </div>
</template>

<script>
export default {
  name: 'websocket',
  data () {
    return {
     websock: null
    }
  },
  created () {
      this.initWebSocket();
  },
  destroyed () {
      this.websock.close();
  },
  methods: {
     initWebSocket () {
         const w = "ws://127.0.0.1:8080";
         this.websock = new WebSocket(w);
         this.websock.onmessage = this.websocketonmessage;
         this.websock.onopen = this.websocketonopen;
         this.websock.onerror = this.websocketonerror;
         this.websock.onclose = this.websockclose;
     },
     websocketonopen () {
         let actions = {"tessst": "123455"}
         this.websocketsend(JSON.stringify(actions));
     },
     websocketonerror () {
         this.initWebSocket();
     },
     websocketonmessage (e) {
         const redata = JSON.parse(e.data)
         console.log(redata)
     },
     websocketsend (Data) {
         this.websock.send (Data);
     },
     websockclose (e) {
         console.log('colse the connect....',e)
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.socket {
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
