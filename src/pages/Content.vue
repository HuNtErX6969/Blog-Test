<template>
  <div class="container">
    <Header />
    <div class="section-title">
      <p>My Posts</p>

      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          v-for="post in userPosts"
          :key="post.id"
        >
          <LatestPosts :title="post.title" :description="post.description" />
        </div>
      </div>
    </div>
    <div class="section-title next-section">
      <p>Latest Posts</p>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <MyPosts />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <MyPosts />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <MyPosts />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import LatestPosts from "../components/LatestPosts.vue";
import MyPosts from "../components/MyPosts.vue";
import { mapGetters } from "vuex";
export default {
  name: "Content",
  components: {
    Header,
    LatestPosts,
    MyPosts,
  },
  data() {
    return {};
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
