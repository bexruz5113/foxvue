<template>
  <div>
    <b-container fluid="100%" class="bgColor">
      <b-container>
        <b-row>
          <b-col cols="12">
            <b class="strong"> Fun <b class="text-white">Facts</b></b>
            <p class="m-auto pt-3 pb-5  font-weight-bolder">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit assumenda
              natus eum distinctio similique explicabo commodi veritatis? Nemo
              minima non aspernatur laudantium iste.
            </p>
          </b-col>

          <b-col
            v-for="(list, index) in lists"
            :key="index"
            cols="12"
            lg="3"
            md="6"
            class="d-flex justify-content-center my-3"
          >
            <div class="windows d-block">
            <img class="pb-3" width="45" :src="require(`@/assets/${list.image}.png`)">
            <h1 class="textPrimary font-weight-bolder">
   <animated-number :value="list.Number" :formatValue="formatToPrice" :duration="3000" />
</h1>
            <p class="mx-auto textPrimary font-weight-bold ">{{ list.title }}</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>
<script>
import AnimatedNumber from "animated-number-vue";
export default {
  components: {
    AnimatedNumber
  },
  data() {
    return {
      value: 1000,
      lists: [
        {
          image:"coffee",
          Number: 245,
          title: "Coffee Cups",
        },
        {
          image:"code-signs",
          Number: 3000,
          title: "Line Code",
        },
        {
          image:"down-arrow",
          Number: 773,
          title: "Download",
        },
        {
          image:"heart",
          Number: 360,
          title: "Shere",
        },
      ],
    };
  },
  methods: {
    formatToPrice(value) {
      return `${value.toFixed(0)}`;
    }
  }
};
</script>

<style lang="scss" scoped>
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.bgColor {
  background-color: #21bbd3;
}
.textPrimary{
    color: #21bbd3;
}
.strong {
  font-size: 58px;
  color: black;
}
p {
  color: black;
}
.windows {
  width: 250px;
  padding: 30px;
  background-color: #fff;
  border-radius:40px;
}
@media screen and (max-width: 572px){
  .strong{
    font-size: 28px;
  }
}
</style>