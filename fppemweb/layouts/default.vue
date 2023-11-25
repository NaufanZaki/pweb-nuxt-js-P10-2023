<template>
    <div class="flex flex-col min-h-screen">
      <nav class="bg-white border-b border-gray-300 shadow p-4">
        <NuxtLink to="/" class="text-gray-800 mr-4 hover:text-gray-600">Home</NuxtLink>
        <NuxtLink to="/resep" class="text-gray-800 mr-4 hover:text-gray-600">Resep</NuxtLink>
        <NuxtLink to="/about" class="text-gray-800 mr-4 hover:text-gray-600">About</NuxtLink>
      </nav>
  
      <div class="flex-1">
        <br />
        <slot />
        <!-- For example, you can add a div with some content -->
        <div class="container mx-auto p-4">
          <!-- Your content here -->
        </div>
      </div>
  
      <footer class="w-full bg-white rounded-lg shadow mt-auto">
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