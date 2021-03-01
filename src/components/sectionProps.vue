<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12"><h3>{{ title }}</h3></b-col>
        <b-col v-for="(i,index) of color" :key="index" cols="12" lg="3" md="6">
        <div :class="`p-5 text-white m-2 bg-${i}`">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nobis,ratione.
          </div></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    color: [String,Array],
  },
  
};
</script>

<style scoped>
</style>