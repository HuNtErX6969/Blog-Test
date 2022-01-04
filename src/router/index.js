import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Login",
      component: () => import("@/components/Auth/Login"),
    },
    {
      path: "/Signup",
      name: "Signup",
      component: () => import("@/components/Auth/Signup"),
    },
    {
      path: "/Home/:Userid",
      name: "Content",
      component: () => import("@/pages/Content"),
    },
    {
      path: "/Home/createpost/:Userid",
      name: "createpost",
      component: () => import("@/components/createpost"),
    },
    {
      path: "/BlogPosts",
      name: "BlogPosts",
      component: () => import("@/components/BlogPosts"),
    },
  ],
});
