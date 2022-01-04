<template>
  <div class="loginContainer">
    <div class="contact-wrapper">
      <header class="login-cta">
        <h2>Account Signup</h2>
      </header>
      <form @submit.prevent="register()">
        <div class="form-row">
          <input
            type="text"
            :class="`${errors.name ? 'is-invalid' : ''}`"
            v-model="name"
          />
          <span>Name</span>
          <p class="invalid-feedback">{{ errors.name }}</p>
        </div>
        <div class="form-row">
          <input
            type="email"
            :class="`${errors.email ? 'is-invalid' : ''}`"
            v-model="email"
          />
          <span>Email Address</span>
          <p class="invalid-feedback">{{ errors.email }}</p>
        </div>
        <div class="form-row">
          <input
            type="password"
            :class="`${errors.password ? 'is-invalid' : ''}`"
            v-model="password"
            autocomplete="on"
          />
          <span>Password</span>
          <p class="invalid-feedback">{{ errors.password }}</p>
        </div>
        <div class="form-row">
          <input
            type="password"
            :class="`${errors.confirmpassword ? 'is-invalid' : ''}`"
            v-model="confirmpassword"
            autocomplete="on"
          />
          <span>Confirm Password</span>
          <p class="invalid-feedback">{{ errors.confirmpassword }}</p>
        </div>
        <div class="form-row">
          <button type="submit">Register Now !</button>
        </div>
      </form>
      <div class="alreadyMem">
        <p>
          Already a member,
          <router-link to="/">Login here</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import validateRegisterInput from "@/validation/validateRegisterInput";
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      errors: {},
      users: [],
    };
  },
  methods: {
    ...mapActions(["Signup"]),
    register() {
      let user = {
        userId: (Math.random() + 1).toString(36).substring(7),
        name: this.name,
        email: this.email,
        password: this.password,
        confirmpassword: this.confirmpassword,
      };
      const { isInvalid, errors } = validateRegisterInput(user);
      if (isInvalid) {
        this.errors = errors;
      } else {
        this.users.push(user);
        this.Signup(this.users).then(() => {
          this.$router.push(`/`);
        });
        this.$toast.open({
          message: "Successfully added",
          duration: 10000,
          type: "success",
        });
      }
    },
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

form {
  margin: 2em 0;
}
form > .form-row {
  display: flex;
  margin: 1em 0;
  position: relative;
  flex-direction: column;
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
.invalid-feedback {
  color: #eb3434;
  margin-left: 5px;
}
form > .form-row > input,
form > .form-row > button {
  border-radius: 0.5em;
  font-family: inherit;
  padding: 0.7em;
  width: 100%;
}
form > .form-row > input {
  font-weight: 300;
  transition: 100ms ease all;
  width: 100%;
}
form > .form-row > input[type="text"],
form > .form-row > input[type="email"],
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