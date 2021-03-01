<template>
  <div id="sectionFeature">
    <b-container fluid="100%" class="bgPrimary" id="feature">
      <b-container>
        <b-row>
          <b-col cols="12">
            <b class="strong"
              >Other <b class="text-white"> Awesome </b>Features</b
            >
            <p class="m-auto pt-3 font-weight-bolder">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit assumenda
              natus eum distinctio similique explicabo commodi veritatis? Nemo
              minima non aspernatur laudantium iste.
            </p>
          </b-col>
        </b-row>
      </b-container>

      <div class="example-3d">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="(base, index) in bases" v-bind:key="index">
            <div class="d-block">
              <div class="mb-3">
                <img v-bind:src="require(`@/assets/${base.picture}.png`)" />
              </div>
              <div class="pb-2">
                <h2 class="text-primary">{{ base.title }}</h2>
              </div>
              <div>
                <p class="m-auto text-center font-weight-light">
                  {{ base.text }}
                </p>
              </div>
            </div>
          </swiper-slide>
             <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </b-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-3d-coverflow",
  title: "3D Coverflow effect",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }, pagination: {
            el: '.swiper-pagination'
          }
      },
      bases: [
        {
          picture: "home",
          title: "lkdcm",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eos amet vel voluptatibus incidunt.",
        },
        {
          picture: "cloud",
          title: "scdscd",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eos amet vel voluptatibus incidunt.",
        },
        {
          picture: "database",
          title: "scdscd",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eos amet vel voluptatibus incidunt.",
        },
        {
          picture: "settings",
          title: "scdscd",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eos amet vel voluptatibus incidunt.",
        },
        {
          picture: "building",
          title: "scdscd",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eos amet vel voluptatibus incidunt.",
        },
        {
          picture: "shuttle",
          title: "scdscd",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eos amet vel voluptatibus incidunt.",
        },
        {
          picture: "present",
          title: "scdscd",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eos amet vel voluptatibus incidunt.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.bgPrimary {
  padding: 50px 0;
  background-color: #21bbd3;
  color: black;
}
.strong {
  font-size: 58px;
}
.example-3d {
  width: 100%;
  height: 400px;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper {
  height: 100%;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
      width: 300px;
      height: 300px;
    border-radius: 15px;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    background-color: white;
    background-position: center;
    background-size: cover;
  }
}
@media screen and (max-width: 768px) {
.strong{
font-size: 40px;
}
@media screen and (max-width: 572px){
  .strong{
    font-size: 28px;
  }
}}
</style>