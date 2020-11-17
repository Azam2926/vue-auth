<template>
  <div>
    <h1>Login</h1>
    <form class="login" @submit.prevent="login">

      <label for="name">Username</label>
      <div>
        <input id="name" type="text" v-model="username" required autofocus>
      </div>

      <label for="password">Password</label>
      <div>
        <input id="password" type="password" v-model="password" required>
      </div>
      <hr/>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
    }
  },

  methods: {
    login: function () {
      let username = this.username
      let password = this.password
      this.$store.dispatch('login', { username, password }).
          then(() => this.$router.push('/')).
          catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
