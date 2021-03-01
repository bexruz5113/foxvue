<template>
  <div>
    <b-container fluid class="bg-color">
      <b-row>
        <b-col cols="12" class="d-flex justify-content-center">
          <h1 class="titleNews">News</h1>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="12" md="8">
          <div class="mt-4">
            <img class="imgFluid" src="../assets/blog-3.jpg" />
            <h4 class="text-left font-weight-bold py-2">
              Make Business Easy With Us
            </h4>
            <div class="d-flex">
              <div class="d-flex mr-4">
                <div><img src="../assets/user.png" /></div>
                <div><p class="w-100 text-secondary px-2">By Admin</p></div>
              </div>
              <div class="d-flex">
                <div><img src="../assets/alarm-clock.png" /></div>
                <div>
                  <p class="w-100 text-secondary px-2">Feb 21,2021</p>
                </div>
              </div>
            </div>

            <p class="text-justify p-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.Laborum
              voluptatum facilis, vel expedita id recusandae non totam illo
              consequatur aliquid itaque quos delectus ex rem quo sapiente!
              Consequatur voluptatibus reiciendis, laboriosam eius perferendis
              sunt, sed mollitia libero obcaecati amet dolorem error nisi
              facilis ipsa, rerum debitis. Saepe necessitatibus perspiciatis
              delectus quibusdam iure enim similique nam.
            </p>
            <div class="border_left">
              <i class="text-justify font-weight-bold"
                >"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Optio, asperiores! Nihil fuga totam, facilis numquam ea nam
                omnis voluptate enim."</i
              >
            </div>
            <p class="text-justify p-2 mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.Laborum
              voluptatum facilis, vel expedita id recusandae non totam illo
              consequatur aliquid itaque Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Laboriosam asperiores veniam ex soluta, dicta
              quis facilis repellat esse, est qui labore earum nesciunt natus
              debitis et nam fugit. Inventore, praesentium. quos delectus ex rem
              quo sapiente! Consequatur voluptatibus reiciendis, laboriosam eius
              perferendis sunt, sed mollitia libero obcaecati amet dolorem error
              nisi facilis ipsa, rerum debitis. Saepe necessitatibus
              perspiciatis delectus quibusdam iure enim similique nam.
            </p>
            <hr />
            <div
              class="d-md-flex d-block justify-content-between align-items-center"
            >
              <div class="d-flex">
                <h5 class="my-1">Share:</h5>
                <a href="#"
                  ><img class="m-1" width="24" src="../assets/facebook (2).png"
                /></a>
                <a href="#"
                  ><img class="m-1" width="24" src="../assets/linkedin (2).png"
                /></a>
                <a href="#"
                  ><img class="m-1" width="24" src="../assets/twitter (2).png"
                /></a>
              </div>
              <div>
                <div class="d-flex align-items-center">
                  <h5 class="my-1">Tags:</h5>
                  <a href="#" class="mt-1 text-decoration-none"
                    >Development,Design</a
                  >
                </div>
              </div>
            </div>
            <hr />
            <h4 class="text-left">3 Comments In This Topic</h4>
            <div class="d-flex justify-content-between my-4">
              <div>
                <img class="img_avatar" src="../assets/avatar.jpg" />
              </div>
              <div class="text-left ml-3">
                <h4>Mohamed Kamel</h4>
                <small>01 October 2018</small>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour
                </p>
                <a class="text-left" href="#"
                  ><img src="../assets/reply.png" /> Reply</a
                >
              </div>
            </div>
            <hr />
            <div class="d-flex justify-content-between my-4">
              <div>
                <img class="img_avatar" src="../assets/avatar-2.jpg" />
              </div>
              <div class="text-left ml-3">
                <h4>John Doe</h4>
                <small>01 October 2018</small>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour
                </p>
                <a class="text-left" href="#"
                  ><img src="../assets/reply.png" /> Reply</a
                >
              </div>
            </div>
            <hr />
            <div class="d-flex justify-content-between my-4">
              <div>
                <img class="img_avatar" src="../assets/avatar.jpg" />
              </div>
              <div class="text-left ml-3">
                <h4>Mohamed Kamel</h4>
                <small>01 October 2018</small>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour
                </p>
                <a class="text-left" href="#"
                  ><img src="../assets/reply.png" /> Reply</a
                >
              </div>
            </div>
            <hr />
            <div class="d-flex justify-content-between my-4">
              <div>
                <img class="img_avatar" src="../assets/avatar-2.jpg" />
              </div>
              <div class="text-left ml-3">
                <h4>John Doe</h4>
                <small>01 October 2018</small>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour
                </p>
                <a class="text-left" href="#"
                  ><img src="../assets/reply.png" /> Reply</a
                >
              </div>
            </div>
            <div>
              <h4 class="text-left">Leave A Reply</h4>
              <form v-on:submit.prevent="forma">
                <b-col cols="12">
                  <b-row>
                    <b-col cols="12" md="6"
                      ><div class="borderBottom float-md-left">
                        <input
                          type="text"
                          v-model="obj.name"
                          required
                          placeholder="Enter Your Name"
                        /></div
                    ></b-col>
                    <b-col cols="12" md="6"
                      ><div class="borderBottom">
                        <input
                          type="text"
                          v-model="obj.email"
                          required
                          placeholder="Enter Your Email"
                        /></div
                    ></b-col>
                    <b-col cols="12"
                      ><div class="borderBottomText">
                        <textarea
                          class="mb-0"
                          required
                          v-model="obj.message"
                          placeholder="Enter Your Message"
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
            </div>

            <div class="d-block my-3">
              <b-col
                cols="12"
                class="bg-white border p-3 my-3"
                v-for="(object, index) of comment"
                :key="index"
              >
                <h3 class="text-white comment bg-info">{{ object.name }}</h3>
               <div class="w-100 text-left"> <a href="#" class="comment">{{ object.email }}</a></div>
                <p class="text-dark comment">{{ object.message }}</p>
              </b-col>
            </div>
          </div>
        </b-col>
        <b-col cols="12" md="4">
          <section-right />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import sectionRight from "../components/sectionRight.vue";
export default {
  components: { sectionRight },
  data() {
    return {
      comment: [],
      obj: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    forma() {
      this.comment.push(this.obj);
      this.obj = {
        name: "",
        email: "",
        message: "",
      };
    },
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
  padding: 200px 0;
}
.titleNews {
  color: white !important;
  font-weight: bolder;
  font-size: 55px;
}
.imgFluid {
  width: 100%;
  max-width: 750px;
}
.border_left {
  background-color: #f8f9fa;
  padding: 35px 20px;
  line-height: 2;
  border-left: 5px solid #21bbd3;
}
.img_avatar {
  width: 100%;
  max-width: 100px;
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
  padding: 20px 0;
  border-bottom: 2px solid #21bbd3;
}
.borderBottomText {
  width: 100%;
  padding: 20px 0 0 0;
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
.comment{
    word-break: break-all;
    text-align: left;

}
</style>