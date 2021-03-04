<template>
  <div class="mt-5 pt-5">
    <b-container>
      <b-row>
        <b-col cols="12">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">N_</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Birthday</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Faculty</th>
                  <th scope="col">CRUD</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="student in $store.getters.student" :key="student.id">
                  <th scope="row">{{ student.id }}</th>
                  <td>{{ student.first_name }}</td>
                  <td>{{ student.last_name }}</td>
                  <td>{{ student.email }}</td>
                  <td>{{ student.birthday }}</td>
                  <td>{{ student.gender }}</td>
                  <td>{{ student.faculty.name }}</td>
                  <td>
                    <b-button v-b-modal="`my-edit-modal-${student.id}`" type="button">
                      <img class="mr-2" src="../assets/edit.png"
                    /></b-button>
                    <b-modal :id="`my-edit-modal-${student.id}`" title="BootstrapVue">
                    <p class="my-4">Hello from edit modal {{ student.id }}!</p>
                    </b-modal>    

                    
                    <b-button v-b-modal="`my-delete-modal-${student.id}`" type="button">
                      <img src="../assets/trash.png"
                    /></b-button>
                    <b-modal :id="`my-delete-modal-${student.id}`" title="BootstrapVue">
                        <button @click="deleteStudent(student.id)">delete</button>
                    </b-modal>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  methods: {
    getStudents() {
      this.$http
        .get("students/")
        .then((result) => {
          console.log(result);
          this.$store.dispatch("getStudents", result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteStudent(id) {
        console.log(id)
        this.$http.delete(`students/${id}/`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
  },
  mounted() {
    this.getStudents();
  },
};
</script>

<style lang="css" scoped>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

button {
  outline: none;
  border: none;
  background-color: transparent;
}
</style>