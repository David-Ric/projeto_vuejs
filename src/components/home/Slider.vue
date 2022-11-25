
<template>
  <div>
    <transition-group  name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" class="photos" />
      </div>
    </transition-group>
    <!-- <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a> -->
  </div>
  </template>
  <script>
  export default {
    name: "Slider",
    data() {
      return {
        images: [
            "https://app.tallos.com.br/assets/img/carrousel-1.jpg",
            "https://app.tallos.com.br/assets/img/carrousel-2.jpg",
            "https://app.tallos.com.br/assets/img/carrousel-3.jpg",
            "https://app.tallos.com.br/assets/img/carrousel-4.jpg",

      ],
        timer: null,
        currentIndex: 0
      };
    },
    mounted: function() {
      this.startSlide();
    },
    methods: {
      startSlide: function() {
        this.timer = setInterval(this.next, 8000);
      },
      next: function() {
        this.currentIndex += 1;
      },
      prev: function() {
        this.currentIndex -= 1;
      }
    },
    computed: {
      currentImg: function() {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      }
    }
  };
  </script>
  <style scoped>
  .photos{
    width: 886px;
    height: 615px;
  }

</style>