<template>
    <div id="phoneapi">
       <div>
           <input placeholder="please input your phone number" v-model="phonenum" />
           <button @click="getFaceResult">确定</button>
           <button @click="getFaceResult_2">确定用await</button>
       </div>
       <div>
           <span class="currency"
           v-for="(item,index) in facelist"
           :key="index"
           >
                {{item}}
           </span>
       </div>
    </div>
</template>
<script>
import Axios from "axios"
import qs from "qs"
export default {
    data () {
        return {
            phonenum: 123456,
            facelist: ["30元", "50元"]
        }
    },
    methods:{
        // qs.stringify()	转换成查询字符串
        // let comments = {content: this.inputValue}
        // let comValue = qs.stringify(comments)

        // qs.parse() 转换成json对象
        // let comValue = qs.parse(comments)

        getLocation (phonenum) {
            var data = {a:phonenum}
            return Axios
                        .post('http://127.0.0.1:8000/phoneLocation',
                            qs.stringify(data)
                        )
        },

        getFaceList (province, city) {
            return Axios
                        .post('http://127.0.0.1:8000/faceList', qs.stringify({
                            province,
                            city
                        }))
        },
        
        getFaceResult () {
            this.getLocation(this.phonenum)
                .then(res => {
                    if(res.status === 200 && res.data.success){
                        let province = res.data.obj.province;
                        let city = res.data.obj.city;
                        console.log('phone type:',typeof(res.data))
                        console.log(res)
                        this.getFaceList(province,city)
                            .then(res => {
                                if (res.status===200 && res.data.success){
                                    this.facelist = res.data.price
                                    console.log('face type:',typeof(res.data))
                                    console.log(res)
                                    console.log(res.data.price)
                                }
                            })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },

        //await和.then 一样获得promise结果

        // // Want to use async/await? Add the `async` keyword to your outer function/method.

        // async function getUser() {
        //   try {
        //     const response = await axios.get('/user?ID=12345');
        //     console.log(response);
        //   } catch (error) {
        //     console.error(error);
        //   }
        // }
        async getFaceResult_2 () {
            try{
                let location = await this.getLocation(this.phonenum)
                if (location.data.success) {
                    let province = location.data.obj.province;
                    let city = location.data.obj.city;
                    let result = await this.getFaceList(province,city)
                    if (result.data.success) {
                        this.facelist = result.data.price
                    }
                }
            }catch(err){
                console.log(err);
            }
        }

    },
    mounted () {
    //   this.getFaceResult()
    //   this.getFaceResult_2()
    }
    
}
</script>
<style>
    #phoneapi {
        margin: 0 auto;
        text-align: center;
    }
</style>