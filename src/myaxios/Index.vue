<template>
    <div id="axios">
        <div class="box">
            <div class="box2">
                <h1>Bitcoin Price Index</h1>

                <section v-if="errored">
                    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
                </section>

                <section v-else>
                    <div v-if="loading">loading...</div>

                    <div
                        v-else
                        v-for="(currency,index) in info"
                        class="currency"
                        :key="index"
                    >
                        {{currency.description}}:
                        <span class="lighten">
                            <span v-html="currency.symbol"></span> {{currency.rate_float | currencydecimal}}
                        </span>
                    </div>

                </section>
            </div>
           <div>{{text}}</div>

           <button @click="clickHandler">点击</button>
           <div
                class="currency"
                v-for="(content,index) in msg"
                :key="index"
           >
                <span class="lighten">{{content.id}}</span>
                <span class="lighten">{{content.name}}</span>
           </div>

        </div>
    </div>
</template>
<script>
import Axios from "axios"
export default {
    data () {
        return {
            datainfo: null,
            info: null,
            loading:true,
            errored:false,
            text: null,
            msg:null
        }
    },
    filters: {
        currencydecimal (val) {
            return val.toFixed(2)
        }
    },
    methods:{
        async hello (){
            this.text = "异步请求"
            return "后执行异步请求"
        },

        //https://www.cnblogs.com/Eeyhan/p/10579239.html
        clickHandler () {
            Axios
                .get("http://127.0.0.1:8000/data/")
                .then(response => {
                    console.log(response.data)
                    this.msg = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    mounted () {
        //下面是axios获取后端数据
        Axios
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(response =>{
                //console.log(response)
                //console.log(response.data.bpi)
                this.datainfo = response
                this.info = response.data.bpi
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false);
        
        //下面是异步执行async async异步函数返回的是一个promise对象，
        //如果要获取到promise返回值，我们就应该使用.then方法。
        this.hello().then(result => { //不要忘记this.hello() ，不是hello()
            console.log(result);
        })
        console.log(this.hello());
        console.log('先执行');

        
    }
    
}
</script>
<style>
    .box {
        margin: 0 auto;
        width: 800px;
        height: 400px;
        background-color: rgb(83, 97, 89);
        padding-top: 30px;
    }
    .box2 {
        margin: 0 auto;
        width: 350px;
        height: 170px;
        background-color: rgb(24, 18, 18);
        padding:30px;
        border-radius: 5px;
    }
    h1 {
        text-align: center;
        color:white;
        margin-bottom: 20px;
    }
    .currency{
        height: 1.5em;
        line-height: 1.5em;
        color:grey;
        font-weight: 600;
    }
    .lighten{
        color:white;
        font-weight: bold;
    }
</style>