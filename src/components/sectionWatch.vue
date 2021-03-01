<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12">
          <b>Watch <b class="text-primary">Video</b></b>
          <p class="m-auto font-weight-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas
            accusamus sint magni temporibus numquam rem non repellendus aliquam
            adipisci.
          </p>
        </b-col>
        <b-col cols="12">
          <div class="positionRelative">
            <img src="../assets/friend.jpg" alt="" />
          </div>
          <div class="bgImage d-flex justify-content-center align-items-center">
            <div class="play position-relative"></div><a class="positionAbsolute" href="https://youtu.be/AoV-6nVyyBY"> <img src="../assets/play-button.png" alt=""></a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
b {
  font-size: 58px;
  color: black;
}
p {
  padding: 25px 0 40px 0;
  color: black;
}

.positionRelative {
  position: relative;
  img {
    width: 100%;
    max-width: 600px;
    height: 280px;
  }
}
.bgImage {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  height: 300px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url("../assets/mobile-4-4.png");
  background-size: cover;
}
.play{
width: 70px;
height: 70px;
animation: scale 4s infinite;
display: flex;
justify-content: center;
align-items: center;
}
.positionAbsolute{
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

}

@keyframes scale {
0%{
transform: scale(0.9); /*Уменьшение элемента*/
opacity:0.5; /*Уровень прозрачности*/
border:5px solid rgba(255, 255, 255, 0.979); /*Граница (задаём толщину и цвет)*/
box-shadow:0px 0px 0px  3px #E2E2E2;
border-radius: 50%; /*Тень (задаём размах и цвет)*/
}
50%{
transform: scale(1.3);
opacity:1;
border:10px solid rgba(255, 255, 255, 0.753);
box-shadow:0px 0px 0px  10px rgba(255, 255, 255, 0.553);
border-radius: 50%; 
}
100%{
transform: scale(0.9);
opacity:0.5;
border:5px solid rgba(255, 255, 255, 0.466);
box-shadow:0px 0px 0px  3px rgba(255, 255, 255, 0.266);
border-radius: 50%;
}
}
@media screen and (max-width: 768px) {
 .positionRelative {
  position: relative;
  width: 600px;
  height: 600px;
  img {
    width: 100%;
    margin-right: 15px;
    max-width: 250px;
    height: 530px;
  }
}
  .bgImage{  
  width: 100%;
  max-width: 600px;
  height: 270px;
  margin-top: 130px;
  margin-left:30px;
  transform: rotate(90deg);
}
.play{
width: 70px;
height: 70px;
animation: scale 4s infinite;
display: flex;
justify-content: center;
align-items: center;
transform: rotate(90deg);
}
.positionAbsolute{
position: absolute;
top: 39%;
left:44%;
transform: translate(50%, 50%);
transform: rotate(270deg);

}}
@media screen and (max-width: 576px) {
 b{
 font-size: 35px;}
 .positionRelative {
  position: relative;
  width: 300px;
  height: 400px;

  img {
    width: 100%;
    max-width: 190px;
    height: 380px;
    margin-left: 120px;
    margin-top: 30px;
  }
}
  .bgImage{ 
  width: 100%;
  max-width: 400px;
  height: 200px;
  margin: 0 auto;
  margin-top: 120px;
  margin-left:30px;
  transform: rotate(90deg);
}
 
 .play{
width: 70px;
height: 70px;
animation: scale 4s infinite;
display: flex;
justify-content: center;
align-items: center;
transform: rotate(90deg);
}
.positionAbsolute{
position: absolute;
top: 35%;
left:42%;
transform: translate(50%, 50%);
transform: rotate(270deg);

}}
@media screen and (max-width: 476px) {
 b{
 font-size: 30px;
 }
 .positionRelative {
  position: relative;
  width: 180px;
  height: 350px;

  img {
    width: 100%;
    max-width: 190px;
    height: 380px;
    margin-left: 110px;
    margin-top: 12px;
  }
}
  .bgImage{ 
  width: 100%;
  max-width: 400px;
  height:200px;
  margin: 0 auto;
  margin-top: 100px;
  margin-left:20px;
  transform: rotate(90deg);
}
 
 .play{
width: 70px;
height: 70px;
animation: scale 4s infinite;
display: flex;
justify-content: center;
align-items: center;
transform: rotate(90deg);
}
.positionAbsolute{
position: absolute;
top: 35%;
left:42%;
transform: translate(50%, 50%);
transform: rotate(270deg);

}}
@media screen and (max-width: 460px) {
 b{
 font-size: 30px;
 }
 .positionRelative {
  position: relative;
  width: 170px;
  height: 320px;

  img {
    width: 100%;
    max-width: 170px;
    height: 340px;
    margin-left: 100px;
    margin-top: 15px;
  }
}
  .bgImage{ 
  width: 100%;
  max-width: 350px;
  height:175px;
  margin-top: 100px;
  margin-left:25px;
  transform: rotate(90deg);
}
 .play{
width: 70px;
height: 70px;
animation: scale 4s infinite;
display: flex;
justify-content: center;
align-items: center;
transform: rotate(90deg);
}
.positionAbsolute{
position: absolute;
top: 32%;
left:41%;
transform: translate(50%, 50%);
transform: rotate(270deg);

}}
@media screen and (max-width: 400px) {

 .positionRelative {
  position: relative;
  width: 170px;
  height: 320px;

  img {
    width: 100%;
    max-width: 160px;
    height: 335px;
    margin-left: 110px;
    margin-top: 5px;
  }
}
  .bgImage{ 
  width: 100%;
  max-width: 350px;
  height:175px;
  margin-top: 90px;
  margin-left:30px;
  transform: rotate(90deg);
}
 
 .play{
width: 70px;
height: 70px;
animation: scale 4s infinite;
display: flex;
justify-content: center;
align-items: center;
transform: rotate(90deg);
}
.positionAbsolute{
position: absolute;
top: 32%;
left:41%;
transform: translate(50%, 50%);
transform: rotate(270deg);

}}
@media screen and (max-width: 380px) {

 .positionRelative {
  position: relative;
  width: 160px;
  height: 300px;

  img {
    width: 100%;
    max-width: 155px;
    height: 320px;
    margin-left: 95px;
    margin-top: -5px;
  }
}
  .bgImage{ 
  width: 100%;
  max-width: 350px;
  height:165px;
  margin-top: 70px;
  margin-left:25px;
  transform: rotate(90deg);
}
 
 .play{
width: 70px;
height: 70px;
animation: scale 4s infinite;
display: flex;
justify-content: center;
align-items: center;
transform: rotate(90deg);
}
.positionAbsolute{
position: absolute;
top: 31%;
left:40%;
transform: translate(50%, 50%);
transform: rotate(270deg);

}}
@media screen and (max-width: 360px) {

 .positionRelative {
  position: relative;
  width: 160px;
  height: 300px;

  img {
    width: 100%;
    max-width: 150px;
    height: 300px;
    margin-left: 90px;
    margin-top: 0px;
  }
}
  .bgImage{ 
  width: 100%;
  max-width: 350px;
  height:155px;
  margin-top: 70px;
  margin-left:25px;
  transform: rotate(90deg);
}
 
 .play{
width: 70px;
height: 70px;
animation: scale 4s infinite;
display: flex;
justify-content: center;
align-items: center;
transform: rotate(90deg);
}
.positionAbsolute{
position: absolute;
top: 32%;
left:41%;
transform: translate(50%, 50%);
transform: rotate(270deg);

}}
@media screen and (max-width: 320px) {

 .positionRelative {
  position: relative;
  width: 160px;
  height: 300px;

  img {
    width: 100%;
    max-width: 125px;
    height: 270px;
    margin-left: 90px;
    margin-top: 2px;
  }
}
  .bgImage{ 
  width: 100%;
  max-width: 350px;
  height:140px;
  margin-top: 70px;
  margin-left:25px;
  transform: rotate(90deg);
}
 
 .play{
width: 70px;
height: 70px;
animation: scale 4s infinite;
display: flex;
justify-content: center;
align-items: center;
transform: rotate(90deg);
}
.positionAbsolute{
position: absolute;
top: 28%;
left:38%;
transform: translate(50%, 50%);
transform: rotate(270deg);

}}

 </style>