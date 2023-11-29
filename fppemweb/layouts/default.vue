<template>
  <div :class="{ 'dark': darkMode }" class="flex flex-col min-h-screen">
    <!-- Navbar -->
    <nav :class="{ 'dark': darkMode }" class="bg-white border-b border-gray-300 shadow p-4 fixed w-full z-20 opacity-90 hover:opacity-100 transition-opacity rounded-b-lg">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-gray-800 hover:text-gray-600 font-bold text-lg">P10</NuxtLink>
        <div class="flex items-center space-x-4">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/blog" class="nav-link">Resep</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          <button @click="toggleDarkMode" class="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full">
            {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="flex-1 mt-16">
      <slot />
      <div class="container mx-auto p-4">
        <!-- Your content here -->
      </div>
    </div>

    <!-- Footer -->
    <footer :class="{ 'dark': darkMode }" class="w-full bg-white rounded-lg shadow mt-auto">
      <div class="max-w-screen-xl mx-auto px-4 pb-6">
        <hr class="py-3 border-gray-300 sm:mx-auto dark:border-gray-700" />
        <span class="block text-sm text-center text-gray-500 dark:text-gray-400">
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
.dark nav {
  background-color: #1a1a1a;
  color: #ffffff;
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
</style>