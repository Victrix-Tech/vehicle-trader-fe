<template>
  <header
    class="sticky top-0 z-40"
    :class="['fixed top-0 left-0 w-full transition-all duration-300', isScrolled ? 'bg-white shadow-lg' : 'bg-transparent']"
  >
    <div class="container p-4 mx-auto">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <img src="../../public/images/logo.png" alt="Vehicle Trader Logo" class="h-10" />
        </div>

        <div class="flex items-center space-x-4">
          <button
            class="items-center px-4 py-2 text-[#CFB680] border-[#CFB680] text-[16px] border rounded-md hover:bg-[#CFB680] hover:text-white md:block hidden"
          >
            <i class="fa fa-sign-in me-2"></i>
            Sign in
          </button>

          <router-link to="/vendorlog">
            <button
              class="px-4 py-2 text-[#CFB680] border-[#CFB680] text-[16px] border rounded-md hover:bg-[#CFB680] hover:text-white md:block hidden"
            >
              Sell
              a Vehicle
            </button>
          </router-link>
          <div class="relative">
            <!-- Navigation Button -->
            <button
              @click="isOpen = !isOpen"
              class="p-1 text-[#CFB680] border-[#CFB680] text-[19px] border rounded-md hover:bg-[#CFB680] hover:text-white"
            >
              <i class="px-2 fa fa-bars" aria-hidden="true"></i>
            </button>

            <!-- Offcanvas Sidebar -->
            <div
              :class="[
                            'fixed inset-y-0 right-0 lg:w-[20%] md:w-[30%] w-[80%] bg-white shadow-md transform transition-transform duration-300 z-40',
                            isOpen ? 'translate-x-0' : 'translate-x-full'
                        ]"
            >
              <div class="flex items-center justify-between p-4">
                <h2 class="text-lg font-bold">Menu</h2>
                <button @click="isOpen = false" class="text-xl">✕</button>
              </div>
              <ul class="p-4 space-y-3">
                <li class="mt-0 mb-0">
                  <a
                    href="#"
                    class="block p-2 hover:bg-[#CFB680] border-b border-[#00000062]"
                  >Signin</a>
                </li>
                <li class="mt-0 mb-0">
                  <a href="#" class="block p-2 hover:bg-[#CFB680] border-b border-[#00000062]">
                    Sell a
                    Vehicle
                  </a>
                </li>
                <li class="mt-0 mb-0">
                  <a href="#" class="block p-2 hover:bg-[#CFB680] border-b border-[#00000062]">Home</a>
                </li>
                <li class="mt-0 mb-0">
                  <a href="#" class="block p-2 hover:bg-[#CFB680] border-b border-[#00000062]">About</a>
                </li>
                <li class="mt-0 mb-0">
                  <a
                    href="#"
                    class="block p-2 hover:bg-[#CFB680] border-b border-[#00000062]"
                  >Products</a>
                </li>
                <li class="mt-0 mb-0">
                  <a
                    href="#"
                    class="block p-2 hover:bg-[#CFB680] border-b border-[#00000062]"
                  >Services</a>
                </li>
                <li class="mt-0 mb-0">
                  <a
                    href="#"
                    class="block p-2 hover:bg-[#CFB680] border-b border-[#00000062]"
                  >Contact</a>
                </li>
              </ul>
            </div>

            <!-- Overlay -->
            <div v-if="isOpen" @click="isOpen = false" class="fixed inset-0 bg-black bg-opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);

const header = document.querySelector("header");
const scrollThreshold = 50;

// Header Background Color for scroll
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
