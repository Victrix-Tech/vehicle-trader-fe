<template>
  <div class="border-b border-black px-6 lg:block hidden ">
    <div class="flex space-x-1">
      <button
        @click="$emit('tab-change', 'admin')"
        :class="['px-4 py-2 rounded-tl-md flex items-center space-x-2', tab === 'admin' ? 'bg-primary text-white' : 'bg-secondary text-white']"
      >
        <img src="@/assets/vendor/profilelogo.png" alt />
        <span>Profile Settings</span>
      </button>
      <!-- <button
        @click="$emit('tab-change', 'profile')"
        :class="['px-4 py-2 flex items-center space-x-2', tab === 'profile' ? 'bg-primary text-white' : 'bg-secondary text-white']"
      >
        <img src="@/assets/vendor/profilelogo.png" alt />
        <span>Profile Management</span>
      </button>
      <button
        @click="$emit('tab-change', 'message')"
        :class="['px-4 py-2 rounded-tr-md flex items-center space-x-2', tab === 'message' ? 'bg-primary text-white' : 'bg-secondary text-white']"
      >
        <img src="@/assets/vendor/messagelogo.png" alt />
        <span>Message Center</span>
      </button> -->
    </div>
  </div>
</template>

<script setup>
defineProps(["tab"]);
defineEmits(["tab-change"]);
</script>
