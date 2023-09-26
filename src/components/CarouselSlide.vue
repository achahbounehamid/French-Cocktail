<!-- <template>
  <transition :name="direction" mode="in-out">
    <div v-show="visibleSlide === index" class="carousel-slide">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: "CarouselSlide",
  props: ["visibleSlide", "index", "direction"],
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.carousel-slide img {
  width: 50px;
  height: 60px;
}
.left-leave-active {
  animation: leftInAnimation 0.4s ease-in-out;
}
.left-leave-active {
  animation: leftOutAnimation 0.4s ease-in-out;
}
@keyframes letInAnimation {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
@keyframes letOutAnimation {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}
.right-leave-active {
  animation: rightInAnimation 0.4s ease-in-out;
}
.right-leave-active {
  animation: rightOutAnimation 0.4s ease-in-out;
}
@keyframes letInAnimation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
@keyframes letOutAnimation {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(+100%);
  }
}
</style> -->
