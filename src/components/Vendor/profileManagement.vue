<template>
    <div class="min-h-screen bg-gradient-to-t from-primary to-secondary flex overflow-y-hidden">
      <DashboardSide />
  
      <!-- Main Content -->
      <div class="flex-1 rounded-l-[1.9rem] bg-white">
        <!-- Header main -->
        <header class="pt-12 px-6 mb-6 pb-5 border-b border-black">
          <div class="header-section flex justify-between items-center">
            <div>
              <h1 class="text-2xl font-bold">
                Vendor Dashboard
                <span class="text-secondary">Portal</span>
              </h1>
            </div>
            <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-2">
                <img src="../../assets/vendor/avatar.png" class="rounded-full" alt="User" />
                <span>Banuka Silva</span>
              </div>
            </div>
          </div>
        </header>
  
        <!-- Header Second -->
        <header class="flex justify-between items-center pl-6 pr-10 pt-12 px-6 mb-6 pb-5 border-b border-black">
          <!-- Breadcrumb -->
          <div>
            <h1 class="text-sm text-gray-500">
              Home /
              <span class="text-[#C8A74E] font-medium">Vendor Dashboard Portal</span>
            </h1>
          </div>
  
          <!-- Search + Notification -->
          <div class="flex items-center space-x-4">
            <div class="flex items-center border rounded overflow-hidden shadow-sm">
              <input
                type="text"
                placeholder="Search"
                class="w-[25rem] px-2 py-2 text-sm text-gray-700 focus:outline-none"
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
  
        <!-- Main Section -->
        <div class="flex items-center space-x-6 p-10 pt-1 px-6 mb-6 pb-6 border-b border-black">
          <!-- Image on the Left -->
          <div class="w-1/6">
            <img src="../../assets/vendor/banuka.png" alt="Happy Customer" class="rounded-lg w-full" />
          </div>
  
          <!-- Text Content on the Right -->
          <div class="w-2/4">
            <h2 class="lg:text-[2.5rem] md:text-[30px] text-[2.5rem] text-[#000000] font-bold leading-8">
              Hello
              <span class="text-[#577C8E]">Banuka Silva</span>
            </h2>
            
            <p class="mt-4 xl:text-[1rem] md:text-[1rem] text-[1rem] font-normal text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since.
            </p>

            <div class="flex items-center space-x-6 mt-4">
                <div class="flex items-center ">
                    <img src="../../assets/vendor/phone.png" alt="Phone"  />
                    <span class="text-gray-700 text-sm">+94 2 000 000</span>
                </div>
                <div class="flex items-center ">
                    <img src="../../assets/vendor/emailG.png" alt="Email" />
                    <span class="text-gray-700 text-sm">info@vehiclettr.com</span>
                </div>
                <div class="flex items-center ">
                    <img src="../../assets/vendor/address.png" alt="Location"  />
                    <span class="text-gray-700 text-sm">Colombo 8,
                      Maradana Road,Borella.</span>
                </div>
            </div>
          </div>
        </div>

        <!-- Vehicle Listing Section -->
        <div class="flex items-center justify-between w-full  px-6">
            <h2 class="text-[2.5rem] font-bold leading-normal">
                <span class="text-black">Vehicle</span>
                <span class="text-[#577C8E]"> Listing</span>
            </h2>
            
            <!-- Right-side icons -->
            <div class="flex space-x-4 ml-auto p-10 ">
                <img src="../../assets/vendor/lArrow.png" alt="Icon 1" class="w-[1rem] h-[1.75rem]"  />
                <img src="../../assets/vendor/rArrow.png" alt="Icon 2" class="w-[1rem] h-[1.75rem]" />
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 pt-1">
    <!-- Car Card -->
    <!-- Car Card -->
