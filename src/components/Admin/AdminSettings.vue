<template>
    <section class="w-full lg:w-auto lg:h-[60vh] h-screen space-y-4 mt-5 lg:pb-0 pb-10 overflow-y-scroll  ">
      <div class="flex justify-end items-center space-x-2 lg:pr-6 sm:flex-row">
        <section class="w-full max-w-[90%] mx-auto lg:max-w-none lg:h-[95] space-y-4 mt-5 ">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <div class="flex-1 p-6">
              <div class="relative">
                <label for="full-name" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  class="peer w-full border border-gray-300 rounded px-4 py-5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder=" "
                  v-model="fullName"
                />
                <div class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <img src="../../assets/admin/save.png" alt="Save icon" />
                  <span class="text-sm text-[#577C8E] font-semibold">Save</span>
                </div>
              </div>
              <div class="relative mt-6">
                <label for="gender" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left">Gender</label>
                <input
                  id="gender"
                  type="text"
                  class="peer w-full border-b border-gray-300 rounded px-4 py-5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                  v-model="gender"
                  placeholder=" "
                />
                <div class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 cursor-pointer" @click="isEditingGender = !isEditingGender">
                  <img src="../../assets/admin/edit.png" alt="Edit icon" />
                  <span class="text-sm text-[#577C8E] font-semibold">{{ isEditingGender ? 'Save' : 'Edit' }}</span>
                </div>
              </div>
              <div class="relative mt-6">
                <label for="dob" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left">Date of Birth</label>
                <input
                  id="dob"
                  type="text"
                  class="peer w-full border-b border-gray-300 rounded px-4 py-5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                  v-model="dob"
                  placeholder=" "
                />
                <div class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 cursor-pointer" @click="isEditingDob = !isEditingDob">
                  <img src="../../assets/admin/edit.png" alt="Edit icon" />
                  <span class="text-sm text-[#577C8E] font-semibold">{{ isEditingDob ? 'Save' : 'Edit' }}</span>
                </div>
              </div>
              <div class="relative mt-6">
                <label for="email" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left">Email Address</label>
                <input
                  id="email"
                  type="email"
                  class="peer w-full border-b border-gray-300 rounded px-4 py-5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                  v-model="email"
                  placeholder=" "
                />
                <div class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 cursor-pointer" @click="isEditingEmail = !isEditingEmail">
                  <img src="../../assets/admin/edit.png" alt="Edit icon" />
                  <span class="text-sm text-[#577C8E] font-semibold">{{ isEditingEmail ? 'Save' : 'Edit' }}</span>
                </div>
              </div>
              <div class="relative mt-6">
                <label for="phone" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left">Phone Number</label>
                <input
                  id="phone"
                  type="text"
                  class="peer w-full border-b border-gray-300 rounded px-4 py-5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                  v-model="phone"
                  placeholder=" "
                />
                <div class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 cursor-pointer" @click="isEditingPhone = !isEditingPhone">
                  <img src="../../assets/admin/edit.png" alt="Edit icon" />
                  <span class="text-sm text-[#577C8E] font-semibold">{{ isEditingPhone ? 'Save' : 'Edit' }}</span>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4 mt-6">
                <button class="px-6 py-2 bg-[#2F4157] text-[#CFB680] font-semibold rounded-lg hover:bg-[#2c3a52] transition-all" @click="updateSettings">Update Settings</button>
                <button class="px-6 py-2 bg-white border border-black text-[#577C8E] font-semibold rounded-lg hover:bg-[#2c3a52] transition-all" @click="cancelChanges">Cancel</button>
              </div>
            </div>

            <div class="flex-[0.5] p-6 lg:space-y-60 sm:space-y-2 ">
  <div class="border w-[17.8125rem] h-[11.25rem] bg-white rounded-lg p-4 space-y-2">
    <!-- Image Section -->
    <img
      class="w-[2.3125rem] h-[2.1875rem] bg-[#DADADA] rounded-lg"
      src="../../assets/admin/01.png"
      alt="Admin Image"
    />
    <div class="text-left text-black font-semibold text-lg">General Information</div>
    <div class="text-sm text-[#B6B6B6]">Everybody that has ever been to a meeting, can recall the all familiar passing of the business cards.</div>
  </div>

  <div class="mt-10 flex justify-center items-end">
    <button
      class="w-[15.1895rem] h-[3.15rem] px-6 py-2 border border-[#577C8E] text-[#577C8E] font-semibold rounded-lg hover:bg-[#2c3a52] hover:text-white transition-all flex items-center justify-center pb-2"
    >
      <img class="w-5 h-5" src="../../assets/admin/deactivate.png" alt="Deactivate Icon" />
      <span>Deactivate Account</span>
    </button>
  </div>
</div>
        


          </div>
        </section>
      </div>
    </section>
  </template>
  <script setup>
  import { ref } from 'vue';
  
  const fullName = ref('');
  const gender = ref('');
  const dob = ref('');
  const email = ref('');
  const phone = ref('');
  
  const isEditingGender = ref(false);
  const isEditingDob = ref(false);
  const isEditingEmail = ref(false);
  const isEditingPhone = ref(false);
  
  const updateSettings = () => {
    console.log("Settings Updated");
  };
  
  const cancelChanges = () => {
    console.log("Changes Canceled");
  };
  </script>
  
  <style scoped>
  </style>
  

