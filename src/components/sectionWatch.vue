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
          <div>
            <img class="positionRelative" src="../assets/unnamed.png" alt="" />
          </div>
          <div
            class="positionAbsolute d-flex justify-content-center align-items-center"
          >
            <div class="play position-relative"></div>
            <a class="positionAbsolute" href="https://youtu.be/AoV-6nVyyBY">
              <img src="../assets/play-button.png" alt=""
            /></a>
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
  width: 100%;
  max-width: 400px;
  transform: rotate(-90deg);
  position: relative;
}
.positionAbsolute {
  position: absolute;
  top: 42%;
  left: 45%;
}

.play {
  width: 70px;
  height: 70px;
  position: absolute;
  top: 27px;
  left: 37px;
  animation: scale 4s infinite;
}
@keyframes scale {
  0% {
    transform: scale(0.9); /*Уменьшение элемента*/
    opacity: 0.5; /*Уровень прозрачности*/
    border: 5px solid rgba(255, 255, 255, 0.979); /*Граница (задаём толщину и цвет)*/
    box-shadow: 0px 0px 0px 3px #e2e2e2;
    border-radius: 50%; /*Тень (задаём размах и цвет)*/
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
    border: 10px solid rgba(255, 255, 255, 0.753);
    box-shadow: 0px 0px 0px 10px rgba(255, 255, 255, 0.553);
    border-radius: 50%;
  }
  100% {
    transform: scale(0.9);
    opacity: 0.5;
    border: 5px solid rgba(255, 255, 255, 0.466);
    box-shadow: 0px 0px 0px 3px rgba(255, 255, 255, 0.266);
    border-radius: 50%;
  }
}
@media screen and (max-width: 992px) {
  .positionRelative {
    transform: rotate(0deg);
    position: relative;
  }
  .positionAbsolute {
    position: absolute;
    top: 38%;
    left: 42%;
  }
  .play {
  width: 70px;
  height: 70px;
  position: absolute;
  top: 24px;
  left: 25px;
  animation: scale 4s infinite;
}
}
@media screen and (max-width: 768px) {
  .positionRelative {
    transform: rotate(0deg);
    position: relative;
  }
  .positionAbsolute {
    position: absolute;
    top: 40%;
    left: 40%;
  }
  .play {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 25px;
    left: 24px;
    animation: scale 4s infinite;
  }
}
@media screen and (max-width: 576px) {
  .positionRelative {
    transform: rotate(0deg);
    position: relative;
  }
  .positionAbsolute {
    position: absolute;
    top: 38%;
    left: 38%;
  }
  .play {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 23px;
    left: 23px;
    animation: scale 4s infinite;
  }
}
@media screen and (max-width: 400px) {
  .positionRelative {
    transform: rotate(0deg);
    position: relative;
  }
  .positionAbsolute {
    position: absolute;
    top: 35%;
    left: 35%;
  }
    .play {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 21px;
    left: 21px;
    animation: scale 4s infinite;
  }
}
@media screen and (max-width: 321px) {
  .positionRelative {
    transform: rotate(0deg);
    position: relative;
  }
  .positionAbsolute {
    position: absolute;
    top: 36%;
    left: 33%;
  }
    .play {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 22px;
    left: 20px;
    animation: scale 4s infinite;
  }
}

</style>