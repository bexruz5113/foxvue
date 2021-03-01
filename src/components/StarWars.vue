<template>
  <div class="mt-5 pt-5">
    <h1>work with API</h1>
    <!-- <div v-if="isError">
      <b-col v-for="film in movies" :key="film.id" class="mt-4 bg-dark text-white">
        <h1>Title: {{ film.title }}</h1>
        <h2>Episode: {{ film.episode_id }}</h2>
        <h4>Opening crawl: {{ film.opening_crawl }}</h4>
        <h5>Director: {{ film.director }}</h5>
        <h5>Planets: {{ film.planets }} </h5>
        
        <p v-for="(planet,index) in film.planets" :key="index">{{ planet }}</p>
    </b-col>
    </div>
    <div v-else>
      <p>Error occured</p>
    </div> -->

    <b-container class="d-flex">
      <b-row>
        <b-col
          cols="12"
          lg="6"
          v-for="person in $store.getters.people"
          :key="person.id"
        >
          <div class="p-3 my-2 border">
            <h2 class="bg-dark text-white">Name: {{ person.name }}</h2>
            <h4 class="text-left"><img src="../assets/paint-board-and-brush.png"> Skin color:{{ person.skin_color }}</h4>
            <p class="text-left"><img src="../assets/add-documents.png" alt=""> Created: {{ person.created }}</p>
            <a
              v-for="film in person.films"
              :key="film.id"
              :href="film"
              class="d-flex justify-content-around text-column"
              ><h5 class="text-dark">click</h5></a
            >
          </div>
        </b-col>
      </b-row>
    </b-container>

    <!-- <b-container class="d-flex">
      <b-row>
        <b-col
          cols="12"
          lg="6"
          v-for="planet in $store.getters.planets"
          :key="planet.id"
        >
          <div class="p-3 my-2 bg-danger">
            <h2>Name: {{ planet.name }}</h2>
            <h4>diameter:{{ planet.diameter }}</h4>
            <p class="w-100 mx-auto">Created: {{ planet.created }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="d-flex">
      <b-row>
        <b-col
          cols="12"
          lg="6"
          v-for="film in $store.getters.films"
          :key="film.id"
        >
          <div class="p-3 my-2 bg-warning">
            <h4>title:{{ film.title }}</h4>
            <h3>producer: {{ film.producer }}</h3>
            <p class="w-100 mx-auto">Created: {{ film.created }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="d-flex">
      <b-row>
        <b-col
          cols="12"
          lg="6"
          v-for="speice in $store.getters.species"
          :key="speice.id"
        >
          <div class="p-3 my-2 bg-success">
            <h4>Name:{{ speice.name }}</h4>
            <h3>language: {{ speice.language }}</h3>
            <p class="w-100 mx-auto">Created: {{ speice.created }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="d-flex">
      <b-row>
        <b-col
          cols="12"
          md="6"
          v-for="starship in $store.getters.starships"
          :key="starship.id">
          <div class="bg-dark text-white p-4 my-2">
          <h3>Name:{{starship.name}}</h3>
          <p>manufacturer:{{starship.manufacturer}}</p>
          <b>Model:{{starship.model}}</b>
          </div>
        </b-col>
      </b-row>
    </b-container>

<b-container class="d-flex">
      <b-row>
        <b-col
          cols="12"
          md="6"
          v-for="vehicle in $store.getters.vehicles"
          :key="vehicle.id">
          <div class="bg-info text-white p-4 my-2">
          <h3>Name:{{vehicle.name}}</h3>
          <p>manufacturer:{{vehicle.manufacturer}}</p>
          <b>Model:{{vehicle.model}}</b>
          </div>
        </b-col>
      </b-row>
    </b-container> -->
  </div>
</template>

<script>
export default {
  // get, post,put,patch,delete,
  methods: {
    getPeople() {
      this.$http.get("people/")
        .then((result) => {
          this.$store.dispatch("getPeople", result.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // getPlanets() {
    //   this.$http
    //     .get("planets/")
    //     .then((result1) => {
    //       this.$store.dispatch("getPlanets", result1.data.results);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    // getFilms() {
    //   this.$http
    //     .get("films/")
    //     .then((result2) => {
    //       this.$store.dispatch("getFilms", result2.data.results);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    // getSpecies() {
    //   this.$http
    //     .get("species/")
    //     .then((res) => {
    //       this.$store.dispatch("getSpecies", res.data.results);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    // getStarships() {
    //   this.$http.get("starships/")
    //     .then((res) => {
    //       this.$store.dispatch("getStarships", res.data.results);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    // getVehicles(){
    //   this.$http.get('vehicles/')
    //   .then((res)=>{
    //     this.$store.dispatch('getVehicles', res.data.results)
    //   })
    //   .catch((error)=>{
    //     console.log(error)
    //   })
    // }
  },
  mounted() {
    this.getPeople();
    // this.getPlanets();
    // this.getFilms();
    // this.getSpecies();
    // this.getStarships();
    // this.getVehicles();
  },
};
</script>

<style lang="css" scoped>
</style>


