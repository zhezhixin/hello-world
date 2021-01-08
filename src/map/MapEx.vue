<template>
    <baidu-map class="bm-view" 
        ak="YoRcx2f2sno7jF8TF8e6iocyisUbGj6e"
        :center="center"
        :zoom="zoom"
        @ready="handler"
        :scroll-wheel-zoom="true"
        >
        <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
        <bm-marker :position="{lng: 116.404, lat: 39.915}" 
            :dragging="true" 
            animation="BMAP_ANIMATION_BOUNCE">   
        </bm-marker>
        <bm-boundary name="北京市" :strokeWeight="2" strokeColor="yellowgreen" fillColor="transparent"></bm-boundary>
        <bml-marker-clusterer :averageCenter="true">
            <bm-marker v-for="(item,index) in eqPoints" :key="index" :icon="{url:'../../static/img/marker-icon.png',size:{width:32,height:32}}" :position="{lng: item.longitude, lat: item.latitude}"></bm-marker>
        </bml-marker-clusterer>
    </baidu-map>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmMapType from 'vue-baidu-map/components/controls/MapType.vue'
import BmMarker from 'vue-baidu-map/components/overlays/Marker.vue'
import BmBoundary from 'vue-baidu-map/components/others/Boundary.vue'
import BmlMarkerClusterer from 'vue-baidu-map/components/extra/MarkerClusterer.vue'
export default {
    components:{
        BaiduMap,
        BmMapType,
        BmMarker,
        BmBoundary,
        BmlMarkerClusterer
        //            <bm-marker v-for="(marker,index) in markers" :key="index" :position="{lng: marker.longitude, lat: marker.latitude}"></bm-marker>

    },
    data () {
        const eqPoints = [
            {longitude:120.5884330000,latitude:29.9953100000},
            {longitude:120.4515130000,latitude:30.0790030000},
            {longitude:120.8745070000,latitude:30.0382420000},
            {longitude:120.9105740000,latitude:29.5055400000},
            {longitude:120.8374340000,latitude:29.5673280000},
            {longitude:120.2534100000,latitude:29.7149350000}
        ]
        
        return {
            center: {lng: 0, lat: 0},
            zoom: 3,
            eqPoints
        }
    },
    methods: {
        handler ({BMap, map}) {
            console.log(BMap,map)
            this.center.lng  = 116.404
            this.center.lat  = 39.915
            this.zoom = 15
        }
    }
    
}
</script>

<style>
    .bm-view {
        width: 100%;
        height: 600px;
    }
</style>