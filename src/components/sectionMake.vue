<template>
  <div id="sectionPage">
    <b-container fluid="100%" class="bgImg">
      <b-container>
        <b-row>
          <b-col cols="12" lg="5">
            <img class="mobileImg" src="../assets/mobile-2.png" alt="" />
          </b-col>
          <b-col cols="12" lg="7">
            <b-col col="12" class="pt-4">
              <h1>Make Business Easy With Us</h1>
              <p class="w-100 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit.laudantium, eveniet illum assumenda fuga! Laborum modi
                excepturi sit.
              </p>
            </b-col>
   <b-col cols="12" class="d-flex">
   <b-row>
        <b-col class="my-3" cols="12" lg="6" v-for="(list,index) in lists" v-bind:key="index">
        <div class="w-100 text-left"><img v-bind:src="require(`@/assets/${list.image}.png`)" width="45px"></div>
        <p class="w-100 text-justify">{{list.text}}</p>
        </b-col>
      </b-row>
      </b-col>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          image: "shuttle",
          text:
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque dignissimos autem, architecto sint illo quisquam.",
        },
        {
          image: "shuttle",
          text:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque dignissimos autem, architecto sint illo quisquam",
        },
        {
          image: "shuttle",
          text:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque dignissimos autem, architecto sint illo quisquam",
        },
        {
          image: "shuttle",
          text:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque dignissimos autem, architecto sint illo quisquam",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.bgImg {
  width: 100%;
  background-image: url("../assets/gray-bg.jpg");
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}

@media screen and (max-width: 992px) {
.mobileImg{
  width: 100%;
  max-width: 400px;
}
}
</style>