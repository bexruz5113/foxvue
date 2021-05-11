<template>
    <div>
<b-container fluid="100%" class="bgColor">
  <kinesis-container>
<b-container>
<b-row>
<b-col cols="12" md="6" class="mt-5 pt-5">
<h2>Download our free trial App</h2>
<p class="w-100 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae sapiente quos facere dicta debitis fugiat asperiores modi pariatur hic quod commodi, dolore sed velit quidem sit consequuntur. Temporibus, vel?</p>
<b-col cols="12" class="d-flex justify-content-center">
<b-row>
<b-col cols="12" sm="6">
<button class="downloadButton d-flex justify-content-around">
<div><img src="../assets/apple.png" width="40" alt=""></div> 
<div><small class="float-left">Git it on</small><br> <h6>APP STORE</h6></div>
</button></b-col>
<b-col cols="12" sm="6">
<button class="downloadButton d-flex justify-content-around">
<div><img src="../assets/play-store.png" width="40" alt=""></div>
<div><small class="float-left">Git it on</small><br><h6>GOOGLE PLAY</h6></div>
</button></b-col>
</b-row>
</b-col>

</b-col>
<b-col cols="12" md="6">
  <kinesis-element :strength="40">
  <img class="imageSize" src="../assets/mobile-2.png" alt="">
  </kinesis-element>
  </b-col>
</b-row>
</b-container>
</kinesis-container>
</b-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
html, body{
margin: 0;
padding: 0;
box-sizing: border-box;}
.bgColor{
background-image: url('../assets/gray-bg.jpg');
background-size: cover;
background-position:center center;
background-attachment: fixed;
}
.imageSize {
  width: 100%;
  max-width: 350px;
}
.downloadButton {
  width: 200px;
  margin: 5px auto;
  padding: 10px;
  background-color: #21bbd3;
  border: 1px solid white;
  outline: none;
  color: white;
  border-radius: 40px;
  transition: all 0.5s ease;
}
.downloadButton:hover {
  background-color: gold;
}

h6{
font-size: 15px;
margin-bottom: 0;}

</style>