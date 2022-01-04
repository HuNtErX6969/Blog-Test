<template>
  <div class="loginContainer">
    <div class="contact-wrapper">
      <header class="login-cta">
        <h2>Account Login</h2>
      </header>
      <form @submit.prevent="login()">
        <div class="form-row">
          <input v-model="email" type="text" required />
          <span>Username or Email</span>
        </div>
        <div class="form-row">
          <input v-model="password" type="password" required />
          <span>Password</span>
        </div>
        <div class="form-row"></div>
        <div class="form-row">
          <button type="submit">Login to your Account!</button>
        </div>
      </form>
      <div class="alreadyMem">
        <p class="text-muted">
          Not a member,
          <router-link to="/Signup">Register here</router-link>
        </p>
      </div>
      <div class="socials-wrapper">
        <header>
          <h2>Login with your Social Account</h2>
        </header>
        <ul>
          <li>
            <a href="#" class="facebook">
              <i class="fa fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="#" class="twitter">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" class="twitch">
              <i class="fa fa-twitch"></i>
            </a>
          </li>
          <li>
            <a href="#" class="youtube">
              <i class="fa fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    ...mapActions(["Signup"]),
    login() {
      console.log("hii");
      if (
        this.email === this.User.email &&
        this.password === this.User.password
      ) {
        console.log("pass");
        this.$router.push(`/Home/${this.User.id}`);
      } else {
        this.$toast.open({
          message: "failed email or password wrong",
          duration: 10000,
          type: "error",
        });
        console.log("failed");
      }
    },
  },
  computed: {
    ...mapGetters({ User: "user" }),
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.loginContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.contact-wrapper {
  background: #fff;
  border-radius: 0.75em;
  padding: 2em;
  width: 25em;
}
.login-cta > h2 {
  color: #3e3f5e;
  font-size: 1.75rem;
  text-align: center;
}
.alreadyMem {
  display: flex;
  justify-content: flex-end;
}

.socials-wrapper > header > h2 {
  background: #fff;
  color: #3e3f5e;
  font-size: 1rem;
  position: relative;
  text-align: center;
  z-index: 10;
}
.socials-wrapper > header > h2:after,
.socials-wrapper > header > h2:before {
  background: #d3d3e2;
  content: "";
  display: block;
  height: 0.1em;
  position: absolute;
  top: 50%;
  transform: translatey(-50%);
  width: 10.5%;
}
.socials-wrapper > header > h2:after {
  right: 0;
}
.socials-wrapper > header > h2:before {
  left: 0;
}
.socials-wrapper > ul {
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;
}
.socials-wrapper > ul > li {
  margin: 0.5em;
}
.socials-wrapper > ul > li > a {
  align-items: center;
  border-radius: 0.5em;
  color: #fff;
  display: flex;
  height: 2em;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  transition: all 300ms ease;
  width: 2em;
}
.socials-wrapper > ul > li > a.facebook {
  background-color: #3763d2;
}
.socials-wrapper > ul > li > a.twitter {
  background-color: #1abcff;
}
.socials-wrapper > ul > li > a.twitch {
  background-color: #7b5dfa;
}
.socials-wrapper > ul > li > a.youtube {
  background-color: #fd434f;
}
.socials-wrapper > ul > li > a:hover {
  transform: translatey(-0.25em);
}
form {
  margin: 2em 0;
}
form > .form-row {
  display: flex;
  margin: 0.75em 0;
  position: relative;
}
form > .form-row > span {
  background: #fff;
  color: #adafca;
  display: inline-block;
  font-weight: 400;
  left: 1em;
  padding: 0 0.5em;
  position: absolute;
  pointer-events: none;
  transform: translatey(-50%);
  top: 50%;
  transition: all 300ms ease;
  user-select: none;
}
form > .form-row > input,
form > .form-row > button {
  border-radius: 0.5em;
  font-family: inherit;
  padding: 1em 0.5em;
  width: 100%;
}
form > .form-row > input {
  font-weight: 500;
  transition: 100ms ease all;
  width: 100%;
}
form > .form-row > input[type="text"],
form > .form-row > input[type="password"] {
  border: 0.075em solid #ddd;
}
form > .form-row > input:valid + span {
  top: 0;
  font-size: 0.9rem;
}
form > .form-row > input:invalid + span {
  top: 50%;
}
form > .form-row > input:focus + span {
  top: 0;
}
form > .form-row > input:required {
  box-shadow: none;
}
form > .form-row > input:focus {
  border-color: #63b476;
  outline: none;
}
form > .form-row > input:focus:invalid {
  box-shadow: none;
  top: 50%;
}
form > .form-row > input:focus:valid {
  top: 0;
}
form > .form-row > button {
  background-color: #63b476;
  border: 0.1em solid #63b476;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  transition: all 300ms ease;
}
form > .form-row > button:focus {
  border: 0.1em solid #63b476;
  outline: none;
}
form > .form-row > button:hover {
  background-color: #59a069;
}
</style>