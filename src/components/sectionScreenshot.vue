<template>
  <div>
    <b-container fluid="100%" class="bgImage">
      <b-row>
        <div>
          <b> Awesome</b> <b class="text-primary"> Screenshots </b>
          <p class="m-auto py-3 font-weight-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            culpa perferendis odio exercitationem mollitia dicta facilis
            voluptatem, excepturi iste? Veniam corporis cupiditate eligendi id,
            commodi pariatur atque perferendis voluptates magnam.
          </p>
        </div>
        <b-col cols="11" class="m-auto py-4 px-0 mt-3">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="i of 10" :key="i">
              <img src="../assets/mobile-5.png" />
            </swiper-slide>
          </swiper>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-centered-slides",
  title: "Centered slides",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
      },
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
.bgImage {
  padding: 40px 0;
  background-attachment: fixed;
  background-image: url("../assets/gray-bg.jpg");
  background-size: cover;
}
p {
  color: black;
}
b {
  font-size: 58px;
  margin: 0 auto;
  color: black;
}
.swiper-slide {
  width: 300px;
  img {
    width: 300px;
  }
}
@media screen and (max-width: 992px) {
  .swiper-slide {
    width: 300px;
    margin: 0 20px;
    img {
      width: 270px;
    }
  }
}

@media screen and (max-width: 768px) {
  b {
    font-size: 40px;
  }
  p {
    font-weight: lighter;
  }
  .swiper-slide {
    width: 250px;
    margin: 0 20px;

    img {
      width: 230px;
    }
  }
}

@media screen and (max-width: px) {
  b {
    font-size: 40px;
  }
  p {
    font-weight: lighter;
  }
  .swiper-slide {
    width: 250px;
    margin: 0 20px;

    img {
      width: 230px;
    }
  }
}
</style>