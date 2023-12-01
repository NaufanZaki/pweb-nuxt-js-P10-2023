<!-- about.vue -->
<template>
  <div class="container mx-auto mt-8 text-center" data-aos="fade-up" data-aos-duration="1000">
    <h1 class="text-4xl font-bold mb-4">Resep Nenek</h1>
    <p class="text-lg text-gray-600">We insist on creating a user-friendly recipe website that brings you the best culinary experiences. Explore our talented contributors below!</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <author-card v-for="(author, index) in authors" :key="index" :author="author" />
    </div>
  </div>
</template>

<script>
import AuthorCard from '~/components/AuthorCard.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default {
  mounted() {
    
    AOS.init();
    
  
  },
  components: {
    AuthorCard,
  },

  data() {
    return {
      authors: [
        {
          name: 'Naufan Zaki Luqmanulhakim',
          studentId: '5027221065',
          photo:'https://img.freepik.com/free-photo/render-pig-dressing-black-suite-with-sunglasses-cristal-office-like-boss_1409-5075.jpg?t=st=1701265305~exp=1701268905~hmac=913e6e1a9f84526d951e6aa7d4b18ced5f675da9b2764076b63702af5137f12c&w=1380',
          desc: 'As a vlogger english is my second language'
        },
        {
          name: 'Rahmad Aji Wicaksono',
          studentId: '50272210**',
          photo:'https://img.freepik.com/premium-photo/man-suit-with-bear-head-it_771335-52369.jpg?w=1380',
          desc: 'Romeo dan juliet'
        },
        {
          name: 'Dhimaz',
          studentId: '50272210**',
          photo:'https://img.freepik.com/free-photo/cat-hoodie_1268-27012.jpg?t=st=1701265436~exp=1701269036~hmac=6e3431b35dd02b66b6fb33eeee78b44a2119e387259dee939d4a9c374dd36b88&w=1800',
          desc: 'Spotify premium'
        },
        // Add more authors as needed
      ],
    };
  },
};
</script>
<style scoped>
body {
  font-family: 'Poppins', sans-serif;
}

/* Additional styling for the text above the cards */
.text-center {
  text-align: center;
}

.text-lg {
  max-width: 600px; /* Adjust the maximum width as needed */
  margin: 0 auto;
}

/* Additional styling for the grid layout */
.grid {
  margin-top: 2rem;
}

[data-aos="fade-right"].aos-animate {
  opacity: 1;
}

[data-aos="fade-left"] {
  opacity: 0;
  transition-property: opacity;
  will-change: opacity;
}

[data-aos="fade-left"].aos-animate {
  opacity: 1;
}

</style>




