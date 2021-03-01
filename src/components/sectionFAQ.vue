<template>
  <div id="sectionFAQ">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b class="strong"> Common <b class="text-primary">FAQ</b></b>
          <p class="m-auto pt-3 pb-5 font-weight-bolder">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit assumenda
            natus eum distinctio similique explicabo commodi veritatis? Nemo
            minima non aspernatur laudantium iste.
          </p>
        </b-col>
        <b-col cols="12" md="7">
          <div class="accordion mt-5 pt-5">
            <b-card no-body class="mb-1 border-0">
              <b-card-header
                header-tag="header"
                class="bg-white p-0 border-0 my-1 px-1"
                role="tab"
              >
                <b-button
                  block
                  v-b-toggle.accordion-1
                  variant="primary"
                  class="text-left p-3 rounded-pill"
                  >What is fox
                </b-button>
              </b-card-header>
              <b-collapse
                id="accordion-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text class="w-100">{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1 border-0">
              <b-card-header header-tag="header" class="bg-white p-0 border-0 my-1 px-1" role="tab">
                <b-button
                  block
                  v-b-toggle.accordion-2
                  variant="primary"
                  class="text-left p-3 rounded-pill"
                  >How to used The App</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text class="w-100">{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1 border-0">
              <b-card-header header-tag="header" class="bg-white p-0 border-0 my-1 px-1" role="tab">
                <b-button
                  block
                  v-b-toggle.accordion-3
                  variant="primary"
                  class="text-left p-3 rounded-pill"
                  >How to connect with the support</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text class="w-100">{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
        <b-col cols="12" md="5"
          ><img class="imageSize" src="../assets/mobile-1.png" alt=""
        /></b-col>
      </b-row>
    </b-container>
    <b-container fluid="100%" class="bgColor py-1 my-3">
    <b-container>
    <b-row>
    <b-col cols="12">
    <swiper class="swiper" :options="swiperOption">
    <swiper-slide><img src="../assets/logo-1.png" width="100" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/logo-2.png" width="100" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/logo-3.png" width="100" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/logo-4.png" width="100" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/logo-5.png" width="100" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/logo-6.png" width="100" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/logo-1.png" width="100" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/logo-2.png" width="100" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/logo-5.png" width="100" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/logo-3.png" width="100" alt=""></swiper-slide>
  </swiper>
    </b-col>
    </b-row>
    </b-container>
    </b-container>
  </div>
</template>

<script>
 import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
export default {
    name: 'swiper-example-responsive-breakpoints',
    title: 'Responsive breakpoints',
    components: {
      Swiper,
      SwiperSlide
    },
  data() {
    return {
      boxClick: true,
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
     swiperOption: {
          slidesPerView: 6,
          spaceBetween: 50,
        
          breakpoints: {
            1024: {
              slidesPerView: 6,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 3,
              spaceBetween: 10
            }
          }
        }
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
.strong {
  color: black;
  font-size: 58px;
}
p {color: black;}
.imageSize {
  width: 100%;
  max-width: 450px;
}
.boxClick {color: black;}
.bgColor{
    background-color: #21bbd3;
}
@media screen and (max-width: 572px){
  .strong{
    font-size: 28px;
  }
}


</style>