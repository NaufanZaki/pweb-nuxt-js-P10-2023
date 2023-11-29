<!-- about.vue -->
<template>
  <div class="container mx-auto mt-8">
    <author-card v-for="(author, index) in authors" :key="index" :author="author" />
  </div>
</template>

<script>
import AuthorCard from '~/components/AuthorCard.vue';

export default {
  components: {
    AuthorCard,
  },
  data() {
    return {
      authors: [
        {
          name: 'Naufan Zaki Luqmanulhakim',
          studentId: '5027221065',
        },
        {
          name: 'Rahmad Aji Wicaksono',
          studentId: '50272210**',
        },
        {
          name: 'Dhimaz',
          studentId: '50272210**',
        },
        // Add more authors as needed
      ],
    };
  },
};
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>

