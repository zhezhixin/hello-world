<template>
    <div class="map">
        <baidu-map
            ak="your code"
            class="map-box" 
            :center="center" 
            :zoom="zoom"
            :scroll-wheel-zoom="true"
            :mapStyle="{styleJson:myStyle}"
            @ready="initMap"
        >
            <bm-boundary :name="cityList[0]" :strokeWeight="2" strokeColor="white" fillColor="transparent"></bm-boundary>
            <bm-boundary name="绍兴市" :strokeWeight="2" strokeColor="yellowgreen" fillColor="transparent"></bm-boundary>
            <bm-marker-clusterer :averageCenter="true">
                <bm-marker v-for="(item,index) in eqPoints" :key="index" :icon="{url:'/static/img/marker-icon.png',size:{width:32,height:32}}" :position="{lng: item.longitude, lat: item.latitude}"></bm-marker>
            </bm-marker-clusterer>
        </baidu-map>
    </div>
</template>
<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmBoundary from 'vue-baidu-map/components/others/Boundary.vue'
import BmMarkerClusterer from 'vue-baidu-map/components/extra/MarkerClusterer.vue'
import BmMarker from 'vue-baidu-map/components/overlays/Marker.vue'
import {myStyle} from './mapStyle.js'
export default {
    components:{
        BaiduMap,
        BmBoundary,
        BmMarkerClusterer,
        BmMarker
    },
    data () {
        return {
            myStyle:myStyle,
            center:{lng:0,lat:0},
            zoom:3,
            // cityList:['安徽合肥蜀山区','安徽合肥瑶海区','安徽合肥庐阳区','安徽合肥包河区','安徽合肥巢湖市','安徽合肥长丰县','安徽合肥肥东县','安徽合肥肥西县','安徽合肥庐江县'],
            cityList:['浙江绍兴越城区','浙江绍兴柯桥区','浙江绍兴上虞区','浙江绍兴新昌县','浙江绍兴嵊州市','浙江绍兴诸暨市'],
            eqPoints:[
                {longitude:120.5884330000,latitude:29.9953100000},
                {longitude:120.4515130000,latitude:30.0790030000},
                {longitude:120.8745070000,latitude:30.0382420000},
                {longitude:120.9105740000,latitude:29.5055400000},
                {longitude:120.8374340000,latitude:29.5673280000},
                {longitude:120.2534100000,latitude:29.7149350000},
            ]
        }
    },
    methods:{
        initMap({Bmap,map}){
            this.center.lng=120.588433;
            this.center.lat=29.799995;
            this.zoom = 10;
        },
    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
.map-box {
  width: 100%;
  height: 300px;
}
</style>
