<template>
    <div class="hello">
        <div>
            <button @click="btnclick()">触发函数</button>
            <button @click="btnclick2()">触发函数2</button>
        </div>
        <div>{{ name }}</div>
        <div>{{ age }}</div>
        <div>{{ grade }}</div>
    </div>
</template>
<script>
//https://www.h5w3.com/13135.html
export default {
name: 'HelloWorld',
props: {
    msg: String
},
data () {
    return {
        name: '',
        age: '',
        grade: ''
    }
},
methods: {
    btnclick () {
        function Person (name, age) {
            console.log(name, age, '1111111111111')
            console.log(this, '33333333333')
            this.name = name
            this.age = age
        }
        function Student (name, age, grade) {  
            Person.apply(this,arguments)
            console.log('student中的this: ',this)
            console.log('student中的arguments: ',arguments)
            this.grade = grade;  
        }
        const stu = new Student("jack", 24, "2年")
        console.log(stu, '2222222222')
        console.log(this, '4444444444')
    },
    btnclick2 () {
        function Person (name, age) {
            console.log(name, age, '1111111111111')
            console.log(this, '33333333333')
            this.name = name
            this.age = age
        }
        const params = ["jack", 18]
        Person.apply(this,params)
        console.log(this)
    }
  }
}
</script>

<style scoped>

</style>