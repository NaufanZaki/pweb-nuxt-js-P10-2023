<template>
    <div class="container mx-auto mt-8">
      <h1 class="text-4xl font-bold text-center mb-8">About Us</h1>
  
      <div class="flex justify-around">
        <MemberCard
          name="John Doe"
          role="Founder"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="john.jpg"
        />
  
        <MemberCard
          name="Jane Smith"
          role="Designer"
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          image="jane.jpg"
        />
  
        <MemberCard
          name="Bob Johnson"
          role="Developer"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          image="bob.jpg"
        />
      </div>
    </div>
  </template>
  
  <script>
  import MemberCard from "@/components/MemberCard.vue"; // Assuming you have a MemberCard component
  
  export default {
    components: {
      MemberCard,
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  