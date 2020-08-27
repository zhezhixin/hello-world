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
           :key=index
           >
                {{item}}
           </span>
       </div>
    </div>
</template>
<script>
import Axios from "axios"
export default {
    data () {
        return {
            phonenum: 123456,
            facelist: ["30元", "50元"]
        }
    },
    methods:{
        getLocation (phonenum) {
            return Axios
                        .post('http://127.0.0.1:8000/phoneLocation',{
                            phonenum
                        })
        },

        getFaceList (province, city) {
            return Axios
                        .post('http://127.0.0.1:8000/faceList', {
                            province,
                            city
                        })
        },

        getFaceResult () {
            this.getLocation(this.phonenum)
                .then(res => {
                    if(res.status === 200 && res.data.success){
                        let province = res.data.obj.province;
                        let city = res.data.obj.city;

                        this.getFaceList(province,city)
                            .then(res => {
                                if (res.status===200 && res.data.success){
                                    this.facelist = res.data.price
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
      this.getFaceResult()
      this.getFaceResult_2()
    }
    
}
</script>
<style>
    #phoneapi {
        margin: 0 auto;
        text-align: center;
    }
</style>