<!-- index.vue -->
<template>
  <div>
    <header class="bg-gray-800 text-white py-4">
      <div class="container mx-auto text-center">
        <h1 class="text-4xl font-bold">Resep Nenek</h1>
        <p class="text-lg">Temukan dan coba resep makanan enak dari nenek!</p>
      </div>
    </header>

    <section class="py-8">
      <div class="container mx-auto">
        <h2 class="text-3xl font-semibold text-center mb-8">Makanan Kos</h2>

        <div class="relative w-full mx-auto overflow-hidden shadow-lg rounded-lg">
          <div ref="kosPhotoContainer" class="flex transition-transform duration-500 ease-in-out">
            <img v-for="(photo, index) in kosPhotos" :key="index" :src="photo" alt="Photo" class="w-full h-96 object-cover">
          </div>

          <div class="absolute inset-y-0 left-0 flex items-center">
            <button @click="prevKosPhoto" class="text-white text-2xl ml-4">&lt;</button>
          </div>

          <div class="absolute inset-y-0 right-0 flex items-center">
            <button @click="nextKosPhoto" class="text-white text-2xl mr-4">&gt;</button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-8 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-semibold text-center mb-8">Makanan Porsi Besar</h2>

        <div class="relative w-full mx-auto overflow-hidden shadow-lg rounded-lg">
          <div ref="besarPhotoContainer" class="flex transition-transform duration-500 ease-in-out">
            <img v-for="(photo, index) in besarPhotos" :key="index" :src="photo" alt="Photo" class="w-full h-96 object-cover">
          </div>

          <div class="absolute inset-y-0 left-0 flex items-center">
            <button @click="prevBesarPhoto" class="text-white text-2xl ml-4">&lt;</button>
          </div>

          <div class="absolute inset-y-0 right-0 flex items-center">
            <button @click="nextBesarPhoto" class="text-white text-2xl mr-4">&gt;</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kosCurrentIndex: 0,
      besarCurrentIndex: 0,
      kosPhotos: [
        "kosPhoto1.jpg",
        "kosPhoto2.jpg",
        "kosPhoto3.jpg",
        // Add more photo URLs as needed
      ],
      besarPhotos: [
        "besarPhoto1.jpg",
        "besarPhoto2.jpg",
        "besarPhoto3.jpg",
        // Add more photo URLs as needed
      ],
    };
  },
  methods: {
    nextKosPhoto() {
      if (this.kosCurrentIndex < this.kosPhotos.length - 1) {
        this.kosCurrentIndex++;
      } else {
        this.kosCurrentIndex = 0;
      }
      this.updatePhotoContainer("kos");
    },
    prevKosPhoto() {
      if (this.kosCurrentIndex > 0) {
        this.kosCurrentIndex--;
      } else {
        this.kosCurrentIndex = this.kosPhotos.length - 1;
      }
      this.updatePhotoContainer("kos");
    },
    nextBesarPhoto() {
      if (this.besarCurrentIndex < this.besarPhotos.length - 1) {
        this.besarCurrentIndex++;
      } else {
        this.besarCurrentIndex = 0;
      }
      this.updatePhotoContainer("besar");
    },
    prevBesarPhoto() {
      if (this.besarCurrentIndex > 0) {
        this.besarCurrentIndex--;
      } else {
        this.besarCurrentIndex = this.besarPhotos.length - 1;
      }
      this.updatePhotoContainer("besar");
    },
    updatePhotoContainer(type) {
      const containerRef = type === "kos" ? "kosPhotoContainer" : "besarPhotoContainer";
      const currentIndex = type === "kos" ? this.kosCurrentIndex : this.besarCurrentIndex;
      const translateValue = -currentIndex * this.$refs[containerRef].offsetWidth;
      this.$refs[containerRef].style.transform = `translateX(${translateValue}px)`;
    },
  },
  mounted() {
    setInterval(() => {
      this.nextKosPhoto();
      this.nextBesarPhoto();
    }, 3000);
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
