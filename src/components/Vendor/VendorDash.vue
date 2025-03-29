<template>
  <div class="min-h-screen bg-gradient-to-t from-primary to-secondary flex">
    <DashboardSide />

    <!-- Main Content -->
    <div class="flex-1 p-6 rounded-l-[1.9rem] bg-white">
      <!-- Header -->
      <header class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-bold">
            Vendor Dashboard
            <span class="text-blue-500">Portal</span>
          </h1>
          <nav class="text-sm text-gray-600 mt-1">Home / Vendor Dashboard Portal</nav>
        </div>
        <div class="flex items-center space-x-4">
          <input type="text" placeholder="Search" class="border rounded px-2 py-1" />
          <button class="bg-yellow-400 p-2 rounded">
            <span>🔍</span>
          </button>
          <div class="flex items-center space-x-2">
            <img src="https://via.placeholder.com/30" class="rounded-full" alt="User" />
            <span>Banuka Silva</span>
          </div>
        </div>
      </header>

      <!-- Navigation Tabs -->
      <div class="flex space-x-2 mb-4">
        <button class="bg-blue-800 text-white px-4 py-2 rounded">Vehicle Management</button>
        <button class="bg-gray-300 text-black px-4 py-2 rounded">Profile Management</button>
        <button class="bg-gray-300 text-black px-4 py-2 rounded">Message Center</button>
      </div>

      <!-- Vehicle Cards -->
      <div class="grid gap-4">
        <div
          v-for="(vehicle, index) in vehicles"
          :key="index"
          class="bg-white rounded-lg shadow p-4 flex items-center justify-between"
        >
          <div class="flex items-center space-x-4">
            <img :src="vehicle.image" alt="Car" class="w-32 rounded" />
            <div>
              <div
                class="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded w-max mb-2"
              >March 2025 Delivery</div>
              <h3 class="font-bold text-lg">{{ vehicle.model }}</h3>
              <p class="text-sm text-gray-500">{{ vehicle.description }}</p>
              <p class="text-yellow-600 font-semibold text-xl mt-2">Rs. {{ vehicle.price }}</p>
            </div>
          </div>
          <div class="text-sm text-gray-700 space-y-1">
            <p>
              <strong>Initial Payment:</strong>
              {{ vehicle.initialPayment }}
            </p>
            <p>
              <strong>Month Contract:</strong>
              {{ vehicle.contractMonths }}
            </p>
            <p>
              <strong>Miles p/a:</strong>
              {{ vehicle.miles }}
            </p>
            <p>
              <strong>Type:</strong>
              {{ vehicle.type }}
            </p>
            <p>
              <strong>Doors:</strong>
              {{ vehicle.doors }}
            </p>
            <p>
              <strong>Transmission:</strong>
              {{ vehicle.transmission }}
            </p>
            <p>
              <strong>Category:</strong>
              {{ vehicle.category }}
            </p>
            <p>
              <strong>Range:</strong>
              {{ vehicle.range }}
            </p>
          </div>
          <button class="bg-blue-600 text-white px-4 py-2 rounded">View</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup >
import DashboardSide from "../../components/Vendor/DashboardSide.vue";
</script>
  