<template>
  <div class="socket">
      <div id="chat-content">
        <div 
            class="chat-li"
            v-for=" (msg, index) in allmessage"
            :key="index"
        >
            <span>{{msg.user_id}}</span>: <span>{{msg.message}}</span>
        </div>
      </div>
      <input type="text" placeholder="请输入您要发送的消息" v-model="message" />
      <input type="button" @click="sendmsg" value="发送消息"/>
  </div>
</template>

<script>
export default {
  name: 'websocket',
  props:['id'],
  data () {
    return {
     websock: null,
     message: null,
     allmessage: [],
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
         let id = escape(this.id)
         const w = "ws://127.0.0.1:8000/ws/room/"+ id +"/";
         this.websock = new WebSocket(w);
         this.websock.onmessage = this.websocketonmessage;
         this.websock.onopen = this.websocketonopen;
         this.websock.onerror = this.websocketonerror;
         this.websock.onclose = this.websockclose;
     },
     websocketonopen () {
        //let actions = {"user_id":"0","message": "welcome"}
        //this.websocketsend(JSON.stringify(actions));
     },
     websocketonerror () {
         this.initWebSocket();
     },
     websocketonmessage (e) { //一旦服务端有消息 会自动触发
         const redata = JSON.parse(e.data)
         if (redata.message) {
             this.allmessage.push(redata)
             }
         console.log(redata)
     },
     websocketsend (Data) {
         this.websock.send (Data);
     },
     websockclose (e) {
         console.log('close the connect....',e)
     },
     sendmsg () {
         let data = {
             'user_id': 12,
             'message': this.message,
         }
         this.websocketsend(JSON.stringify(data));
     },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#chat-content {
    width: 300px ;
    height: 300px;
    overflow-y: scroll;
    background:black;
    .chat-li{
        height: 30px;
        line-height: 30px;
        span{
            color:white;
            line-height: 30px;
        }
    }
    
}
</style>
