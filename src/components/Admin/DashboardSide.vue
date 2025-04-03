<template>
  <section class="hidden lg:block">
    <!-- Sidebar -->
    <aside class="w-[15rem] text-white p-6 pl-[3rem] pt-16">
      <img src="../../assets/vendor/logdash.png" alt />
      <nav class="space-y-4 mt-20 ml-4">
        <ul class="space-y-6">
          <li>
            <a href="#" class="flex items-center space-x-4">
              <i class="pi pi-qrcode text-gold text-lg"></i>
              <span class="text-lg text-gold">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center space-x-4">
              <i class="pi pi-home text-lg"></i>
              <span class="text-lg">Home</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center space-x-4">
              <i class="pi pi-history text-lg"></i>
              <span class="text-lg ml-2">History</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center space-x-4">
              <i class="pi pi-cog text-lg"></i>
              <span class="text-lg">Setting</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  </section>
</template>
<script setup >
import "primeicons/primeicons.css";
</script>