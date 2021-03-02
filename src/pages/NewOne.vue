<template>
  <div>
   <b-container fluid class="bg-color">
    <b-container>
      <b-row>
        <b-col cols="12">
         <div class="d-flex justify-content-center"> <h1 class="titleNews">News</h1></div>
        </b-col>
      </b-row>
    </b-container>
    </b-container>

    <b-container>
      <b-row>
        <b-col
          class="my-4"
          lg="4"
          md="6"
          cols="12"
          v-for="base in bases"
          :key="base.id"
        >
          <img
            class="img-fluid"
            :src="require(`@/assets/${base.picture}.jpg`)"
          />
          <h5 class="font-weight-bold">{{ base.title }}</h5>
          <p class="w-100">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            veritatis vitae consequuntur ea provident nihil?
          </p>
          <div class="d-flex">
            <div class="d-flex mr-4">
              <div><img src="../assets/user.png" /></div>
              <div><p class="w-100 text-secondary px-2">By Admin</p></div>
            </div>
            <div class="d-flex">
              <div><img src="../assets/alarm-clock.png" /></div>
              <div><p class="w-100 text-secondary px-2">Feb 21,2021</p></div>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-col
        cols="12"
        class="mx-auto d-flex justify-content-center align-items-center"
      >
        <div>
          <b-button variant="outline-primary"
            ><img src="../assets/left-arrow.png"
          /></b-button>
        </div>
        <div>
          <b-button variant="outline-primary" class="text-dark">01</b-button>
        </div>
        <div>
          <b-button variant="outline-primary" class="text-dark">02</b-button>
        </div>
        <div>
          <b-button variant="outline-primary" class="text-dark">03</b-button>
        </div>
        <div>
          <b-button variant="outline-primary"
            ><img src="../assets/right-arrow.png"
          /></b-button>
        </div>
      </b-col>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bases: [
        {
          picture: "blog-1",
          title: "Exploring Latest Web Design Trends.",
        },
        {
          picture: "blog-2",
          title: "Inspired Design Decisions",
        },
        {
          picture: "blog-3",
          title: "fox Discover The World",
        },
        {
          picture: "blog-2",
          title: "fox Discover The World",
        },
        {
          picture: "blog-3",
          title: "Exploring Latest Web Design Trends.",
        },
        {
          picture: "blog-1",
          title: "Make Business Easy With Us",
        },
      ],
    };
  },
};
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
.bg-color {
  background-color: #21bbd3;
  width: 100%;
  padding: 150px 0;
}
.titleNews {
  color: white !important;
  font-weight: bolder;
  font-size: 55px;
}
</style>