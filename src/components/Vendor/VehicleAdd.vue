<template>
    
    <div class=" h-screen bg-gradient-to-t from-primary to-secondary flex overflow-y-hidden ">
      <DashboardSide />
  
      <!-- Main Content -->
      <div class="flex-1 lg:rounded-l-[1.9rem] bg-white">
        <!-- Header main -->
        <header class="lg:pt-12 pt-5 lg:px-6 px-4 lg:pr-20 lg:mb-6 lg:pb-5 border-b border-black ">
          <div class="header-section flex justify-between items-center space-x-2 py-4 lg:py-0">
    <div>
      <h1 class="lg:text-2xl font-bold text-md">
        Vendor Dashboard
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


        <!-- Vendor-post -->

        <div class="main h-[70vh] overflow-y-scroll ">
         <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-5">

<div class="flex-1 p-6">
    


 <div class="relative">
      <label for="vehicle-make" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left">Vehicle Make</label>
      <input
        id="vehicle-make"
        type="text"
        class="peer w-full border-b border-gray-300 rounded px-4 py-5 text-sm focus:outline-none mt-2"
        placeholder=" "
        v-model="vehicleMake"
      />
      <div class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
        <img src="../../assets/vendor/selection.png" alt="Save icon" />
       
      </div>
    </div>
   


    <div class="relative mt-6">
      <label for="vehicle-model" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left">Vehicle Model</label>
      <input
        id="vehicle-model"
        type="text"
        class="peer w-full border-b border-gray-300 rounded px-4 py-5 text-sm focus:outline-none mt-2"
        v-model="vehicleModel"
        placeholder=" "
      />
      <div class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 cursor-pointer" @click="isEditingModel = !isEditingModel">
        <img src="../../assets/vendor/selection.png" alt="Edit icon" />
       
      </div>
    </div>

    <div class="relative mt-6">
      <label for="mileage" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left">Mileage</label>
      <input
        id="mileage"
        type="text"
        class="peer w-full border-b border-gray-300 rounded px-4 py-5 text-sm focus:outline-none mt-2"
        v-model="mileage"
        placeholder=" "
      />
      <div class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 cursor-pointer" @click="isEditingMileage = !isEditingMileage">
        <img src="../../assets/vendor/selection.png" alt="Edit icon" />
        
      </div>
    </div>

    <div class="relative">
      <label for="Price" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left">Price</label>
      <input
        id="Price"
        type="text"
        class="peer w-full border-b border-gray-300 rounded px-4 py-5 text-sm focus:outline-none mt-2"
        placeholder=" "
        v-model="Price"
      />
      <div class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
        <img src="../../assets/vendor/selection.png" alt="Save icon" />
        
      </div>
    </div>

    <div class="relative mt-6">
      <label for="Door" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left">Door</label>
      <input
        id="Door"
        type="text"
        class="peer w-full border-b border-gray-300 rounded px-4 py-5 text-sm focus:outline-none mt-2"
        v-model="Door"
        placeholder=" "
      />
      <div class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 cursor-pointer" @click="isEditingMileage = !isEditingMileage">
        <img src="../../assets/vendor/selection.png" alt="Edit icon" />
       
      </div>
    </div>


    

    <div class="relative">
      <label for="Body-Type" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left">Body Type</label>
      <input
        id="Body-Type"
        type="text"
        class="peer w-full border-b border-gray-300 rounded px-4 py-5 text-sm focus:outline-none mt-2"
        placeholder=" "
        v-model="BodyType"
      />
      <div class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
        <img src="../../assets/vendor/selection.png" alt="Save icon" />
        
      </div>
    </div>



    <div class="flex-1 p-1">
  <!-- Flex container to display the file inputs side by side -->
  <div class="flex gap-4">

      <!-- File input 1 -->
      <div class="relative mt-10">
        <label for="file1" class="absolute text-[#949494]  font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left"></label>
        <input
          id="file1"
          type="file"
          class="peer w-full border border-dashed border-black rounded px-4 py-5 text-sm focus:outline-none mt-2"
          style="width: 12.69713rem; height: 8.6875rem;"
        />
      </div>

      <!-- File input 2 -->
      <div class="relative mt-10">
        <label for="file2" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left"></label>
        <input
          id="file2"
          type="file"
          class="peer w-full border border-dashed border-black rounded px-4 py-5 text-sm focus:outline-none mt-2"
          style="width: 12.69713rem; height: 8.6875rem;"
        />
      </div>

      <!-- File input 3 -->
      <div class="relative mt-10">
        <label for="file3" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left"></label>
        <input
          id="file3"
          type="file"
          class="peer w-full border border-dashed border-black rounded px-4 py-5 text-sm focus:outline-none mt-2"
          style="width: 12.69713rem; height: 8.6875rem;"
        />
      </div>

      <!-- File input 4 -->
      <div class="relative mt-10">
        <label for="file4" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left"></label>
        <input
          id="file4"
          type="file"
          class="peer w-full border border-dashed border-black rounded px-4 py-5 text-sm focus:outline-none mt-2"
          style="width: 12.69713rem; height: 8.6875rem;"
        />
      </div>
      </div>
      </div>
  
 
  <div class="grid grid-cols-2 gap-4 mt-10">
    <button class="px-6 py-2 bg-[#2F4157] text-[#CFB680] font-semibold rounded-lg hover:bg-[#2c3a52] transition-all" @click="updateSettings">Submit</button>
    <button class="px-6 py-2 bg-white border border-black text-[#577C8E] font-semibold rounded-lg hover:bg-[#2c3a52] transition-all" @click="Reset">Cancel</button>
  </div>
