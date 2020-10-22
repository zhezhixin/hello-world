<template>
    <div style="margin:40px auto;text-align:center;">
      <h3>动态组件保存状态</h3>
      <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button',{active:currentTab === tab}]"
      @click="currentTab = tab"
      >
      {{tab}}
      </button>
      <keep-alive>
        <component :is="currentTabComponent" class="tab"></component>
      </keep-alive>
      
    </div>
</template>

<script>
//https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%9C%A8%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-keep-alive
import TabHome from '@/others/TabHome.vue'
import TabPosts2 from '@/others/TabPosts2.vue'
import TabArchive from '@/others/TabArchive.vue'

export default {
  name: 'keepalivecomponent',
  components: {
    TabHome,
    TabPosts2,
    TabArchive
  },
  data () {
      return {
        currentTab:'Home',
        tabs:["Home", "Posts2", "Archive"]
      }
  },
  computed: {
      currentTabComponent () {
          return "tab-"+this.currentTab.toLowerCase();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }
  .tab-button:hover {
    background: #e0e0e0;
  }
  .tab-button.active {
    background: #e0e0e0;
  }
  .tab {
    border: 1px solid #ccc;
    padding: 10px;
  }

</style>
