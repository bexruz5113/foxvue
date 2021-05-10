<template>
  <div>
  <div class="home pt-3 mt-5">
    <div class="overflow-hidden" @mousemove="showEvent($event)">
    <div class="NextSection">
      <div class="left"
       data-aos="zoom-in"  
      data-aos-delay="300" 
      data-aos-duration="2000"
      >
        <p>With us you will</p>
        <h1>SUCCEED</h1>
        <p>
          Proactively syndicate open-source e-markets after low-risk high-yield
          synergy. Professionally simplify visionary technology.
        </p>
        <div class="relativeBtn">
          <button class="button-weather" type="button">READ MORE</button>
        </div>
      </div>
      <div 
      :style="style"
      class="right"
       data-aos="fade-left"
       data-aos-delay="300" 
       data-aos-duration="2000">
        <img class="image-weather ml-5" src="../assets/mobile-1.png" />
      </div>
    </div>

   <div> <svg
      class="green"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#21bbd3"
        fill-opacity="1"
        d="M0,288L1440,64L1440,0L0,0Z"
      ></path>
    </svg>
  </div>
  </div>

    <!-- <HelloWorld /> -->
    <!-- <router-view /> -->

    <section-1 :bases="bases" />
    <!-- <section-1 :bases="basesTwo" /> -->
    <sectionMake />
    <sectionMain />
    <sectionFeature />
    <sectionWatch />
    <!-- <section-props title="lorem larem" :color="colors" /> -->
    <!-- <section-props title = "prop malumot" :color="clours"  /> -->
    <section-client />
    <section-fact />
    <section-price />
    <section-team />
    <sectionFAQ />
    <section-news />
    <section-download />
    <section-touch />
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import StarWars from './components/StarWars';
import Section1 from "../components/section1.vue";
import SectionMake from "../components/sectionMake.vue";
import SectionMain from "../components/sectionMain.vue";
import SectionFeature from "../components/sectionFeature.vue";
import SectionWatch from "../components/sectionWatch.vue";
// import SectionProps from '../components/sectionProps.vue';
import SectionClient from "../components/sectionClient.vue";
import SectionFact from "../components/sectionFact.vue";
// import SlotComponent from "../components/SlotComponent.vue";
import SectionPrice from "../components/sectionPrice.vue";
import SectionTeam from "../components/sectionTeam.vue";
import SectionFAQ from "../components/sectionFAQ.vue";
import SectionNews from "../components/sectionNews.vue";
import SectionDownload from "../components/sectionDownload.vue";
import SectionTouch from "../components/sectionTouch.vue";
// import SectionMap from '../components/sectionMap.vue';

export default {
  name: "Home",
  components: {
    Section1,
    SectionMake,
    SectionMain,
    SectionFeature,
    SectionWatch,
    // SectionProps,
    SectionClient,
    SectionFact,
    // SlotComponent,
    SectionPrice,
    SectionTeam,
    SectionFAQ,
    // StarWars,
    SectionNews,
    SectionDownload,
    SectionTouch,
    // SectionMap,
  },
  data() {
    return {
      x:0,
      y:0,
      style:{
        transform:'translate(0,0)',
        transition:'all ease 1s'
      },
      colors: ["dark", "warning", "danger", "primary"],
      clours: ["primary", "danger", "warning", "dark"],
      basesTwo: [
        {
          picture: "pen",
          name: "CAR",
          text:
            "Proactively syndicate open-source e-markets after low-risk high-yield synergy.",
        },
        {
          picture: "shuttle",
          name: "CHAIR",
          text:
            "Proactively syndicate open-source e-markets after low-risk high-yield synergy.",
        },
        {
          picture: "present",
          name: "COMPUTER",
          text:
            "Proactively syndicate open-source e-markets after low-risk high-yield synergy.",
        },
      ],
      bases: [
        {
          picture: "pen",
          name: "Creative Design",
          aos:"zoom-in",
          text:
            "Proactively syndicate open-source e-markets after low-risk high-yield synergy.",
        },
        {
          picture: "shuttle",
          name: "Free support",
          aos:"zoom-in",
          text:
            "Proactively syndicate open-source e-markets after low-risk high-yield synergy.",
        },
        {
          picture: "present",
          name: "Exclusive Design",
          aos:"zoom-in",
          text:
            "Proactively syndicate open-source e-markets after low-risk high-yield synergy.",
        },
      ],
    };
  },
  methods:{
    showEvent($event){
      this.x = $event.clientX
      this.y = $event.clientY
      if(this.x < 683 && this.y < 320){
        this.style.transform = 'translate(20px,20px)'
      }
      if(this.x > 683 && this.y > 320){
        this.style.transform = 'translate(-20px,-20px)'
      }
      if(this.x < 683 && this.y > 320){
        this.style.transform = 'translate(20px,-20px)'
      }
      if(this.x > 683 && this.y < 320){
        this.style.transform = 'translate(-20px,20px)'
      }
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

.NextSection {
  display: flex;
  justify-content: space-between;
  background: #21bbd3;
}
@media screen and (max-width: 900px) {
  .NextSection {
    display: block;
    padding-bottom: 250px;

    .left {
      width: 75%;
      padding-top: 0;
      padding: 20px;
      margin: 0 auto;
      h1 {
        font-size: 40px;
      }
      p {
        width: 100%;
      }
      .right {
        width: 50%;
        padding: 50px;
        margin: 0 auto;
        position: relative;
      }

      .image-weather {
        width: 100%;
        margin-left: 50px;
        max-width: 300px;
        position: absolute;
        top: 0;
        bottom:0;
      }
    }
  }
}

.left {
  width: 50%;
  padding: 100px;
  text-align: justify;
  color: white;
  h1 {
    margin: 10px 0;
    font-size: 70px;
    font-weight: bolder;
  }
}
p {
  width: 75%;
  line-height: 23px;
}
.relativeBtn {
  position: relative;
}
.button-weather {
  width: 170px;
  padding: 15px;
  position: absolute;
  top: 25px;
  left: 0;
  background-color: rgba(255, 255, 255, 0.815);
  border: 1px solid white;
  outline: none;
  border-radius: 25px;
  color: #0b606d;
  transition: all 0.5s ease;
}
.button-weather:hover {
  background-color: gold;
}
.right {
  width: 50%;
  
  position: relative;
}
.image-weather {
  width: 100%;
  max-width: 400px;
  position: absolute;
  top: 50px;
  left: 0;
}
</style>