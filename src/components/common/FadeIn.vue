<template>
    <div ref="wrapper" :class="['fade-in', { visible: isVisible }]">
      <!-- Show loader until the section becomes visible -->
      <div v-if="!isVisible" class="loader"></div>
      <div v-else class="content">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, defineProps } from "vue";
  
  const isVisible = ref(false);
  const wrapper = ref(null);
  
  // Define prop for delay
  const props = defineProps({
    delay: {
      type: Number,
      default: 0, // Default delay is 0s
    },
  });
  
  onMounted(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true; // Set to true when section is visible
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the section is visible
    );
  
    if (wrapper.value) observer.observe(wrapper.value);
  });
  </script>
  
  <style scoped>
  /* Loading Spinner */
  .loader {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #3498db; /* Change this color to fit your theme */
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 0 auto;
    padding-top: 20px;
  }
  
  /* Fade-In Animation */
  .fade-in {
    opacity: 0;
    transform: translateY(80px); /* Start position off-screen */
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0); /* Final position when section is visible */
  }
  
  .content {
    opacity: 1;
  }
  </style>
  