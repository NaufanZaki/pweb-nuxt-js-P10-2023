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
