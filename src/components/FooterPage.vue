<template>
  <div class="footer">
    <p>French Cocktail</p>
    <div class="reseaux-sociaux">
      <img src="../assets/facebook.png" alt="fb" />
      <img src="../assets/instagram.png" alt="instagram" />
      <img src="../assets/youtube.png" alt="youtube" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterPage.vue",
};
</script>

<style scoped lang="scss">
.footer {
  background-color: #9fbc79;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  img {
    width: 50px;
    height: 50px;
  }

  p {
    color: black;
  }
}
.reseaux-sociaux {
  display: flex;
 
}
</style>
