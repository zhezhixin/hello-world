<template>
    <div class="bixu">
    <li>{{todo}} <button @click="handledelete">x</button></li>
    </div>
</template>
<script>
export default {
    props:['todo','index'],
    methods: {
        handledelete (){
            this.$emit('remove',this.index)
        }
    }
}
</script>