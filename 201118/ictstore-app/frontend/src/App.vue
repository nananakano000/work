<template>
  <v-app>
    <div id="app">
      <!-- <img src="./assets/logo.png"> -->
      <router-view/>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 30px;
  margin-left: 60px;
  margin-right: 60px;
}
</style>
