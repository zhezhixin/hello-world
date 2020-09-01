<template>
    <div style="margin:40px auto;text-align:center;">
      <h3>动态组件</h3>
      <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button',{active:currentTab === tab}]"
      @click="currentTab = tab"
      >
      {{tab}}
      </button>

      <component :is="currentTabComponent" class="tab"></component>
    </div>
</template>

<script>
//https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87%E6%8F%92%E6%A7%BD%E5%88%86%E5%8F%91%E5%86%85%E5%AE%B9
import TabHome from '@/others/TabHome.vue'
import TabPosts from '@/others/TabPosts.vue'
import TabArchive from '@/others/TabArchive.vue'

export default {
  name: 'el-ui',
  components: {
    TabHome,
    TabPosts,
    TabArchive
  },
  data () {
      return {
        currentTab:'Home',
        tabs:["Home", "Posts", "Archive"]
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
