<template>
  <div class>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand d-flex" href="#">
          <img
            src="@/assets/Images/logo.jpg"
            alt="logo"
            class="d-inline-block align-text-top logo-image"
          />
          <p class="m-auto logo-title">Gemini</p>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Content', params: { userId: this.User.id }}"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Docs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">About us</a>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ path: `createpost/${this.User.id}` }"
                >Add Blog</router-link
              >
            </li>
          </ul>

          <div class="d-flex buttonContainer" v-if="authenticated === false">
            <router-link to="/">
              <button type="button" class="btn btn-light">Login</button>
            </router-link>
            <router-link to="/Signup">
              <button type="button" class="btn signup">Sign up</button>
            </router-link>
          </div>
          <div class="d-flex buttonContainer" v-if="authenticated === true">
            <router-link to="/">
              <button @click="logout" type="button" class="btn btn-light">
                Logout
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapActions(["Logout"]),
    async logout() {
      await this.Logout();
      this.$router.push("/login");
    },
  },
  computed: {
    authenticated() {
      let authenticated =
        this.User && this.User.id == null
          ? false
          : this.User && this.User.id
          ? true
          : undefined;
      return authenticated;
    },
    ...mapGetters({ userPosts: "posts", User: "user" }),
  },
};
</script>

<style scoped>
</style>
