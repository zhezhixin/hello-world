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
        </div>
    </div>
</template>
<script>
import Axios from "axios"
export default {
    data () {
        return {
            info: null,
            loading:true,
            errored:false
        }
    },
    filters: {
        currencydecimal (val) {
            return val.toFixed(2)
        }
    },
    mounted () {
        Axios
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(Response =>{
                this.info = Response.data.bpi
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
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