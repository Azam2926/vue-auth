<template>
  <div>
    <h4>Register</h4>
    <form @submit.prevent="register">
      <label for="name">Name</label>
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
          catch(err => console.log(err))
    },
  },
}
</script>

<style scoped>

</style>
