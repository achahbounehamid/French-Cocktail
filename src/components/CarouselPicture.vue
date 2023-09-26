<!-- <template>
  <div class="carouselPicture"></div>
  <slot></slot>
  <button @click="prev">Prev</button>
  <button @click="next">Next</button>
</template>
<script>
export default {
  name: "CarouselPicture",
  data() {
    return {};
  },
  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
};
</script>
<style scoped lang="scss">
.carouselPicture {
  position: relative;
  width: 600px;
  height: 350px;
  overflow: hidden;
  //   background-color: greenyellow;
}
button .next,
.prev {
  position: absolute;
  height: 40px;
  width: 50px;
  top: calc(50% - 20px);
  background-color: rgb(0, 0, 0, 0.8);
  border: none;
  color: fff;
}
button:focus,
button:hover {
  outline: none;
  cursor: pointer;
}
.next {
  right: 0;
}
.prev {
  left: 0;
}
</style> -->
<!-- <template>
  <div class="drinks">
    <CocktailNomAlcol
      v-for="cocktail in cocktails"
      :key="cocktail.id"
      :strDrink="cocktail.strDrink"
      :strDrinkThumb="cocktail.strDrinkThumb"
      :idDrink="cocktail.idDrink"
    />
  </div>
  <div class="slide-carousel">
    <carousel @next="next" @prev="prev">
      <!-- <CarouselPicture></CarouselPicture> -->
      <carousel-slide
        <!-- v-for="(slide, index) in slides"
        :key="slide"
        :index="index"
        :visibleSlidePicture="visibleSlidePicture"
        :direction="direction" -->
      >
        <img :src="slide" />
      </carousel-slide>
    <!-- </carousel> -->
  </div>
</template>
<script>
import CocktailNomAlcol from "@/components/CocktailNomAlcol.vue";
import { getListNonAlcool } from "@/services/ApiCocktailDB.js";
import CarouselPicture from "@/components/CarouselPicture.vue";
import CarouselSlide from "@/components/CarouselSlide.vue";
export default {
  name: "HomePage",
  components: { CocktailNomAlcol, CarouselPicture, CarouselSlide },
  data() {
    return {
      cocktails: [],
      slides: [
        "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
        "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
        "https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg",
      ],
      visibleSlide: 0,
      direction: "left",
    };
  },
  computed: {
    slidesLen() {
      return this.slides.length;
    },
  },
  methods: {
    async fetchCocktail() {
      try {
        const response = await getListNonAlcool();
        const data = await response.json();
        this.cocktails = data.drinks;
      } catch (error) {
        console.error("Une erreur s'est produite : ", error);
      }
    },
    next() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
      this.direction = "left";
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      } else {
        this.visibleSlide--;
      }
      this.direction = "right";
    },
  },
  created() {
    this.fetchCocktail();
  },
};
</script>
<style scoped lang="scss">
.home {
  height: 650px;
}
p {
  color: green;
  font-size: 30px;
}
.drinks {
  width: 100%;
  height: 800px;
  display: flex;
  flex-wrap: wrap;
}
.slide-carousel {
  width: 100%;
  height: 500px;
  // background-color: red;
}
</style> -->
