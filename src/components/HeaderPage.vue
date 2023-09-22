<template>
  <header>
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <div class="search-container">
      <input type="text" placeholder="Chercher votre cocktail..." />
      <button type="submit">Rechercher</button>
    </div>
    <nav>
      <ul class="menu">
        <li><a href="/home">Menu</a></li>
        <img src="../assets/menu.png" alt="menu-burger" />
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "HeaderPage.vue",
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
    justify-content: space-between;
    align-items: center;
    div.logo img {
      height: 150px;
      width: 150px;
    }
    .search-container {
      display: flex;
      margin: 20px;
      width: 50%;
    }

    input[type="text"] {
      width: 70%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px 0 0 5px;
    }

    button {
      padding: 10px 15px;
      background-color: #007bff;
      border: none;
      border-radius: 0 5px 5px 0;
      color: white;
      cursor: pointer;
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
  .menu img {
    cursor: pointer;
    width: 50px;
    height: 50px;
  }
  .menu a {
    margin: 20px;
  }
}
</style>
