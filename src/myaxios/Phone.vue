<template>
    <div id="phoneapi">
       <div>
           <input placeholder="please input your phone number" v-model="phonenum" />
           <button @click="getFaceResult">确定</button>
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
                                    this.facelist = res.data.obj
                                }
                            })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }

    },
    mounted () {
      
    }
    
}
</script>
<style>
    
</style>