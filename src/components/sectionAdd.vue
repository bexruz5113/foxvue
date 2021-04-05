<template>
  <div>
    <form v-on:submit.prevent="addStudents">
      <b-col cols="12">
        <b-row>
          <b-col cols="12"
            ><div class="borderBottom">
              <input
                v-model="form.first_name"
                type="text"
                required
                placeholder="First Name"
              /></div
          ></b-col>
          <b-col cols="12">
            <div class="borderBottom">
              <input
                v-model="form.last_name"
                type="text"
                required
                placeholder="Last Name"
              /></div
          ></b-col>
          <b-col cols="12"
            ><div class="borderBottom">
              <input
                v-model="form.email"
                type="text"
                required
                placeholder="Email"
              /></div
          ></b-col>
          <b-col cols="12" class="mt-3">
            <div>
              <input
                class="input-outline"
                v-model="form.birthday"
                type="date"
                required
                placeholder="Birthday"
              /></div
          ></b-col>
          <b-col cols="12" sm="6" class="mt-2 mb-3">
            <div>
              <select v-model="form.gender">
                <option value="1">MALE</option>
                <option value="2">FEMALE</option>
              </select>
            </div></b-col
          >
          <b-col cols="12" sm="6" class="mt-2 mb-3">
            <div>
              <select v-model="form.faculty">
                <option value="1">DIF</option>
                <option value="2">KIF</option>
                <option value="3">TTF</option>
                <option value="4">AXF</option>
              </select>
            </div></b-col
          >
          <b-col cols="12" class="mx-auto"
            ><button class="button" type="submit">Send Message</button>
          </b-col>
        </b-row></b-col
      >
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        email: "",
        birthday: 0,
        gender: "MALE",
        faculty: 1,
      },
    };
  },
  methods: {
    addStudents() {
      this.$http.
      post("students/", this.form)
        .then((result) => {
          console.log(result);
          this.$bvModal.hide("my-modal-add");

          this.form = {
            first_name: "",
            last_name: "",
            email: "",
            birthday: 0,
            gender: "MALE",
            faculty: 1,
          };
          //   this.$store.dispatch("getStudents", result.data);
        })
        .catch((error) => {
          console.log(error);
        });
        // this.$emit("clicked")
    },
  },
};
</script>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
input {
  outline: none;
  border: 0;
}
.input-outline {
  outline: auto;
  border: 1px solid rgba(0, 0, 0, 0.226);
}
.borderBottom {
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
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
  transition: all 0.5s ease;
}
.button:hover {
  background-color: gold;
}
</style>