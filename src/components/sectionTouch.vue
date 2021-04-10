<template>
  <div>
    <b-container class="mx-auto">
      <b-row>
        <b-col cols="12">
          <b class="strong"> Git <b class="text-primary">in</b> touch</b>
          <p class="m-auto pt-3 pb-5 font-weight-bolder">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit assumenda
            natus eum distinctio similique explicabo commodi veritatis?
          </p>
        </b-col>
        <form v-on:submit.prevent="forma">
          <b-col cols="12">
            <b-row>
              <b-col cols="12" md="4"
                ><div class="borderBottom float-md-left">
                  <input
                    type="text"
                    class="w-100"
                    v-model="obj.name"
                    required
                    placeholder="Enter Your Name"
                  /></div
              ></b-col>
              <b-col cols="12" md="4"
                ><div class="borderBottom">
                  <input
                    type="text"
                    class="w-100"
                    v-model="obj.email"
                    required
                    placeholder="Enter Your Email"
                  /></div
              ></b-col>
              <b-col cols="12" md="4"
                ><div class="borderBottom float-md-right">
                  <input
                    type="text"
                    class="w-100"
                    v-model="obj.subject"
                    required
                    placeholder="Enter Your Subject"
                  /></div
              ></b-col>
              <b-col cols="12"
                ><div class="borderBottomText">
                  <textarea
                    required
                    v-model="obj.message"
                    placeholder="Enter Your Message"
                    class="mb-0 mt-5"
                  ></textarea></div
              ></b-col>
              <b-col cols="12"
                ><button class="button" type="submit">
                  Send Message
                </button></b-col
              >
            </b-row></b-col
          >
        </form>
        <b-col class="py-5" cols="12" md="4" v-for="(base,index) in bases" :key="index">
            <img :src="require(`@/assets/${base.image}.png`)">
            <p class="mx-auto mt-2 w-100">{{base.text}}</p>
            <p class="mx-auto w-100">{{base.title}}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      bases: [
        { image: "placeholder", text: "28 Green Tower, Street Name New", title: "York City, USA" },
        { image: "telephone", text: "+2 012 345 6789", title: "+2 02 345 6789" },
        { image: "email", text: "info@yourcompany.com", title: "sales@yourcompany.com" },
      ],
    };
  },
  methods: {
    forma() {
      console.log(this.obj);
    },
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.strong {
  color: black;
  font-size: 58px;
}
p {
  color: black;
}
textarea {
  width: 100%;
  height: 100px;
  margin: 20px 0;
  outline: none;
  border: 0;
}
input {
  outline: none;
  border: 0;
}
.borderBottom {
  width: 100%;
  margin: 0 auto;
  border-bottom: 2px solid #21bbd3;
}
.borderBottomText {
  width: 100%;
  border-bottom: 2px solid #21bbd3;
}
.button {
  width: 200px;
  padding: 15px 20px;
  background-color: #21bbd3;
  border: 1px solid white;
  outline: none;
  color: white;
  border-radius: 25px;
  float: left;
  margin-top: 50px;
  transition: all 0.5s ease;
}
.button:hover {
  background-color: gold;
}
@media screen and (max-width: 572px){
  .strong{
    font-size: 28px;
  }
}
</style>