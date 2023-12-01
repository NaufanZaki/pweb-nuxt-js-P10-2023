<template>
  <div :class="{ 'dark': darkMode }" class="flex flex-col min-h-screen bg-stone-700 dark:bg-gray-800">

  <div :class="{ 'dark': darkMode }" class="flex flex-col min-h-screen bg-stone-700 dark:bg-gray-800">


    <!-- Navbar: A responsive navigation bar with dark mode functionality -->
    <nav :class="{ 'dark': darkMode }" class="bg-white  border-b border-gray-300 shadow p-4 fixed w-full z-20 opacity-90 hover:opacity-100 transition-opacity rounded-b-lg">
          <!-- Navbar container -->
          <div class="container mx-auto flex items-center justify-between">
            <!-- Logo and site name -->
            <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://img.freepik.com/premium-photo/cartoon-old-woman-cooking-pot-soup-generative-ai_958098-16578.jpg?w=1380" class="h-12 w-12 rounded-full" alt="Resep Nenek Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Resep Nenek</span>
            </NuxtLink>

            <!-- Toggle button for small screens -->
            <button @click="toggleNav" class="lg:hidden text-gray-800 dark:text-gray-200 focus:outline-none">
              <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>

            <!-- Dropdown menu for small screens -->
            <div v-if="navOpen && !isLargeScreen" class="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-300 shadow p-2 mt-2 rounded-b-lg">
              <NuxtLink to="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</NuxtLink>
              <NuxtLink to="/blog" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Recipe</NuxtLink>
              <NuxtLink to="/about" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</NuxtLink>
            </div>

            <!-- Navbar links for larger screens -->
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NuxtLink to="/" class="block py-2 px-3 text-gray-500  hover:text-orange-500 rounded md:bg-transparent md:p-0 dark:text-white  dark:hover:text-orange-500" aria-current="page">Home</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/blog" class="block py-2 px-3 text-gray-500  hover:text-orange-500 rounded md:bg-transparent md:p-0 dark:text-white  dark:hover:text-orange-500" aria-current="page">Recipe</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/about" class="block py-2 px-3 text-gray-500  hover:text-orange-500 rounded md:bg-transparent md:p-0 dark:text-white  dark:hover:text-orange-500" aria-current="page">About</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <!-- Dark mode button -->
        <button @click="toggleDarkMode" class=" z-50 fixed bottom-4 right-4 text-gray-800 dark:text-gray-200 focus:outline-none bg-white dark:bg-gray-900 border border-gray-300 shadow p-2 rounded-full hover:bg-gray-100 hover:shadow-md transition duration-300">
          <span>{{ darkMode ? 'Light Mode' : 'Dark Mode' }}</span>
        </button>

        <!-- Page content -->
        <div :class="{ 'dark': darkMode }" class="flex-1 mt-16 bg-stone-300">
          <slot />
          <div class="container mx-auto p-4">
            <!-- Your page content goes here -->
          </div>
        </div>

        <!-- Footer -->
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
      navOpen: false, // Track whether the mobile navigation is open or closed
      isLargeScreen: true, // Track whether the screen is large (for dropdown)
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      console.log('Dark mode toggled:', this.darkMode);
    },
    toggleNav() {
      this.navOpen = !this.navOpen;
      console.log('Navigation toggled:', this.navOpen);
    },
    checkScreenSize() {
      // Update isLargeScreen based on the screen width
      this.isLargeScreen = window.innerWidth >= 1024;
      console.log('Screen size updated. isLargeScreen:', this.isLargeScreen);
    },
  },

  mounted() {
    // Check the initial screen size
    this.checkScreenSize();
    // Add a listener to update isLargeScreen on window resize
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    // Remove the resize listener to avoid memory leaks
    window.removeEventListener('resize', this.checkScreenSize);
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

/* Add new styles to explicitly set display property */
ul.nav-links {
  display: flex; /* Default display for larger screens */
}

ul.nav-links.hidden {
  display: none; /* Hide on small screens or when dropdown is closed */
}

ul.nav-links.flex {
  display: flex; /* Show on small screens when dropdown is open */
}

.dark .flex-1 {
  background-color: #333333; /* Change the color to your desired dark mode background color */
  color: #817979; /* Change the text color to white or a suitable color */
}
</style>
