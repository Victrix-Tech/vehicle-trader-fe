<template>
    <nav class="bg-[#2F4157] p-4 fixed bottom-0 w-full flex justify-around items-center rounded-t-md lg:hidden ">
      <router-link
        to="/dashboard"
        :class="['flex flex-col items-center', isActive('/vehiclesale') ? 'bg-[#CFB680] rounded-full p-2' : '']"
      >
        <img src="../assets/footerMob/dashboard.png" alt="Dashboard" class="w-8 h-8" />
      </router-link>
      <router-link
        to="/vehiclesale"
        :class="['flex flex-col items-center', isActive('/vehiclesale') ? 'bg-[#CFB680] rounded-full p-2' : '']"
      >
        <img src="../assets/footerMob/car.png" alt="Vehicles" class="w-8 h-8" />
      </router-link>
      <router-link
        to="/admin"
        :class="['flex flex-col items-center', isActive('/admin') ? 'bg-[#CFB680] rounded-full p-2' : '']"
      >
        <img src="../assets/footerMob/admin.png" alt="Admin" class="w-8 h-8" />
      </router-link>
      <router-link
        to="/history"
        :class="['flex flex-col items-center', isActive('/history') ? 'bg-[#CFB680] rounded-full p-2' : '']"
      >
        <img src="../assets/footerMob/history.png" alt="History" class="w-8 h-8" />
      </router-link>
    </nav>
  </template>
  
  <script>
  export default {
    methods: {
      isActive(route) {
        return this.$route.path === route;
      }
    }
  };
  </script>
  
  <style scoped>
  nav {
    z-index: 10;
  }
  </style>
  