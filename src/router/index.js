import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
// import Contact from "../pages/Contact.vue";
// import Help from "../pages/Help.vue";
import NewOne from "../pages/NewOne.vue";
import NewTwo from "../pages/NewTwo.vue";
import ApiExp from "../pages/api.vue"
import Single from "../pages/single.vue"
import Task from "../pages/task.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home 
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // component:'../components/sectionMake.vue'
  //   component: () => import(/* webpackChunkName: "about" */ "../pages/About.vue")
  // },
  // {
  //   path: "/contact",
  //   name: "Contact",
  //   component: Contact
  // },
  // {
  //   path: "/help",
  //   name: "Help",
  //   component: Help
  // },
  {
    path: "/newone",
    name: "NewOne",
    component: NewOne
  },
  {
    path: "/newtwo",
    name: "NewTwo",
    component: NewTwo
  },
  {
    path: "/api",
    name: "ApiExp",
    component: ApiExp
  },
  {
    path: "/single",
    name: "Single",
    component: Single
  },
{
  path:"/task",
  name:"Task",
  component:Task
}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
