<template>
  <div class="cocktail">
    <p>French cocktail</p>
    <div class="d-flex align-center flex-colum pa-6">
      <v-card width="70%">
        <v-carousel>
          <v-carousel-item></v-carousel-item>
          <v-carousel-item></v-carousel-item>
          <v-carousel-item></v-carousel-item>
        </v-carousel>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "CocktailVue",
};
</script>
<style scoped lang="scss">
.cocktail {
  height: 650px;
}
p {
  color: green;
  font-size: 30px;
}
.d-flex align-center flex-colum pa-6
</style>
