<template>
  <div class="start">
    <Header />
    <div class="container">
      <div class="row">
        <div class="form mx-auto mt-5">
          <InputType label="title" type="text" v-model="title" />
          <TextAreaInputType label="Description" v-model="description" />
        </div>
        <div class="submit mx-auto mt-4">
          <button @click="add" class="btn btn-primary">Create</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import InputType from "../components/input.vue";
import TextAreaInputType from "../components/TextAreaInput.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Header,
    InputType,
    TextAreaInputType,
  },
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    ...mapActions(["Add"]),
    async add() {
      if (this.User && this.User.id) {
        this.Add({
          title: this.title,
          description: this.description,
          userId: this.User.id,
        });
      }
      this.$toast.open({
        message: "Successfully added",
        duration: 10000,
        type: "success",
      });
      this.$router.push(`/Home/${this.User.id}`);
    },
  },
  computed: {
    ...mapGetters({ User: "user" }),
  },
};
</script>

<style>
</style>