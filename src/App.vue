<template>
  <div id="app">
    <HeaderPage />
    <!-- Autres contenus de votre application -->
    <nav>
      <router-link to="/">Accueil</router-link> |
      <router-link to="/cocktail">Cocktails</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view />
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from "./components/HeaderPage.vue";
import FooterPage from "./components/FooterPage.vue";

export default {
  components: {
    HeaderPage,
    FooterPage,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
