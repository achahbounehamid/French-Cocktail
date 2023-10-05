<template>
  <section id="list">
    <figure>
      <router-link
        :to="{
          name: 'CocktailViews',
          params: { idDrink: id },
        }"
      >
        <img :src="img" :alt="name" />
      </router-link>

      <figcaption>
        <h3>{{ name }}</h3>
      </figcaption>
    </figure>
  </section>
</template>

<script>
export default {
  name: "listCocktail",
  props: {
    name: String,
    img: String,
    id: Number,
  },
};
</script>
