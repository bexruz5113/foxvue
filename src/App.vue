<template>
  <div id="app">
    <div :class="{ rocketUp: comin, rocketDown: leavin }" @click="scrollPos()">
      <svg
        id="Capa_1"
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 490.52 256.01"
      >
        <path
          class="cls-1"
          d="M487.41,355.05,252.74,120.38a10.67,10.67,0,0,0-15.08,0L3,355.05a10.67,10.67,0,0,0,15.09,15.08L245.19,143,472.31,370.15a10.66,10.66,0,0,0,15.08-15.08Z"
          transform="translate(0 -117.26)"
        />
        <path
          d="M479.86,373.27a10.68,10.68,0,0,1-7.55-3.12L245.19,143,18.08,370.15A10.67,10.67,0,0,1,3,355.07L237.66,120.4a10.67,10.67,0,0,1,15.08,0L487.41,355.07a10.67,10.67,0,0,1-7.55,18.2Z"
          transform="translate(0 -117.26)"
        />
      </svg>
    </div>
    <div class="positionAbsolute1">
    <kinesis-container>
     <kinesis-element :strength="10">
       <img class="settingImg" src="./assets/settings1.png" />
       </kinesis-element>
    </kinesis-container>
    </div>
    <router-view></router-view>
  </div>
</template> 
<script>

export default {
  components: {
  },
  data() {
    return {
      topPoint: 0,
    };
  },
  computed: {
    comin() {
      return this.topPoint > 250 ? true : false;
    },
    leavin() {
      return this.topPoint > 250 ? false : true;
    },
  },
  methods: {
    scrollPos() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.topPoint = window.scrollY;
    });
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
  animation: qwe 4s infinite linear;
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
.rocketUp {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #21bbd3;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  animation: comingUp 0.5s linear;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    box-shadow: 1px 0px 10px 0px #1aa4b9;
  }
  svg {
    width: 100%;
    max-width: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    path {
      fill: white;
    }
  }
}
.rocketDown {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #21bbd3;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  animation: comingDown 0.5s linear forwards;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    box-shadow: 1px 0px 20px 0px #1aa4b9;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    path {
      fill: white;
    }
  }
}
@keyframes comingUp {
  from {
    bottom: -50px;
    opacity: 0;
  }
  to {
    visibility: visible;
    bottom: 20px;
    opacity: 1;
  }
}
@keyframes comingDown {
  from {
    bottom: 20px;
    opacity: 1;
  }
  to {
    visibility: hidden;
    bottom: -50px;
    opacity: 0;
  }
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #21bbd3;
}

::-webkit-scrollbar-thumb {
  background: #fff;
  height: 60px;
  border-radius: 15px;
}
::-webkit-scrollbar-thumb:hover {
  background: #218394;
}
</style>
