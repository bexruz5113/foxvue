<template>
  <div id="app">
    <Navbar />
    <div class="positionAbsolute1">
      <img class="settingImg" src="./assets/settings1.png" alt="" />
    </div>
    <router-view></router-view>
    <section-footer />
  </div>
</template> 
<script>
import Navbar from "./components/navbar.vue";
import SectionFooter from "./components/sectionFooter.vue";

export default {
  components: {
    Navbar,
    SectionFooter,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.positionAbsolute1 {
  position: fixed;
  left: 0;
  top: 85px;
  padding: 10px;
  background-color: #21bbd3;
  z-index: 9999999;
}
.settingImg {
  animation: qwe 4s  infinite linear;
}
@keyframes qwe {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
