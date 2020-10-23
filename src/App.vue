<template>
  <div id="app">
    <div class="side-bar">
      <router-link
        tag="div"
        replace
        :to="{ path: item.path }"
        v-for="(item, index) in navs"
        :key="index"
        :class="{ active: item.path === $route.path }"
        class="side-item"
      >
        {{ item.title }}
      </router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import routes from "./routes";
export default {
  name: "App",
  data() {
    return {
      navs: [],
    };
  },
  created() {
    this.navs = routes;
  },
  components: {},
  methods: {},
};
</script>
<style lang="scss">
body,
html {
  width: 100%;
  height: 100%;
}
</style>
<style lang="scss" scoped>
#app {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  .side-bar {
    flex: 0 0 200px;
    width: 200px;
    height: 100%;
    border-right: 1px solid #e8e8e8;
    .side-item {
      height: 30px;
      line-height: 30px;
      padding: 10px 20px;
      border-bottom: 1px solid #e8e8e8;
      &:hover,
      &.active {
        color: #fff;
        background-color: #1aa3ff;
      }
    }
  }
  .content {
    flex: 1 1 auto;
    width: auto;
    text-align: center;
  }
}
</style>
>
