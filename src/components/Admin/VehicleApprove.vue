<template>
    <div class="h-screen hidden  bg-gradient-to-t from-primary to-secondary lg:flex overflow-y-hidden ">
        <DashboardSide />
        

              <!-- Main Content -->
      <div class="flex-1 lg:rounded-l-[1.9rem] bg-white">
        <!-- Header main -->
        <header class="lg:pt-12 pt-5 lg:px-6 px-4 lg:pr-20 lg:mb-6 lg:pb-5 border-b border-black ">
          <div class="header-section flex justify-between items-center space-x-2 py-4 lg:py-0">
    <div>
      <h1 class="lg:text-2xl font-bold text-md">
       Admin Dashboard
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

        <div class="border-b border-black px-6 lg:block hidden ">
    <div class="flex space-x-1">
      <button
        @click="$emit('tab-change', 'vehicle')"
        :class="['px-4 py-2 rounded-tl-md flex items-center space-x-2', tab === 'vehicle' ? 'bg-primary text-white' : 'bg-secondary text-white']"
      >
        <img src="@/assets/vendor/carlogo.png" alt />
        <span>Vehicle Management</span>
      </button>
     </div>
    </div>

    
        <!-- Vehicle Approve -->
        <div class="px-6 py-4 main h-[60vh] overflow-y-scroll">
  <div class="p-6 bg-white ">
    <!-- Vehicle Approval Table -->
    <div class="overflow-x-auto">
      <table class="min-w-full border-separate border-spacing-y-4">
        <!-- Table Header -->
        <thead>
  <tr class="bg-gray-white text-left text-[#8A8A8A]">
    <th class="px-4 py-3 "></th>
    <th class="px-4 py-3">VEHICLE</th>
    <th class="px-4 py-3 ">NAME</th>
    <th class="px-4 py-3 ">DATE</th>
    <th class="px-4 py-3 "></th> <!-- No header for Vehicle/Vendor -->
    <th class="px-4 py-3 border border-gray-300 rounded-lg text-left w-[12.5rem]">Actions</th>
  </tr>
</thead>

<tbody>
  <tr
    v-for="(vehicle, index) in vehicles"
    :key="index"
    class="shadow-md border-solid border-black bg-transparent"
  >
    <td class="px-4 py-5"><input type="checkbox" /></td>

    <td class="px-4 py-5">
      <img :src="vehicle.image" alt="Vehicle" class="w-20 h-auto rounded-md" />
    </td>

    <td class="px-4 py-5">
      <p class="font-bold">{{ vehicle.name }}</p>
      <p class="text-sm text-black font-semibold">{{ vehicle.details }}</p>
    </td>

    <td class="px-4 py-5 font-semibold">{{ vehicle.date }}</td>

    <!-- Vehicle & Vendor Details -->
    <td class="px-4 py-5">
      <div class="flex flex-col space-y-2">
        <a href="#" class="text-[#577C8E] flex items-center space-x-1">
          <img src="../../assets/admin/car.png" class="w-4 h-4" />
          <span>Vehicle Details</span>
        </a>
        <a href="#" class="text-[#577C8E] flex items-center space-x-1">
          <img src="../../assets/admin/man.png" class="w-4 h-4" />
          <span>Vendor Details</span>
        </a>
      </div>
    </td>

    <!-- Accept / Decline under Actions -->
    <td class="px-4 py-5">
      <div class="flex flex-col space-y-2">
        <a href="#" class="text-[#31A449] flex items-center space-x-1">
          <img src="../../assets/admin/accept.png" class="w-4 h-4" />
          <span>Accept</span>
        </a>
        <a href="#" class="text-[#E11F27] flex items-center space-x-1">
          <img src="../../assets/admin/decline.png" class="w-4 h-4" />
          <span>Decline</span>
        </a>
      </div>
    </td>
  </tr>
</tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center items-center mt-4">
      <p class="text-sm text-gray-600"></p>
      <div class="flex space-x-2">
        <button class="px-3 py-1 border rounded-md text-gray-600">Previous</button>
        <button class="px-3 py-1 border rounded-md bg-primary text-white">1</button>
        <button class="px-3 py-1 border rounded-md text-gray-600">Next</button>
      </div>
    </div>

    <!-- Footer -->
    <div class="border-t mt-6 pt-4 text-gray-600 text-sm text-center">
      <p>Copyright © 2025 Vehicle Trader. by Victrix Tech All Rights Reserved</p>
      <div class="flex justify-center space-x-4 mt-2">
        <a href="#" class="hover:underline">Privacy Policy</a>
        <a href="#" class="hover:underline">Term of Use</a>
      </div>
    </div>
  </div>
</div>



      </div></div>
      <div/>

        

         


</template>
<script setup>
  import { ref } from "vue";

  import DashboardSide from "@/components/Admin/DashboardSide.vue";
  import DashboardSecNav from "../../components/Admin/DashboardSecNav.vue";
  import car1 from "../../assets/vendor/car1.png"
  import car2 from "../../assets/vendor/car2.png"
  import car3 from "../../assets/vendor/car3.png"
  const vehicles = ref([
  {
    image: car1, // Replace with actual images
    name: "Tesla Model Y",
    details: "Long Range Auto RWD 5dr",
    date: "2025/02/20",
  },
  {
    image: car2,
    name: "Tesla Model Y",
    details: "Long Range Auto RWD 5dr",
    date: "2025/02/20",
  },
  {
    image: car3,
    name: "Tesla Model Y",
    details: "Long Range Auto RWD 5dr",
    date: "2025/02/20",
  },
  {
    image:car1,
    name: "Tesla Model Y",
    details: "Long Range Auto RWD 5dr",
    date: "2025/02/20",
  },
]);
  
  
  </script>