</div>
<!-- second column -->

<div class="flex-1 p-6 flex flex-col">
    


<div class="relative mt-6">
      <label for="manufacturing-year" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left">Manufacturing Year</label>
      <input
        id="manufacturing-year"
        type="text"
        class="peer w-full border-b border-gray-300 rounded px-4 py-5 text-sm focus:outline-none mt-2"
        v-model="manufacturingYear"
        placeholder=" "
      />
      <div class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 cursor-pointer" @click="isEditingYear = !isEditingYear">
        <img src="../../assets/vendor/selection.png" alt="Edit icon" />
        
      </div>
  </div>

  <div class="relative mt-6">
      <label for="transmission" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left">Transmission</label>
      <input
        id="transmission"
        type="text"
        class="peer w-full border-b border-gray-300 rounded px-4 py-5 text-sm focus:outline-none mt-2"
        v-model="transmission"
        placeholder=" "
      />
      <div class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 cursor-pointer" @click="isEditingTransmission = !isEditingTransmission">
        <img src="../../assets/vendor/selection.png" alt="Edit icon" />
        
      </div>
    </div>

  <div class="relative my-6">
    <label for="Conditions" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left">Conditions</label>
    <input
      id="Conditions"
      type="text"
      class="peer w-full border-b border-gray-300 rounded px-4 py-5 text-sm focus:outline-none mt-2"
      v-model="Conditions"
      placeholder=" "
    />
    <div class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 cursor-pointer">
      <img src="../../assets/vendor/selection.png" alt="Add icon" />
      
    </div>
  </div>

  <div class="relative my-6">
    <label for="Fuel" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left">Fuel</label>
    <input
      id="Fuel"
      type="text"
      class="peer w-full border-b border-gray-300 rounded px-4 py-5 text-sm focus:outline-none mt-2"
      v-model="Fuel"
      placeholder=" "
    />
    <div class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 cursor-pointer">
      <img src="../../assets/vendor/selection.png" alt="Add icon" />
      
    </div>
  </div>

  <div class="relative my-6">
    <label for="Location" class="absolute text-[#949494] font-bold left-2 top-2 transition-all duration-200 transform scale-75 origin-top-left">Location</label>
    <input
      id="Location"
      type="text"
      class="peer w-full border-b border-gray-300 rounded px-4 py-5 text-sm focus:outline-none mt-2"
      v-model="Location"
      placeholder=" "
    />
    <div class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 cursor-pointer">
      <img src="../../assets/vendor/selection.png" alt="Add icon" />
     
    </div>
  </div>

</div>


</div>   
        </div>
        
 

      </div>
    </div>

  </template>
  <script setup>
  import { ref } from "vue";
  import DashboardSide from "@/components/Admin/DashboardSide.vue";
  
  const vendors = ref([
    {}, {}, {}, {}
  ]);
  </script>