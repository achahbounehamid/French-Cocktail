<template>
  <div class="footer">
    <p>© 2023 Tous droits réservés.</p>
    <div class="reseaux-sociaux">
      <span>suivez nous</span>
      <ul>
        <li><img src="../assets/facebook.png" alt="fb" /></li>
        <li><img src="../assets/instagram.png" alt="instagram" /></li>
        <li><img src="../assets/youtube.png" alt="youtube" /></li>
      </ul>
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
  background: linear-gradient(to left, #e6b800, #7dd4e8, #31e0a9);
  padding: 10px;
  display: flex;
  justify-content: space-between;

  img {
    width: 50px;
    height: 50px;
  }

  p {
    font-size: 30px;
    line-height: 52px;
    text-align: center;
    font-family: "Quicksand";
    color: #0f0f0f;
  }
}

.reseaux-sociaux {
  display: flex;
  align-items: center;
}
.reseaux-sociaux ul {
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
}
span {
  font-size: 20px;
  color: #0f0f0f;
}
@media screen and (max-width: 680px) {
  img {
    width: 30px;
    height: 30px;
  }
  .footer p {
    font-size: 18px;
  }
}
@media screen and (max-width: 550px) {
  .footer p {
    font-size: 16px;
  }
  span {
    font-size: 16px;
  }
  img {
    width: 20px;
    height: 20px;
  }
}
</style>
