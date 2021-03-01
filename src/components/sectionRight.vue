<template>
    <div>
<div class="px-2 mt-4">
            <div class="bg-light w-100 p-4">
              <div class="input-bottom">
                <input class="input-search" type="text" placeholder="Search" />
              </div>
            </div>

            <div class="bg-light w-100 p-4 my-4">
              <div>
                <h4 class="text-left">Follow Me</h4>
                <p class="title-bottom"></p>
                <div class="d-flex judtify-content-between flex-wrap">
                  <div class="bg-info p-md-2 p-3 m-1">
                    <a href="#"><img src="../assets/facebook (1).png" /></a>
                  </div>
                  <div class="bg-danger p-md-2 p-3 m-1">
                    <a href="#"><img src="../assets/instagram (1).png" /></a>
                  </div>
                  <div class="bg-primary p-md-2 p-3 m-1">
                    <a href="#"><img src="../assets/twitter (1).png" /></a>
                  </div>
                  <div class="bg-info p-md-2 p-3 m-1">
                    <a href="#"><img src="../assets/linkedin (1).png" /></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-light w-100 p-4 my-4">
              <div>
                <h4 class="text-left">Categories</h4>
                <p class="title-bottom"></p>
               <div class="d-block text-left">
                <div class="py-1" v-for="(link,index) in links" :key="index"><a href="#" class="text-dark text-decoration-none" >
                {{link.text}}
                </a></div><br>
                </div>
              </div>
            </div>

            <div class="bg-light w-100 p-4 my-4">
              <div>
                <h4 class="text-left">Recent Post</h4>
                <p class="title-bottom"></p>
                <div class="d-flex my-4" v-for="i in 3" :key="i">
                <div><img class="img-fluid" width="60" src="../assets/recent-1.jpg" alt=""></div>
                <div class="ml-2 d-block">
                <div><small class="font-weight-bold pb-5">Exploring Latest Trends.</small></div>
                <div class="text-left"><img src="../assets/alarm-clock.png">
                <small>Feb 26, 2018</small></div>
                </div>
                </div>
                </div>
            </div>

           <div class="bg-light w-100 p-4 my-4">
              <div>
                <h4 class="text-left">Tegs</h4>
                <p class="title-bottom"></p>
               <div class="d-flex flex-wrap text-left">
                <div class="p-2" v-for="(link,index) in links" :key="index"><a href="#" class="text-dark text-decoration-none" >
                {{link.text}}
                </a></div><br>
                </div>
              </div>
            </div>

          </div>
    </div>
</template>

<script>
    export default {
       components:{},
       data() {
    return {
        links:[
            {text:'Design'},
            {text:'Software'},
            {text:'Business'},
            {text:'Development'},
            {text:'Sport'},
            {text:'Lifestory'},
            {text:'Uncategorized'}
            
        ],
        }
    } 
}
</script>

<style lang="scss" scoped>
html {
  scroll-behavior: smooth;
}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.input-bottom {
  border-bottom: 3px solid #21bbd3;
}
.input-search {
  width: 100%;
  padding: 15px 20px;
  outline: none;
  border: none;
  background-color: #f8f9fa;
}
.title-bottom {
  width: 70px;
  height: 3px;
  background-color: #21bbd3;
}
</style>