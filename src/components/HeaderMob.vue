<template>
    <!-- First Header (Normal Header) -->
    <div class="bg-[#2F4157] p-[2rem] block lg:hidden ">
      <div class="flex justify-center">
        <div class="font-semibold text-[12px] text-[#FFFFFF]">Welcome to Vehicle Trader</div>
      </div>
  
      <!-- Main Content Section -->
      <div class="flex justify-between items-center pt-[1rem]">
        <div>
          <img class="h-[21.22px] w-[24.22px]" src="../assets/vehiclesalessingle/heart.png">
        </div>
        <div>
          <img class="h-[36px] w-[120px]" src="../assets/wishlist/logoWishlist.png">
        </div>
        <!-- Default Hamburger Icon (Visible Initially) -->
        <div class="hamburger-icon cursor-pointer" @click="openMenu">
          <img class="h-[36px] w-[36px]" src="../assets/wishlist/menuIcon.png">
        </div>
      </div>
  
      <!-- Login and Register Section -->
      <div class="flex justify-center text-[15px] font-bold pt-[1rem] gap-2 text-[#FFFFFF]">
        <div class="flex gap-2">
          <img class="h-[19.5px] w-[21.67px]" src="../assets/wishlist/loginLogo.png">
          <a href="#">Login</a>
        </div>
        <div>/</div>
        <div>
          <a href="#">Register</a>
        </div>
      </div>
  
      <!-- Search Section -->
      <div class="pt-[1rem]">
        <form class="max-w-xl mx-auto">
          <div class="flex">
            <div class="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 focus:outline-none w-full z-20 text-[14px] text-gray-900 bg-[#FFFFFF] rounded-e-sm border-s-gray-50 border-s-2 border border-gray-300"
                placeholder="Search All Cars"
                required
              />
              <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#CFB680] rounded-e-sm">
                <img src="../assets/wishlist/searchIcon.png">
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  
    <!-- Second Header (Sticky Header) -->
    <div 
      class="fixed w-full top-0 z-20 transition-all duration-300"
      :class="{
        'bg-[#2F4157]': isScrolled,
        'bg-transparent': !isScrolled
      }"
    >
      <div class="flex justify-between items-center p-[1rem]">
        <div 
          class="hamburger-icon cursor-pointer"
          @click="openMenu"
          :class="{
            'opacity-100 pointer-events-auto': isScrolled,
            'opacity-0 pointer-events-none': !isScrolled
          }"
        >
          <img class="h-[auto] w-[150px]" src="../assets/wishlist/logoWishlist.png">
        </div>
        <!-- Only show hamburger icon in sticky header after scrolling -->
        <div 
          class="hamburger-icon cursor-pointer"
          @click="openMenu"
          :class="{
            'opacity-100 pointer-events-auto': isScrolled,
            'opacity-0 pointer-events-none': !isScrolled
          }"
        >
          <img class="h-[36px] w-[36px]" src="../assets/wishlist/menuIcon.png">
        </div>
      </div>
    </div>
  
    <!-- Overlay Menu (Hidden by Default) -->
    <div
      :class="[
        'fixed top-0 left-0 h-screen w-screen bg-[#2F4157] flex flex-col items-center justify-center overflow-auto transition-opacity duration-300 z-[100]',
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      ]"
    >
      <button class="absolute top-5 right-5 text-white text-3xl" @click="closeMenu">
        <img src="../assets/wishlist/close.png" alt="Close" />
      </button>
  
      <nav class="flex flex-col justify-center text-white text-xl space-y-6 px-10">
        <div class="menu-item" v-for="item in menuItems" :key="item.text">
          <router-link
            :to="item.link"
            class="block text-center tracking-wider uppercase font-semibold pb-4"
          >{{ item.text }}</router-link>
          <hr :class="['border-t w-[80vw] mx-auto', item.dividerColor]" />
        </div>
      </nav>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRouter } from "vue-router";

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const router = useRouter();

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;  // Detect if user has scrolled more than 50px
};

const openMenu = () => {
  isMenuOpen.value = true;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// Disable background scrolling when menu is open
watch(isMenuOpen, open => {
  document.body.style.overflow = open ? "hidden" : "auto";
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "auto";
});

const menuItems = [
  { text: "Used Cars", dividerColor: "border-[#095DCF80]", link: "/services" },
  { text: "New Cars", dividerColor: "border-[#095DCF80]", link: "/about" },
  { text: "Sell Your Car", dividerColor: "border-[#095DCF80]", link: "/contact" },
  { text: "Value Your Car", dividerColor: "border-[#095DCF80]", link: "/blog" },
  { text: "Car Reviews", dividerColor: "border-[#095DCF80]", link: "/service" },
  { text: "Car Leasing", dividerColor: "border-[#095DCF80]", link: "/service" },
  { text: "Electric Cars", dividerColor: "border-[#095DCF80]", link: "/service" },
  { text: "Buy a Car Online", dividerColor: "border-[#095DCF80]", link: "/service" }
];
</script>

  