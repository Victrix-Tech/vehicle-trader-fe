<template>
  <section class="px-4 py-8 h-screeen grid lg:grid-cols-2 gap-6 lg:overflow-y-hidden">
    <!-- left side -->
    <div
      class="relative rounded-lg col-span-1 bg-hero-vendor h-[94vh] bg-cover bg-center lg:flex flex-col justify-between gap-6 hidden"
    >
      <div class="absolute inset-0 bg-[#295C8D]/20 rounded-lg z-0"></div>
      <div class="text-space p-14 z-10">
        <h1 class="text-white text-[96px] leading-[8rem] font-semibold">
          A new way
          to buy and sell
          cars
        </h1>
      </div>
      <div
        class="buttom-line h-[92px] z-10 bg-gradient-to-b from-[#668DBD] to-[#2F4157] rounded-b-lg py-10 flex justfy justify-around items-center"
      >
        <div class="btn">
          <span class="text-white text-[18px]">Do you already have an account?</span>
        </div>
        <div class="btn-sign">
          <button class="px-6 py-1 border-white border text-white rounded-lg">Sign up</button>
        </div>
      </div>
    </div>

    <!-- right Side -->
    <div class="grid justify-items-center py-5">
      <img src="../../assets/vendor/logo.png" alt />
      <div class="heding text-center mb-6">
        <h1 class="text-black font-semibold text-3xl">Vendor Portal</h1>
        <span class="text-[#6C6C6C] text-sm">Enter details to proceed further</span>
      </div>

      <!-- form -->
      <form class="w-full max-w-sm space-y-8">
        <!-- Email -->
        <div class="relative">
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder=" "
            class="peer w-full border border-gray-300 rounded px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
          />

          <label
            for="email"
            class="absolute left-4 text-sm text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-secondary pointer-events-none"
            :class="{ 'top-1 text-xs text-secondary': email }"
          >Email</label>

          <!-- Email Icon -->
          <img
            class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            src="../../assets/vendor/email.png"
            alt="Email icon"
          />
        </div>

        <!-- First & Last Name -->
        <div class="flex gap-6">
          <div class="relative">
            <input
              type="firstName"
              id="firstName"
              v-model="firstName"
              placeholder=" "
              class="peer w-full border border-gray-300 rounded px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
            />

            <label
              for="firstName"
              class="absolute left-4 text-sm text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-secondary pointer-events-none"
              :class="{ 'top-1 text-xs text-secondary': firstName }"
            >First Name</label>

            <!-- Email Icon -->
            <img
              class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              src="../../assets/vendor/profile.png"
              alt="firstName icon"
            />
          </div>

          <div class="relative w-1/2">
            <input
              type="lastName"
              id="lastName"
              v-model="lastName"
              placeholder=" "
              class="peer w-full border border-gray-300 rounded px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
            />

            <label
              for="lastName"
              class="absolute left-4 text-sm text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-secondary pointer-events-none"
              :class="{ 'top-1 text-xs text-secondary': lastName }"
            >Last Name</label>

            <!-- Email Icon -->
            <img
              class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              src="../../assets/vendor/profile.png"
              alt="lastname icon"
            />
          </div>
        </div>

        <!-- Password -->
        <div class="relative">
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder=" "
            class="peer w-full border border-gray-300 rounded px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
          />

          <label
            for="password"
            class="absolute left-4 text-sm text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-secondary pointer-events-none"
            :class="{ 'top-1 text-xs text-secondary': firstName }"
          >Password</label>

          <!-- Email Icon -->
          <img
            class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            src="../../assets/vendor/password.png"
            alt="Email icon"
          />
        </div>

        <!-- Confirm Password -->
        <div class="relative">
          <input
            type="confirmPassword"
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder=" "
            class="peer w-full border border-gray-300 rounded px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
          />

          <label
            for="password"
            class="absolute left-4 text-sm text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-secondary pointer-events-none"
            :class="{ 'top-1 text-xs text-secondary': confirmPassword }"
          >Confirm Password</label>

          <!-- Email Icon -->
          <img
            class="absolute right-3 top-1/2 transform -translate-y-1/2 w-[14px] h-[10px]"
            src="../../assets/vendor/right.png"
            alt="Confirm Password"
          />
        </div>

        <!-- Terms Checkbox -->
        <div class="flex items-center space-x-2 px-5">
          <input type="radio" id="terms" class="bg-secondary" v-model="form.agree" />
          <label for="terms" class="text-sm text-[#1F2B3E]">
            I agree with
            <span class="font-semibold">terms & conditions</span>
          </label>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full text-[20px] bg-primary text-gold py-2 rounded font-semibold text-lg hover:bg-[#2c3a52] mt-10"
        >Continue</button>
      </form>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const form = ref({
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
  agree: false
});
</script>
