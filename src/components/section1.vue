<template>
  <div class="container">
    <div class="boxs">
      <!-- <h1>{{ title }}</h1> -->
      <div class="box" v-for="(base, index) in bases" v-bind:key="index" 
          :data-aos="`${base.aos}`"
          data-aos-delay="300"
          data-aos-duration="2000">
        
        
          <p class="bottomLine"></p>
          <span class="spanAbsolute">
            <img
              v-bind:src="require(`@/assets/${base.picture}.png`)"
              alt="rasm"
          /></span>
          <h2>{{ base.name }}</h2>
          <p>{{ base.text }}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: [String, Number, Boolean, Array, Object],
      default: "My name is Behruz",
    },
    bases: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.container {
  max-width: 100%;
  padding: 50px;
  margin: 0 auto;
}
.boxs {
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 30%;
  padding: 20px;
  margin: 10px;
  background-color: #21bbd3;
  color: white;
  position: relative;

  h2 {
    margin-top: 20px;
  }

  p {
    width: 100%;
    margin-top: 15px;
  }
}
.bottomLine {
  width: 100%;
  height: 4px;
  margin: 0 auto;
  background-color: yellow;
  position: absolute;
  left: 0;
  bottom: -4px;
  transform: scale(0);
  transition: all 0.5s ease;
}
.box:hover .bottomLine {
  transform: scale(1);
}
.box:hover .spanAbsolute {
  border: 4px solid yellow;
  transform: scale(1.05);
}

.spanAbsolute {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border: 4px solid white;
  border-radius: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  img {
    width: 50%;
  }
}

@media screen and (max-width: 998px) {
  .boxs {
    display: block;
  }
  .box {
    width: 90%;
    margin: 50px auto;

    .spanAbsolute {
      margin: 0 auto;
    }
  }
}
</style>