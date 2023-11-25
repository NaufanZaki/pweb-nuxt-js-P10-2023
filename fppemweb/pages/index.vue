<template>
  <div>
    <h1 class="text-4xl font-bold text-center mt-8 mb-4">Resep Nenek</h1>
    <h2 class="text-2xl font-semibold text-center mb-8">Makanan Kos</h2>
    <div class="w-1/2 mx-auto overflow-hidden shadow-lg rounded-lg">
      <div ref="photoContainer" class="flex transition-transform duration-500 ease-in-out">
        <img v-for="(photo, index) in photos" :key="index" :src="photo" alt="Photo" class="w-full h-96 object-cover">
        <!-- Adjusted the height to h-96 for even larger photos -->
      </div>

      <div class="absolute top-1/2 transform -translate-y-1/2 flex">
        <button @click="prevPhoto" class="text-white text-2xl mr-4">&lt;</button>
        <button @click="nextPhoto" class="text-white text-2xl">&gt;</button>
      </div>
    </div>
    <br>
    <h2 class="text-2xl font-semibold text-center mb-8">Makanan Porsi Besar</h2>
    <div class="w-1/2 mx-auto overflow-hidden shadow-lg rounded-lg">
      <div ref="photoContainer" class="flex transition-transform duration-500 ease-in-out">
        <img v-for="(photo, index) in photos" :key="index" :src="photo" alt="Photo" class="w-full h-96 object-cover">
        <!-- Adjusted the height to h-96 for even larger photos -->
      </div>

      <div class="absolute top-1/2 transform -translate-y-1/2 flex">
        <button @click="prevPhoto" class="text-white text-2xl mr-4">&lt;</button>
        <button @click="nextPhoto" class="text-white text-2xl">&gt;</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      photos: [
        "photo1.jpg",
        "photo2.jpg",
        "photo3.jpg",
        "photo1.jpg",
        "photo2.jpg",
        "photo3.jpg",
        // Add more photo URLs as needed
      ],
    };
  },
  methods: {
    nextPhoto() {
      if (this.currentIndex < this.photos.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      this.updatePhotoContainer();
    },
    prevPhoto() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.photos.length - 1;
      }
      this.updatePhotoContainer();
    },
    updatePhotoContainer() {
      const translateValue = -this.currentIndex * this.$refs.photoContainer.offsetWidth;
      this.$refs.photoContainer.style.transform = `translateX(${translateValue}px)`;
    },
  },
  mounted() {
    setInterval(() => {
      this.nextPhoto();
    }, 3000);
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
