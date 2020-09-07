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
            <div>
                <router-view></router-view>
            </div>
            <div>{{text}}</div>

            <button @click="clickxiaomi">点击本地json实现不了</button>
            <div
                class="currency"
                v-for="(product,index) in xiaomi"
                :key="index"
            >
                <span>{{product.productName}}</span>:    <span>{{product.productPrice}}</span>
            </div>

            <div> 
                <my-promise></my-promise>
            </div>
            <div>
                <my-websocket></my-websocket>
            </div>
            
        </div>
    </div>
</template>
<script>
import Axios from "axios"
import MyPromise from "@/myaxios/MyPromise.vue"
import MyWebsocket from "@/myaxios/MyWebsocket.vue"

export default {
    components: {
        MyPromise,
        MyWebsocket
    },

    data () {
        return {
            datainfo: null,
            info: null,
            loading:true,
            errored:false,
            text: null,  //异步请求
            xiaomi:null //本地的json
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

        async hello2 (flag) {
            if (flag){
                return 'right'
            }else{
                throw 'wrong, has a error,flag=0'
            }
        },

        //函数本身返回promise , 加不加async结果都一样
        //https://segmentfault.com/a/1190000013141641
        awaitMethod (num) {
            return new Promise((resolve) => {
                setTimeout (() => {
                    resolve(2*num);
                },2000)
            })
        },
        async testWait () {
            //await关键字，只能放在async函数里面
            //await它后面可以放任何表达式，不过我们更多放的是一个promise对象的表达式
            //await和.then 一样获得promise结果
            let result = await this.awaitMethod(30);
            let result1 = await this.awaitMethod(50);
            let result2 = await this.awaitMethod(30);
            console.log(result+result1+result2);
        },

        clickxiaomi () {
            Axios
                .get('http://localhost:8080/static/ceshi.json') 
                .then(res => {
                    this.xiaomi = res.data.result
                    console.log(res)
                })
        }
    },
    mounted () {
        //下面是axios获取后端数据
        let a  = Axios
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
        
        console.log(a) //axios async返回都是promise对象

        //下面是异步执行async async异步函数返回的是一个promise对象，
        //如果要获取到promise返回值，我们就应该使用.then方法。
        this.hello().then(result => { //不要忘记this.hello() ，不是hello()
            console.log(result);
        })

        this.hello2(0)
            .catch(err =>{
                console.log(err)
            })

        console.log(this.hello());
        console.log('先执行');

        //console.log(this.hello2(1))
        //console.log(this.hello2(0))

       this.testWait()
        
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