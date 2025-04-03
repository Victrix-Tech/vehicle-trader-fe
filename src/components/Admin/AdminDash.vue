<template>
    <div class=" h-screen bg-gradient-to-t from-primary to-secondary flex overflow-y-hidden">
      <DashboardSide />
  
      <!-- Main Content -->
      <div class="flex-1 lg:rounded-l-[1.9rem] bg-white">
        <!-- Header main -->
        <header class="lg:pt-12 pt-5 lg:px-6 px-4 lg:pr-20 lg:mb-6 lg:pb-5 border-b border-black ">
          <div class="header-section flex justify-between items-center space-x-2 py-4 lg:py-0">
    <div>
      <h1 class="lg:text-2xl font-bold text-md">
        Vendor Dashboard
        <span class="text-secondary ">Portal</span>
      </h1>
    </div>
    <div class="flex items-center lg:space-x-4 lg:w-auto space-x-2">
      <div class="flex items-center space-x-2">
        <img src="../../assets/vendor/avatar.png" class="rounded-full w-6 lg:w-auto" alt="User" />
        <span>Banuka Silva</span>
      </div>
    </div>
  </div>
        </header>
  
        <!-- Header Second -->
        <header class="lg:flex justify-between items-center lg:pl-6 lg:pr-20 mb-6 hidden ">
          <!-- Breadcrumb -->
          <div>
            <h1 class="text-sm text-gray-500 hidden lg:block">
              Home /
              <span class="text-[#C8A74E] font-medium">Vendor Dashboard Portal</span>
            </h1>
          </div>
  
          <!-- Search + Notification -->
          <div class="lg:flex items-center space-x-4 mt-5 lg:mt-0 hidden ">
            <div class="flex items-center border rounded overflow-hidden shadow-sm">
              <input
                type="text"
                placeholder="Search"
                class="lg:w-[25rem] px-2 py-2 text-sm text-gray-700 focus:outline-none"
              />
              <button class="bg-[#C8A74E] px-3 py-3 flex items-center justify-center">
                <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387-1.414 1.414-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
  
            <!-- Notification bell -->
            <div class="relative">
              <svg class="w-6 h-6 text-[#1C2D41]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M10 2a6 6 0 00-6 6v2c0 .9-.6 1.67-1.43 1.93a1 1 0 00.26 1.96h14.34a1 1 0 00.26-1.96A2.13 2.13 0 0016 10V8a6 6 0 00-6-6zM7 17a3 3 0 006 0H7z"
                />
              </svg>
              <span
                class="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full px-1.5 border border-[#1C2D41]"
              >2</span>
            </div>
          </div>
        </header>
  
        <DashboardSecNav :tab="activeTab" @tab-change="activeTab = $event" />
        <Settings v-if="activeTab === 'admin'" />
  

      </div>
    </div>
  </template>
  <script setup >
  import { ref } from "vue";
  
  import DashboardSide from "@/components/Admin/DashboardSide.vue";
  import DashboardSecNav from "@/components/Admin/DashboardSecNav.vue";
  import Settings from "@/components/Admin/AdminSettings.vue";

  
  const activeTab = ref("admin");
  </script>
    