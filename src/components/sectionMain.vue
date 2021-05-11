<template>
  <div>
    <!-- <b-container> 
      <b-row>
        <b-col col="4">
          <p class="mt-5 pl-4">adsdasdasdas</p>
          <a class="text-decoration-none text-dark" href="#">link</a>
        </b-col>
        <b-col col="8">
          adsdasdasdas
        </b-col>
      </b-row>
    </b-container> -->
<b-container fluid>
<kinesis-container>
    <b-container>
      <b-row class="d-block">
        <b-col cols="12" class="my-lg-5 my-2 pb-lg-5 pb-0">
        <b class="strong">Mean <b class="text-primary">Features</b></b>
            <p class="w-100">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            eligendi autem veritatis necessitatibus sint ullam voluptate
            blanditiis officia laudantium dicta quo facilis, voluptatem deserunt
            porro provident asperiores sit accusantium alias.
          </p>
        </b-col>
      </b-row>
      <b-col cols="12" class="d-lg-flex d-block">
        <b-row>
          <b-col cols="12" lg="3">
            <div class="d-block py-3">
              <div class="pt-4 pb-5 ml-lg-5"
              data-aos="zoom-in"  
              data-aos-delay="300" 
              data-aos-duration="3000">
                <div class="d-flex justify-content-lg-end justify-content-center">
                  <div><h6 class="font-weight-bold mt-2">Lorem, ipsum</h6></div>
                  <div><img src="../assets/pen.png" width="40px" alt="" /></div>
                </div>
                <p class="w-100 text-lg-justify text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div class="pt-4 pb-5 mr-lg-5"
              data-aos="zoom-in"  
      data-aos-delay="300" 
      data-aos-duration="3000">
                <div class="d-flex justify-content-lg-end justify-content-center">
                  <div><h6 class="font-weight-bold mt-2">Lorem, ipsum</h6></div>
                  <div><img src="../assets/pen.png" width="40px" alt="" /></div>
                </div>
                <p class="w-100  text-lg-justify text-center">
                  Lorem ipsum dolor sit amet lorem consectetur adipisicing elit.
                </p>
              </div>
              <div class="pt-4 pb-5 ml-lg-5"
              data-aos="zoom-in"  
      data-aos-delay="300" 
      data-aos-duration="3000">
                <div class="d-flex justify-content-lg-end justify-content-center">
                  <div><h6 class="font-weight-bold mt-2">Lorem, ipsum</h6></div>
                  <div><img src="../assets/pen.png" width="40px" alt="" /></div>
                </div>
                <p class="w-100 text-lg-justify text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </b-col>

          <b-col cols="12" lg="6" class="position-relative">
            <kinesis-element :strength="40">
          <div
          data-aos="zoom-in"  
          data-aos-delay="250" 
          data-aos-duration="3000"
          >
            <div class="circle__spin ml-lg-0">
              <svg class="position-relative">
                <circle cx="50%" cy="50%" r="280px"></circle>
              </svg>
            </div>
               <img class="ImgAbsolute m-auto" src="../assets/mobile-3.png" alt="" />
          </div>
            </kinesis-element>
          </b-col>

          <b-col cols="12" lg="3" class="mt-lg-0 mt-5">
            <div class="d-block py-3">
              <div class="pt-4 pb-5 mr-lg-5" 
              data-aos="zoom-in"  
      data-aos-delay="200" 
      data-aos-duration="3000">
                <div class="d-flex justify-content-lg-end justify-content-center">
                  <div><h6 class="font-weight-bold mt-2">Lorem, ipsum</h6></div>
                  <div><img src="../assets/pen.png" width="40px" alt="" /></div>
                </div>
                <p class="w-100 text-lg-justify text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div class="pt-4 pb-5 ml-lg-5"
              data-aos="zoom-in"  
      data-aos-delay="250" 
      data-aos-duration="3000">
                <div class="d-flex justify-content-lg-end justify-content-center">
                  <div><h6 class="font-weight-bold mt-2">Lorem, ipsum</h6></div>
                  <div><img src="../assets/pen.png" width="40px" alt="" /></div>
                </div>
                <p class="w-100 text-lg-justify text-center">
                  Lorem ipsum dolor sit amet lorem consectetur adipisicing elit.
                </p>
              </div>
              <div class="pt-4 pb-5 mr-lg-5"
              data-aos="zoom-in"  
      data-aos-delay="300" 
      data-aos-duration="3000">
                <div class="d-flex justify-content-lg-end justify-content-center">
                  <div><h6 class="font-weight-bold mt-2">Lorem, ipsum</h6></div>
                  <div><img src="../assets/pen.png" width="40px" alt="" /></div>
                </div>
                <p class="w-100 text-lg-justify text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-container>
</kinesis-container>
</b-container>
</div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.circle {
  margin: 30px 0;
  height: 120px;
  width: 120px;
}
.circle__spin {
  left: -20px;
  top: -20px;
  width: 600px;
  height: 600px;
}
.circle__spin svg {
  width: 100%;
  height: 100%;
  animation: spin 80s linear infinite;
}

.circle__spin circle {
  stroke-width: 4;
  stroke-dasharray: 10;
  fill: none;
  stroke: aqua;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
.ImgAbsolute {
  position: absolute;
  top: -60px;
  left: 75px;
}
.strong{
font-size: 58px;}
@media screen and (max-width: 992px) {
.circle__spin{
  width: 350px;
  height: 450px;
}
svg{
  display: none;
}
.ImgAbsolute {
  width: 350px;
  max-width:100%;
position:absolute;
  top: -40px;
  left: 150px;
}}
@media screen and (max-width: 768px) {
  .circle__spin{
  width: 250px;
  height: 400px;
}
.ImgAbsolute {
position:absolute;
  top: -40px;
  left: 20px;
}}
@media screen and (max-width: 572px){
  .strong{
    font-size: 28px;
  }
}

</style>