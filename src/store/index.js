import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: [],
      // planets: [],
    //   films: [],
    //   species: [],
    //   starships: [],
    //   vehicles: [],
  },
    getters: {
      student(state) {
        return state.students
      },
    //  planets(state){
    //    return state.planets
    //  }
      // films(state) {
      //   return state.films
      // },
      // species(state) {
      //   return state.species
      // },
      // starships(state) {
      //   return state.starships
      // },
      // vehicles(state) {
      //   return state.vehicles
      // }

    },
    mutations: {
      SET_STUDENTS(state, payload) {
        state.students = payload
      },
      // SET_PLANETS(state, payload){
      //   state.planets = payload
      // }
      // SET_FILMS(state, payload) {
      //   state.films = payload
      // },
      // SET_SPECIES(state, payload) {
      //   state.species = payload
      // },
      // SET_STARSHIPS(state, payload) {
      //   state.starships = payload
      // },
      // SET_VEHICLES(state, payload) {
      //   state.vehicles = payload
      // }

    },
    actions: {
      getStudents({ commit }, payload) {
        commit('SET_STUDENTS', payload)
      },
      // getPlanets({commit},payload){
      //   commit('SET_PLANETS',payload)
      // }
      // getFilms({ commit }, payload) {
      //   commit('SET_FILMS', payload)
      // },
      // getSpecies({ commit }, payload) {
      //   commit('SET_SPECIES', payload)
      // },
      // getStarships({ commit }, payload) {
      //   commit('SET_STARSHIPS', payload)
      // },
      // getVehicles({ commit }, payload) {
      //   commit("SET_VEHICLES", payload)
      // },
    // }
  }
});

