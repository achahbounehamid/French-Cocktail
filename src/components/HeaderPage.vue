<template>
  <header>
    <div class="menu-icon" @click="toggleMenu">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="menu">
      <ul>
        <li><a href="#">Accueil</a></li>
        <li>
          <router-link
            :to="{
              name: 'cocktailListIngredient',
              // params: { ingredient: 'VotreIngredient' },
            }"
            >Cocktails par Ingrédient</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'cocktailCategory',
              // params: { ingredient: 'VotreIngredient' },
            }"
            >Cocktails par Catégorie</router-link
          >
        </li>
      </ul>
    </div>
    <div class="titre">
      <h1>Fren-Cocktail</h1>
    </div>
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" />
    </div>
  </header>
</template>
<script>
export default {
  name: "HeaderPage",
  components: {},
  data() {},
  methods: {
    toggleMenu() {
      var menu = document.querySelector(".menu");
      var menuIcon = document.querySelector(".menu-icon");
      menu.classList.toggle("open");
      menuIcon.classList.toggle("open");
    },
  },
};
</script>
<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  header {
    background-color: #9fbc79;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    div.logo img {
      height: 150px;
      width: 150px;
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
    }

    nav a {
      text-decoration: none;
      color: #42b983;
    }
  }

  .menu {
    display: none;
  }

  .menu-icon {
    cursor: pointer;
    margin-right: 20px;
  }

  .menu-icon div {
    width: 40px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
  }

  .menu.open {
    display: block;
  }

  .menu-icon.open div:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .menu-icon.open div:nth-child(2) {
    opacity: 0;
  }

  .menu-icon.open div:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }

  .menu ul {
    list-style: none;
    padding: 0;
  }

  .menu li {
    margin: 10px 0;
  }

  .menu a {
    text-decoration: none;
    font-size: 18px;
  }
}
</style>
