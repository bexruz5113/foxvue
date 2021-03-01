<template>
    <div>
        <b-container>
        <b-row>
       <b-col cols="12">
            <b class="strong"> App <b class="text-primary">Price</b></b>
            <p class="m-auto pt-3 pb-5  font-weight-bolder">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit assumenda
              natus eum distinctio similique explicabo commodi veritatis? 
            </p>    
  </b-col>
  <b-col cols="12">
    <swiper class="swiper" :options="swiperOption">
    <swiper-slide class="d-md-flex d-block" v-for="(base,index) in bases" :key="index">
    <b-col cols="12" md="6"><img class="imageSize" src="../assets/news-1.jpg"></b-col>
    <b-col cols="12" md="6">
    <h3 class="text-left font-weight-bold my-3">Inspired Design Decisions</h3>
   <p class="text-justify w-100"> {{base.text}}</p>
   <div class="d-flex">
     <div class="d-flex mr-4">
     <div><img src="../assets/user.png"></div>
     <div><p class="w-100 text-secondary px-2">By Admin</p></div>
     </div>
     <div class="d-flex">
     <div><img src="../assets/alarm-clock.png"></div>
     <div><p class="w-100 text-secondary px-2">Feb 21,2021</p></div>
     </div>
   </div>
   <button class="button float-left" type="button">READ MORE</button>
    </b-col>
    
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  
  </b-col>
        </b-row>
        </b-container>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-space-between',
    title: 'Space between slides',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
          bases:[{
              picture:"news-1",
              text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quidem vel voluptas aliquam quo sunt inventore distinctio officia, delectus dicta, officiis ipsa eligendi doloremque eveniet accusamus hic rem ipsam? Quas.Vero quidem vel voluptas aliquam quo sunt inventore distinctio officia',
          },
          {
              picture:"news-1",
              text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quidem vel voluptas aliquam quo sunt inventore distinctio officia, delectus dicta, officiis ipsa eligendi doloremque eveniet accusamus hic rem ipsam? Quas.',
          },
          {
              picture:"news-1",
              text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quidem vel voluptas aliquam quo sunt inventore distinctio officia, delectus dicta, officiis ipsa eligendi doloremque eveniet accusamus hic rem ipsam? Quas.',
          }],


        swiperOption: {
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
html, body{
margin: 0;
padding: 0;
box-sizing: border-box;
}
.strong{
font-size: 58px;
color: black;
}
p{
color: black;}
.imageSize {
  width: 100%;
  max-width: 500px;
}
.swiper{
position: relative;}
.swiper-pagination{
position: absolute;
bottom: -50px;
left: 50%;
background-color: red;
}
.button {
  width: 170px;
  padding: 15px;
  background-color: #21bbd3;
  border: 1px solid white;
  outline: none;
  color: white;
  border-radius: 25px;
  transition: all 0.5s ease;
}
.button:hover {
  background-color: gold;
}
@media screen and (max-width: 568px) {
h3{
font-size: 18px;}
}

</style>