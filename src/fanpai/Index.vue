<template>
  <div class="my-map">
    <my-fan></my-fan>
    <editdbclick></editdbclick>
    <others-list></others-list>
  </div>
</template>

<script>
import MyFan from './MyFan.vue'
import Editdbclick from './Editdbclick.vue'
import OthersList from './OthersList.vue'

export default {
  components: {
    MyFan,
    Editdbclick,
    OthersList
  }
}
</script>

<style>
    .my-map {
        width: 100%;
        height: 600px;
    }
</style>