<div class="bg-[#FDFDFD] shadow-lg rounded-lg p-4 w-[16.625rem] h-[34.4375rem]">
  <!-- Price Tag (Aligned to Right) -->
  <div class="flex justify-end">
    <div class="bg-[#577C8E] text-white text-sm font-bold px-4 py-1 rounded-md inline-block">
      Rs. 12,450,000 /=
    </div>
  </div>

  <!-- Car Image -->
  <div class="mt-3">
    <img src="../../assets/vendor/car1.png" alt="BMW I8 2016" class="w-full object-cover rounded-lg" />
  </div>

  <!-- Car Details -->
  <div class="mt-4 ">
    
    <h2 class="bg-black text-white w-[16rem]   h-[2.25rem]  xl:text-[20px] lg:text-[16px] text-[15px] font-bold px-3 py-2">
      BMW I8 2016
    </h2>
    <ul class="text-black text-sm space-y-1 mt-2">
      <li>Millage:  <span class="font-bold">54,000km</span></li>
      <li>Door:  <span class="font-bold">2</span></li>
      <li>Body Type: <span class="font-bold">Car</span></li>
      <li>Fuel:<span class="font-bold">Petrol</span></li>
      <li>Year: <span class="font-bold">2020/6</span></li>
      <li>Location: <span class="font-bold">Colombo 8</span></li>
    </ul>
  </div>

  <!-- Read More Button -->
  <div class="items-center justify-between py-4 mt-5 border-t xxl:p-4">
    <div class="grid grid-cols-5 md:mx-4">
      <div
        class="col-span-4 bg-[#1E1E1E] text-white xl:text-[16px] lg:text-[14px] text-[13px] md:py-3 py-2 px-4 rounded-s-lg text-center hover:bg-[#577C8E]">
        Read More
      </div>
      <div
        class="bg-[#577C8E] text-white md:text-[16px] text-[13px] md:py-3 py-2 rounded-e-lg col-span-1 text-center">
        <i class="fa fa-angle-right text-[40px]"></i>
      </div>
    </div>
  </div>
</div>


    <!-- Second Car Card -->
    <!-- Car Card -->
<div class="bg-[#FDFDFD] shadow-lg rounded-lg p-4 w-[16.625rem] h-[34.4375rem]">
  <!-- Price Tag (Aligned to Right) -->
  <div class="flex justify-end">
    <div class="bg-[#577C8E] text-white text-sm font-bold px-4 py-1 rounded-md inline-block">
      Rs. 12,450,000 /=
    </div>
  </div>

  <!-- Car Image -->
  <div class="mt-3">
    <img src="../../assets/vendor/car1.png" alt="BMW I8 2016" class="w-full object-cover rounded-lg" />
  </div>

  <!-- Car Details -->
  <div class="mt-4">
    <h2 class="bg-black text-white w-full h-[2.25rem] xl:text-[20px] lg:text-[16px] text-[15px] font-bold px-3 py-2">
      BMW I8 2016
    </h2>
    <ul class="text-black text-sm space-y-1 mt-2">
      <li>Millage:  <span class="font-bold">54,000km</span></li>
      <li>Door:  <span class="font-bold">2</span></li>
      <li>Body Type: <span class="font-bold">Car</span></li>
      <li>Fuel:<span class="font-bold">Petrol</span></li>
      <li>Year: <span class="font-bold">2020/6</span></li>
      <li>Location: <span class="font-bold">Colombo 8</span></li>
    </ul>
  </div>

  <!-- Read More Button -->
  <div class="items-center justify-between py-4 mt-5 border-t xxl:p-4">
    <div class="grid grid-cols-5 md:mx-4">
      <div
        class="col-span-4 bg-[#1E1E1E] text-white xl:text-[16px] lg:text-[14px] text-[13px] md:py-3 py-2 px-4 rounded-s-lg text-center hover:bg-[#577C8E]">
        Read More
      </div>
      <div
        class="bg-[#577C8E] text-white md:text-[16px] text-[13px] md:py-3 py-2 rounded-e-lg col-span-1 text-center">
        <i class="fa fa-angle-right text-[40px]"></i>
      </div>
    </div>
  </div>
</div>


    <!-- Third Car Card -->
    <!-- Car Card -->
