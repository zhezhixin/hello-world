<template>
  <div class="my-map">
    <my-fan></my-fan>

  </div>
</template>

<script>
import MyFan from './MyFan.vue'
export default {
  components: {
    MyFan
  }
}
</script>

<style>
    .my-map {
        width: 100%;
        height: 600px;
    }
</style>