<template>
  <div>
    <h1>Register</h1>
    <div class="errors">
      <ul v-if="errors">
        <li v-for="(error, index) in errors" :key="index">{{ error[0] }}</li>
      </ul>
    </div>
    <form @submit.prevent="register">
      <label for="name">Username</label>
      <div>
        <input id="name" type="text" v-model="username" required autofocus>
      </div>

      <label for="password">Password</label>
      <div>
        <input id="password" type="password" v-model="password" required>
      </div>

      <label for="password-confirm">Confirm Password</label>
      <div>
        <input id="password-confirm" type="password" v-model="password_repeat" required>
      </div>
      <hr/>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      password_repeat: '',
      errors: {},
    }
  },

  methods: {
    register: function () {
      let data = {
        username: this.username,
        password: this.password,
        password_repeat: this.password_repeat,
      }
      this.$store.dispatch('register', data).
          then(() => this.$router.push('/')).
          catch(err => this.errors = err.response.data.errors)
    },
  },
}
</script>

<style scoped>

</style>