<div class="bg-[#FDFDFD] shadow-lg rounded-lg p-4 w-[16.625rem] h-[34.4375rem]">
  <!-- Price Tag (Aligned to Right) -->
  <div class="flex justify-end">
    <div class="bg-[#577C8E] text-white text-sm font-bold px-4 py-1 rounded-md inline-block">
      Rs. 12,450,000 /=
    </div>
  </div>

  <!-- Car Image -->
  <div class="mt-3">
    <img src="../../assets/vendor/car1.png" alt="BMW I8 2016" class="w-full object-cover rounded-lg" />
  </div>

  <!-- Car Details -->
  <div class="mt-4">
    <h2 class="bg-black text-white w-full h-[2.25rem] xl:text-[20px] lg:text-[16px] text-[15px] font-bold px-3 py-2">
      BMW I8 2016
    </h2>
    <ul class="text-black text-sm space-y-1 mt-2">
      <li>Millage:  <span class="font-bold">54,000km</span></li>
      <li>Door:  <span class="font-bold">2</span></li>
      <li>Body Type: <span class="font-bold">Car</span></li>
      <li>Fuel:<span class="font-bold">Petrol</span></li>
      <li>Year: <span class="font-bold">2020/6</span></li>
      <li>Location: <span class="font-bold">Colombo 8</span></li>
    </ul>
  </div>

  <!-- Read More Button -->
  <div class="items-center justify-between py-4 mt-5 border-t xxl:p-4">
    <div class="grid grid-cols-5 md:mx-4">
      <div
        class="col-span-4 bg-[#1E1E1E] text-white xl:text-[16px] lg:text-[14px] text-[13px] md:py-3 py-2 px-4 rounded-s-lg text-center hover:bg-[#577C8E]">
        Read More
      </div>
      <div
        class="bg-[#577C8E] text-white md:text-[16px] text-[13px] md:py-3 py-2 rounded-e-lg col-span-1 text-center">
        <i class="fa fa-angle-right text-[40px]"></i>
      </div>
    </div>
  </div>
</div>


    <!-- fourth Car Card -->
    <!-- Car Card -->
<div class="bg-[#FDFDFD] shadow-lg rounded-lg p-4 w-[16.625rem] h-[34.4375rem]">
  <!-- Price Tag (Aligned to Right) -->
  <div class="flex justify-end">
    <div class="bg-[#577C8E] text-white text-sm font-bold px-4 py-1 rounded-md inline-block">
      Rs. 12,450,000 /=
    </div>
  </div>

  <!-- Car Image -->
  <div class="mt-3">
    <img src="../../assets/vendor/car1.png" alt="BMW I8 2016" class="w-full object-cover rounded-lg" />
  </div>

  <!-- Car Details -->
  <div class="mt-4">
    <h2 class="bg-black text-white w-full h-[2.25rem] xl:text-[20px] lg:text-[16px] text-[15px] font-bold px-3 py-2">
      BMW I8 2016
    </h2>
    <ul class="text-black text-sm space-y-1 mt-2">
      <li>Millage:  <span class="font-bold">54,000km</span></li>
      <li>Door:  <span class="font-bold">2</span></li>
      <li>Body Type: <span class="font-bold">Car</span></li>
      <li>Fuel:<span class="font-bold">Petrol</span></li>
      <li>Year: <span class="font-bold">2020/6</span></li>
      <li>Location: <span class="font-bold">Colombo 8</span></li>
    </ul>
  </div>

  <!-- Read More Button -->
  <div class="items-center justify-between py-4 mt-5 border-t xxl:p-4">
    <div class="grid grid-cols-5 md:mx-4">
      <div
        class="col-span-4 bg-[#1E1E1E] text-white xl:text-[16px] lg:text-[14px] text-[13px] md:py-3 py-2 px-4 rounded-s-lg text-center hover:bg-[#577C8E]">
        Read More
      </div>
      <div
        class="bg-[#577C8E] text-white md:text-[16px] text-[13px] md:py-3 py-2 rounded-e-lg col-span-1 text-center">
        <i class="fa fa-angle-right text-[40px]"></i>
      </div>
    </div>
  </div>
</div>



  </div>
        
    </div>
</div>
</template>

<script setup>
import DashboardSide from "../../components/Vendor/DashboardSide.vue";
</script>
