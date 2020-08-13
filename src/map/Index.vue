<template>
  <div class="my-map">
    <map-ex></map-ex>
    <img src="../../static/img/marker-icon.png"/>
  </div>
</template>

<script>
import MapEx from './MapEx.vue'
export default {
  components: {
    MapEx
  }
}
</script>

<style>
    .my-map {
        width: 100%;
        height: 600px;
    }
</style>