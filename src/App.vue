<template>
  <div id="app">
    <v-app dark>
      <v-toolbar color="black">
        <v-spacer></v-spacer>
        <v-toolbar-title>
          <img src="https://m.cdn.sera.to/logos/logo.svg" alt="Logo Serato" class="logo">
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.logo{
  width: 100px;
}
</style>
