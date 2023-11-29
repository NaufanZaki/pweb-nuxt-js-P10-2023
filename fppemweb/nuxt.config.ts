// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/transitions.css'], // Combine CSS files into a single array
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pageTransition: {
    name: 'fade', // Specify the name of the transition (you can customize this)
    mode: 'out-in', // Set the transition mode
  },
});
