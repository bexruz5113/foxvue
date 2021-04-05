<template>
  <div class="mt-5 pt-5">
    <b-container>
      <b-row>
        <b-col cols="12">
          <div class="float-right bgPrimary rounded border">
            <b-button class="text-white" v-b-modal.my-modal-add type="button">
              + Add
            </b-button>
            <b-modal id="my-modal-add" centered hide-footer title="Add Post">
              <section-add @clicked="getStudents()" />
            </b-modal>
          </div>
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
                  <th scope="col">Edit/Delete</th>
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
                    <b-button @click="editStudent(student.id)" type="button">
                      <img class="mr-2" src="../assets/edit.png"
                    /></b-button>
                    <b-modal
                      :id="`my-edit-modal-${student.id}`"
                      centered
                      hide-footer
                      title="Edit Section">
                      <form v-on:submit.prevent="saveStudent(student.id)">
                        <b-col cols="12">
                          <b-row>
                            <b-col cols="12"
                              ><div class="borderBottom">
                                <input
                                  v-model="singleStudent.first_name"
                                  type="text"
                                  required
                                  placeholder="First Name"
                                /></div
                            ></b-col>
                            <b-col cols="12">
                              <div class="borderBottom">
                                <input
                                  v-model="singleStudent.last_name"
                                  type="text"
                                  required
                                  placeholder="Last Name"
                                /></div
                            ></b-col>
                            <b-col cols="12"
                              ><div class="borderBottom">
                                <input
                                  v-model="singleStudent.email"
                                  type="text"
                                  required
                                  placeholder="Email"
                                /></div
                            ></b-col>
                            <b-col cols="12" class="mt-3">
                              <div>
                                <input
                                  class="input-outline"
                                  v-model="singleStudent.birthday"
                                  type="date"
                                  required
                                  placeholder="Birthday"
                                /></div
                            ></b-col>
                            <b-col cols="12" sm="6" class="mt-2 mb-3">
                              <div>
                                <select v-model="singleStudent.gender">
                                  <option value="MALE">MALE</option>
                                  <option value="FEMALE">FEMALE</option>
                                </select>
                              </div></b-col
                            >
                            <b-col cols="12" sm="6" class="mt-2 mb-3">
                              <div>
                                <select v-model="singleStudent.faculty">
                                  <option value="1">DIF</option>
                                  <option value="2">KIF</option>
                                  <option value="3">TTF</option>
                                  <option value="4">AXF</option>
                                </select>
                              </div></b-col
                            >
                            <b-col cols="12" class="mx-auto"
                              ><button class="button" type="submit">
                                Send Message
                              </button>
                            </b-col>
                          </b-row></b-col>
                      </form>
                    </b-modal>

                    <b-button v-b-modal.modal-center="`my-delete-modal-${student.id}`"
                      type="button"
                    >
                      <img src="../assets/trash.png"
                    /></b-button>
                    
                    <b-modal
                      class="modal"
                      :id="`my-delete-modal-${student.id}`"
                      centered
                      hide-footer
                      title="Delete Section"
                    >
                      <b-col cols="12">
                        <b-row class="d-flex justify-content-center">
                          <b-col cols="12" md="6" class="text-right"
                            ><button
                              class="delete-cancel"
                              @click="cancelStudent(student.id)"
                            >
                              Cancel
                            </button></b-col
                          >
                          <b-col cols="12" md="6" class="text-left"
                            ><button
                              class="delete-button"
                              @click="deleteStudent(student.id)"
                            >
                              Delete
                            </button></b-col
                          >
                        </b-row>
                      </b-col>
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
import SectionAdd from "../components/sectionAdd.vue";
export default {
  components: {
    SectionAdd,
  },
  data() {
    return {
      singleStudent: {},
    };
  },
  methods: {
    cancelStudent(id) {
      this.$bvModal.hide(`my-delete-modal-${id}`);
    },
    editStudent(id) {
      this.$bvModal.show(`my-edit-modal-${id}`);
      this.$http
        .get(`students/${id}/`)
        .then((result) => {
          console.log(result);
          this.singleStudent = result.data;
          // this.$store.dispatch("getStudents", result.data);
        })
        .catch((error) => {
          console.log(error);
        });
      this.getStudents();
    },
    saveStudent(id) {
      this.$http
        .put(`students/${id}/`, this.singleStudent)
        .then((result) => {
          console.log(result);
          // this.$store.dispatch("getStudents", result.data);
        })
        .catch((error) => {
          console.log(error);
        });
      this.$bvModal.hide(`my-edit-modal-${id}`);
    },
    getStudents() {
      this.$http.get("students/")
      .then((result) => {
          console.log(result);
          this.$store.dispatch("getStudents", result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteStudent(id) {
      console.log(id);
      this.$http
        .delete(`students/${id}/`)
        .then((res) => {
          this.getStudents();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.$bvModal.hide(`my-delete-modal-${id}`);
    },
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
.bgPrimary{
  background-color: #21bbd3;
}
button {
  outline: none;
  border: none;
  background-color: transparent;
}
.modal {
  display: block;
}
.delete-button {
  padding: 10px 20px;
  margin: 0 15px;
  background-color: rgb(182, 12, 12);
  color: white;
  border: 1px solid black;
  border-radius: 5px;
}
.delete-cancel {
  padding: 10px 20px;
  margin: 0 15px;
  background-color: rgb(54, 53, 53);
  color: white;
  border: 1px solid black;
  border-radius: 5px;
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
  padding: 10px 0;
  border-bottom: 2px solid #21bbdd;
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