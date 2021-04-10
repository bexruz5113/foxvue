<template>
  <div>
    <b-container class="mx-auto d-md-block d-none">
      <b-row>
        <b-col cols="12">
          <b class="strong">Clients <b class="text-primary"> Testimonial</b></b>
          <p class="m-auto pt-3 font-weight-bolder">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit assumenda
            natus eum distinctio similique explicabo commodi veritatis? Nemo
            minima non aspernatur laudantium iste.
          </p>
        </b-col>
      </b-row>
    </b-container>
    <b-container  class="mx-auto d-md-block d-none">
    <b-row>
      <b-col cols="12" lg="12">
    <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="i in 6" :key="i">
    <div  class="p-5 bg-primary text-white"><p class="clientText w-100">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci maiores sed labore rem alias accusamus distinctio, eius cum numquam! Expedita.</p></div>
    <div  class="p-3 text-white d-flex">
    <div class="bgImage"></div>
    <div class="ml-4"><div><h4 class="text-primary">Mohamed Kamel</h4></div>
    <div class="text-dark"><b class="w-100 font-weight-light text-left">CEO - Company Name</b></div>
    </div>
    </div>   
    </swiper-slide>
    
    </swiper> 
      
      
      </b-col>
      </b-row
    ></b-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-loop-group',
    title: 'Loop mode with multiple slides per group',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 2,
          loop: true,
          loopFillGroupWithBlank: true,
         
        }
      }
    }
  }
  </script>

<style lang="scss" scoped>
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.strong {
  font-size: 58px;
  color: black;
}
.swiper{
  width: 100%;
  margin-bottom: 60px;
}
.swiper-slide{
  width: 40%;
}
@media screen and (max-width: 768px){
  .swiper-slide{
  width: 70%  !important;}
}
@media screen and (max-width: 572px){
  .swiper-slide{
  width: 85%  !important;}
  .strong{
    font-size: 28px;
  }
}


.bgImage{
width: 60px;
height: 60px;
border-radius: 50%;
background-image: url('../assets/client.jpg');
background-size: cover;
border: 3px solid #21bbd3;
background-position: center center;
}


</style>