<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      <span v-if="isLoggedIn"> | <router-link @click.native="logout" to="#">Logut</router-link></span>
      <span v-if="!isLoggedIn"> | <router-link to="/login">Login</router-link></span>
      <span v-if="!isLoggedIn"> | <router-link to="/register">Register</router-link></span>
      <span v-if="isLoggedIn"> | <router-link to="/secure">Secure Page</router-link></span>
    </div>
    <router-view/>
  </div>
</template>


<script>
export default {
  name : 'App',
  computed: {
    isLoggedIn: function () { return this.$store.getters.isLoggedIn},
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/login')
      })
    },
  },

  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      // eslint-disable-next-line no-unused-vars
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
        }
        throw err
      })
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
