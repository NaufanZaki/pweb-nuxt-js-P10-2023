<template>
  <div :class="{ 'dark': darkMode }" class="flex flex-col min-h-screen bg-stone-700 dark:bg-gray-800">
    <nav :class="{ 'dark': darkMode }" class="bg-white dark:bg-gray-900 border-b border-gray-300 shadow p-4 fixed w-full z-20 opacity-90 hover:opacity-100 transition-opacity rounded-b-lg">
      <div class="container mx-auto flex items-center justify-between">
        <!-- logo -->
        <NuxtLink to="/" class="transition duration-300 ease-in-out transform hover:scale-105">
          <img src="https://img.freepik.com/free-vector/clipart-cute-chef-selling-soft-bread-bakery-shop-vector-character-people-design_40876-3294.jpg?w=1380&t=st=1701330291~exp=1701330891~hmac=59e02229c1e691168d0e19eb4a6eb31d2ec747038483e10fcb3373bd2141d660" alt="Resep Nenek" class="h-16 w-auto rounded-full border-2 border-gray-300 p-1" />
        </NuxtLink>
        <!-- rest of the navbar -->
        <ul class="flex items-center space-x-4">
          <NuxtLink to="/" class="nav-link hover:bg-gray-200 p-2 rounded-md">Home</NuxtLink>
          <NuxtLink to="/blog" class="nav-link hover:bg-gray-200 p-2 rounded-md">Resep</NuxtLink>
          <NuxtLink to="/about" class="nav-link hover:bg-gray-200 p-2 rounded-md">About</NuxtLink>
          <button @click="toggleDarkMode" class="flex items-center justify-center bg-gray-800 text-white p-2 rounded-full">
            <span class="ml-2">{{ darkMode ? 'Light Mode' : 'Dark Mode' }}</span>
          </button>
        </ul>
      </div>
    </nav>
    <br>
    <br>
    <div class="flex-1 mt-16 bg-stone-300">
      <slot />
      <div class="container mx-auto p-4 ">
        <!-- Your page content goes here -->
      </div>
    </div>

    <footer :class="{ 'dark': darkMode }" class="w-full bg-stone-700 dark:bg-gray-900 rounded-lg shadow mt-auto">
      <div class="max-w-screen-xl mx-auto px-4 py-6">
        <hr class="py-3 border-gray-100 dark:border-gray-700" />
        <span class="block text-sm text-center text-gray-100">
          © 2023
          <NuxtLink to="/" class="hover:underline">P10</NuxtLink>.
          Teknologi Informasi ITS.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  layout: 'default', // Use the 'default' layout
  head() {
    return {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap',
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: true,
            },
        ],
    };
},

  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
};
</script>

<style scoped>
body {
  font-family: 'Poppins', sans-serif;
}

.dark nav {
  background-color: #1a1a1a;
  color: #ffffff;
  @apply shadow-sm; /* Use @apply to apply Tailwind CSS classes */
}

.dark ::v-deep a {
  color: #ffffff;
}

.dark body {
  background-color: #1a1a1a;
  color: #ffffff;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .page-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Apply Poppins font to specific elements */
h1, h2, h3, h4, h5, h6, p {
  font-family: 'Poppins', sans-serif;
}

/* Example: Apply Poppins font to all text in the page */
.container,
.nav-link,
.text-sm {
  font-family: 'Poppins', sans-serif;
}
</style>

