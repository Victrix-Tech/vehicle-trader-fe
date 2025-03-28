<template>
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="fixed px-4 py-2 text-[#CFB680] transition-opacity duration-300 bg-[#2F4157] rounded-lg shadow-lg bottom-5 right-5 hover:bg-[#577C8E]"
    >
    <i class="py-2 fa fa-chevron-up"></i>
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showButton: false,
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.showButton = window.scrollY > 300;
      },
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
  };
  </script>
  