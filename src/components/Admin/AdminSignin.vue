<template>
  <section class="px-4 py-8 h-screeen grid lg:grid-cols-2 gap-6 overflow-y-hidden">
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
      <!-- <div
      class="buttom-line h-[92px] z-10 bg-gradient-to-b from-[#668DBD] to-[#2F4157] rounded-b-lg py-10 flex justfy justify-around items-center">
      <div class="btn">
        <span class="text-white text-[18px]">Do you already have an account?</span>
      </div>
      <div class="btn-sign">
        <button class="px-6 py-1 border-white border text-white rounded-lg">Sign up</button>
      </div>
      </div>-->
    </div>

    <!-- right Side -->
    <div class="grid justify-items-center py-5">
      <img src="../../assets/vendor/logo.png" alt />
      <div class="heding text-center mb-6">
        <h1 class="text-black font-semibold text- [2.5rem]">Sign in to your account</h1>
        <span class="text-[#6C6C6C] text-sm">Enter details to proceed further</span>
      </div>

      <form @submit="handleLogin" class="w-full max-w-sm space-y-8">
        <!-- Email -->
        <div class="relative">
          <input
            type="email"
            id="email"
            required
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

        <div class="relative">
          <input
            type="password"
            id="password"
            required
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
            src="../../assets/vendor/cancel.png"
            alt="Cancel icon"
          />
        </div>

        <!-- Remember Me & Forgot Password -->
        <div class="flex justify-between items-center px-5">
          <!-- Remember Me -->
          <div class="flex items-center space-x-2">
            <input
              type="radio"
              id="rememberMe"
              class="bg-secondary"
              v-model="form.rememberMe"
              value="yes"
            />
            <label for="rememberMe" class="text-sm text-[#1F2B3E] font-semibold">Remember Me</label>
          </div>

          <!-- Forgot Password -->
          <a
            href="/forgot-password"
            class="text-sm text-[#1F2B3E] font-normal hover:underline"
          >Forgot Password</a>
        </div>

        <!-- Sign In -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full text-[20px] bg-primary text-gold py-2 rounded font-semibold text-lg hover:bg-[#2c3a52] mt-10"
        >{{ loading ? "Signing up..." : "Sign In" }}</button>
        <div class="flex items-center my-4">
          <div class="border-t border-[#E7E7E7] h-[0.0625rem] flex-grow"></div>
          <span class="px-4 text-sm text-[#577C8E] font-semibold">or</span>
          <div class="border-t border-[#E7E7E7] h-[0.0625rem] flex-grow"></div>
        </div>
      </form>
    </div>
    <Popup v-if="showError" :message="errorMessage" @close="handlePopupClose" />
  </section>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { adminService } from "@/services/apiService";
import Popup from "@/components/Admin/Popup.vue";

const router = useRouter();

const email = ref("");
const password = ref("");
const form = ref({ rememberMe: false });

const showError = ref(false);
const errorMessage = ref("");
const loading = ref(false);

const handleLogin = async e => {
  console.log("test");
  e.preventDefault();

  const payload = {
    email: email.value,
    password: password.value
  };

  loading.value = true;
  try {
    const response = await adminService.login(payload);

    if (response.data.isSuccess) {
      console.log("response", response.data);
      const { access_token, refresh_token, user } = response.data.jwt;

      // Store tokens
      localStorage.setItem("_access_token", access_token);
      localStorage.setItem("_refresh_token", refresh_token);

      // Store user details
      const person = {
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        userId: user.userId,
        userType: user.userType
      };

      localStorage.setItem("_person", JSON.stringify(person));

      router.push("/vendordash"); // Change route as needed
    } else {
      errorMessage.value =
        response.data.errorMessage?.message || "Login failed";
      showError.value = true;
    }
  } catch (error) {
    errorMessage.value =
      error.response?.data?.errorMessage?.message ||
      error.message ||
      "An error occurred";
    showError.value = true;
    loading.value = false;
  }
};

const handlePopupClose = () => {
  showError.value = false;
};
</script>