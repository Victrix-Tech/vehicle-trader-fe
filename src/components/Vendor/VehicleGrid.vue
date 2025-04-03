<template>
  <section class="lg:pr-20 w-full lg:w-auto lg:pl-5 lg:h-[60vh] h-[90vh] overflow-y-scroll space-y-4 mt-5 lg:pb-0 pb-10">
    <div class="flex justify-end items-center space-x-2 lg:pr-6 sm:flex-row ">
      <!-- Car Image 1 -->
  <section class="w-full max-w-[90%] mx-auto lg:max-w-none lg:pr-20 lg:pl-5 lg:h-[60vh] overflow-y-scroll space-y-4 mt-5">
    <div class="flex justify-end items-center space-x-2 lg:pr-6 pr-2 sm:flex-row ">
      
      <img
        src="../../assets/vendor/group.png"
        alt="Group Image 1"
        class="w-[1.04656rem] h-[1.04656rem]"
      />

      <!-- Vertical Line -->
      <div class="w-[0.0625rem] h-[1.375rem] bg-[#D1D3D6]"></div>

      
      <img
        src="../../assets/vendor/group1.png"
        alt="Group Image 2"
        class="w-[1.04656rem] h-[1.04656rem]"
      />
    </div>

    <div class="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <!-- Car Image -->
      <div class="flex-shrink-0 w-full md:w-1/4 bg-gray-50 flex items-center justify-center p-4">
        <img
          src="../../assets/vendor/car2.png"
          alt="Tesla Model Y"
          class="object-contain w-full h-32 md:h-40"
        />
      </div>

      <!-- Main Info -->
      <div
        class="flex flex-col justify-between p-4 w-full md:w-2/4 border-t md:border-t-0 md:border-l md:border-r border-gray-200"
      >
        <!-- Delivery badge -->
        <div
          class="text-[0.8125rem] font-semibold text-white bg-[#2F4157] px-3 py-1 rounded-md w-fit mb-2"
        >March 2025 Delivery</div>

        <!-- Title & Trim -->
        <div>
          <h3 class="text-[1rem] font-semibold text-gray-900">Tesla Model Y</h3>
          <p class="text-[0.9375rem] font-medium text-black">Long Range Auto RWD 5dr</p>
        </div>

        <!-- Price -->
        <div
          class="mt-4 text-primary-600 text-[1.375rem] font-bold text-[#2F4157] flex items-center gap-2"
        >
          <img src="../../assets/vendor/tag.png" alt="Price Tag" class="w-5 h-5" />
          Rs. 49,500,000
        </div>
      </div>

      <!-- Specs -->
      <div
        class="flex flex-col justify-between text[0.875rem] font-extrabold p-4 w-full md:w-2/4 space-y-4 text-black"
      >
        <div>
          <p>
            <span class="font-semibold">Initial Payment:</span> Rs.10,000,00,00
          </p>
          <p>
            <span class="font-semibold">Month Contract:</span> 36
          </p>
          <p>
            <span class="font-semibold">Miles p/a:</span> 6,000
          </p>
        </div>

        <div class="grid grid-cols-2 gap-x-4 gap-y-2 font-semibold text-[0.875rem]">
          <div class="flex items-center">
            <img src="../../assets/vendor/electric.png" alt="Electric" class="mr-2" />
            <p>Electric</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/door.png" alt="5 Doors" class="mr-2" />
            <p>5 Doors</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/automatic.png" alt="Automatic" class="mr-2" />
            <p>Automatic</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/seat.png" alt="5 Seats" class="mr-2" />
            <p>5 Seats</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/saloon.png" alt="Saloon" class="mr-2" />
            <p>Saloon</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/miles.png" alt="373 Miles" class="mr-2" />
            <p>373 Miles</p>
          </div>
        </div>
      </div>

      <!-- View Button -->
      <div
        class="grid flex-cols items-center justify-center bg-[#3e5d71] px-6 py-4 text-white font-medium hover:bg-[#2f4b5b] cursor-pointer"
      >
        <span class="flex items-center gap-2">
          <svg
            xmlns="../../assets/vendor/view.png"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          View
        </span>

        <span class="flex items-center gap-2">
          <svg
            xmlns="../../assets/vendor/view.png"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          View
        </span>

        <span class="flex items-center gap-2">
          <svg
            xmlns="../../assets/vendor/view.png"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          View
        </span>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
    >
      <!-- Car Image -->
      <div class="flex-shrink-0 w-full md:w-1/4 bg-gray-50 flex items-center justify-center p-4">
        <img
          src="../../assets/vendor/car1.png"
          alt="Tesla Model Y"
          class="object-contain w-full h-32 md:h-40"
        />
      </div>

      <!-- Main Info -->
      <div
        class="flex flex-col justify-between p-4 w-full md:w-2/4 border-t md:border-t-0 md:border-l md:border-r border-gray-200"
      >
        <!-- Delivery badge -->
        <div
          class="text-[0.8125rem] font-semibold text-white bg-[#2F4157] px-3 py-1 rounded-md w-fit mb-2"
        >March 2025 Delivery</div>

        <!-- Title & Trim -->
        <div>
          <h3 class="text-[1rem] font-semibold text-gray-900">Tesla Model Y</h3>
          <p class="text-[0.9375rem] font-medium text-black">Long Range Auto RWD 5dr</p>
        </div>

        <div
          class="mt-4 text-primary-600 text-[1.375rem] font-bold text-[#2F4157] flex items-center gap-2"
        >
          <img src="../../assets/vendor/tag.png" alt="Price Tag" class="w-5 h-5" />
          Rs. 49,500,000
        </div>
      </div>

      <!-- Specs -->
      <div
        class="flex flex-col justify-between text[0.875rem] font-extrabold p-4 w-full md:w-2/4 space-y-4 text-black"
      >
        <div>
          <p>
            <span class="font-semibold">Initial Payment:</span> Rs.10,000,00,00
          </p>
          <p>
            <span class="font-semibold">Month Contract:</span> 36
          </p>
          <p>
            <span class="font-semibold">Miles p/a:</span> 6,000
          </p>
        </div>

        <div class="grid grid-cols-2 gap-x-4 gap-y-2 font-semibold text-[0.875rem]">
          <div class="flex items-center">
            <img src="../../assets/vendor/electric.png" alt="Electric" class="mr-2" />
            <p>Electric</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/door.png" alt="5 Doors" class="mr-2" />
            <p>5 Doors</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/automatic.png" alt="Automatic" class="mr-2" />
            <p>Automatic</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/seat.png" alt="5 Seats" class="mr-2" />
            <p>5 Seats</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/saloon.png" alt="Saloon" class="mr-2" />
            <p>Saloon</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/miles.png" alt="373 Miles" class="mr-2" />
            <p>373 Miles</p>
          </div>
        </div>
      </div>

      <!-- View Button -->
      <div
        class="grid flex-cols items-center justify-center bg-[#3e5d71] px-6 py-4 text-white font-medium hover:bg-[#2f4b5b] cursor-pointer"
      >
        <span class="flex items-center gap-2">
          <svg
            xmlns="../../assets/vendor/view.png"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          View
        </span>

        <span class="flex items-center gap-2">
          <svg
            xmlns="../../assets/vendor/view.png"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          View
        </span>

        <span class="flex items-center gap-2">
          <svg
            xmlns="../../assets/vendor/view.png"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          View
        </span>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
    >
      <!-- Car Image -->
      <div class="flex-shrink-0 w-full md:w-1/4 bg-gray-50 flex items-center justify-center p-4">
        <img
          src="../../assets/vendor/car2.png"
          alt="Tesla Model Y"
          class="object-contain w-full h-32 md:h-40"
        />
      </div>

      <!-- Main Info -->
      <div
        class="flex flex-col justify-between p-4 w-full md:w-2/4 border-t md:border-t-0 md:border-l md:border-r border-gray-200"
      >
        <!-- Delivery badge -->
        <div
          class="text-[0.8125rem] font-semibold text-white bg-[#2F4157] px-3 py-1 rounded-md w-fit mb-2"
        >March 2025 Delivery</div>

        <!-- Title & Trim -->
        <div>
          <h3 class="text-[1rem] font-semibold text-gray-900">Tesla Model Y</h3>
          <p class="text-[0.9375rem] font-medium text-black">Long Range Auto RWD 5dr</p>
        </div>

        <!-- Price -->
        <div
          class="mt-4 text-primary-600 text-[1.375rem] font-bold text-[#2F4157] flex items-center gap-2"
        >
          <img src="../../assets/vendor/tag.png" alt="Price Tag" class="w-5 h-5" />
          Rs. 49,500,000
        </div>
      </div>

      <!-- Specs -->
      <div
        class="flex flex-col justify-between text[0.875rem] font-extrabold p-4 w-full md:w-2/4 space-y-4 text-black"
      >
        <div>
          <p>
            <span class="font-semibold">Initial Payment:</span> Rs.10,000,00,00
          </p>
          <p>
            <span class="font-semibold">Month Contract:</span> 36
          </p>
          <p>
            <span class="font-semibold">Miles p/a:</span> 6,000
          </p>
        </div>

        <div class="grid grid-cols-2 gap-x-4 gap-y-2 font-semibold text-[0.875rem]">
          <div class="flex items-center">
            <img src="../../assets/vendor/electric.png" alt="Electric" class="mr-2" />
            <p>Electric</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/door.png" alt="5 Doors" class="mr-2" />
            <p>5 Doors</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/automatic.png" alt="Automatic" class="mr-2" />
            <p>Automatic</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/seat.png" alt="5 Seats" class="mr-2" />
            <p>5 Seats</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/saloon.png" alt="Saloon" class="mr-2" />
            <p>Saloon</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/miles.png" alt="373 Miles" class="mr-2" />
            <p>373 Miles</p>
          </div>
        </div>
      </div>

      <!-- View Button -->
      <div
        class="grid flex-cols items-center justify-center bg-[#3e5d71] px-6 py-4 text-white font-medium hover:bg-[#2f4b5b] cursor-pointer"
      >
        <span class="flex items-center gap-2">
          <svg
            xmlns="../../assets/vendor/view.png"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          View
        </span>

        <span class="flex items-center gap-2">
          <svg
            xmlns="../../assets/vendor/view.png"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          View
        </span>

        <span class="flex items-center gap-2">
          <svg
            xmlns="../../assets/vendor/view.png"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          View
        </span>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
    >
      <!-- Car Image -->
      <div class="flex-shrink-0 w-full md:w-1/4 bg-gray-50 flex items-center justify-center p-4">
        <img
          src="../../assets/vendor/car3.png"
          alt="Tesla Model Y"
          class="object-contain w-full h-32 md:h-40"
        />
      </div>

      <!-- Main Info -->
      <div
        class="flex flex-col justify-between p-4 w-full md:w-2/4 border-t md:border-t-0 md:border-l md:border-r border-gray-200"
      >
        <!-- Delivery badge -->
        <div
          class="text-[0.8125rem] font-semibold text-white bg-[#2F4157] px-3 py-1 rounded-md w-fit mb-2"
        >March 2025 Delivery</div>

        <!-- Title & Trim -->
        <div>
          <h3 class="text-[1rem] font-semibold text-gray-900">Tesla Model Y</h3>
          <p class="text-[0.9375rem] font-medium text-black">Long Range Auto RWD 5dr</p>
        </div>

        <!-- Price -->
        <div
          class="mt-4 text-primary-600 text-[1.375rem] font-bold text-[#2F4157] flex items-center gap-2"
        >
          <img src="../../assets/vendor/tag.png" alt="Price Tag" class="w-5 h-5" />
          Rs. 49,500,000
        </div>
      </div>

      <!-- Specs -->
      <div
        class="flex flex-col justify-between text[0.875rem] font-extrabold p-4 w-full md:w-2/4 space-y-4 text-black"
      >
        <div>
          <p>
            <span class="font-semibold">Initial Payment:</span> Rs.10,000,00,00
          </p>
          <p>
            <span class="font-semibold">Month Contract:</span> 36
          </p>
          <p>
            <span class="font-semibold">Miles p/a:</span> 6,000
          </p>
        </div>

        <div class="grid grid-cols-2 gap-x-4 gap-y-2 font-semibold text-[0.875rem]">
          <div class="flex items-center">
            <img src="../../assets/vendor/electric.png" alt="Electric" class="mr-2" />
            <p>Electric</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/door.png" alt="5 Doors" class="mr-2" />
            <p>5 Doors</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/automatic.png" alt="Automatic" class="mr-2" />
            <p>Automatic</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/seat.png" alt="5 Seats" class="mr-2" />
            <p>5 Seats</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/saloon.png" alt="Saloon" class="mr-2" />
            <p>Saloon</p>
          </div>
          <div class="flex items-center">
            <img src="../../assets/vendor/miles.png" alt="373 Miles" class="mr-2" />
            <p>373 Miles</p>
          </div>
        </div>
      </div>

      <!-- View Button -->
      <div
        class="grid flex-cols items-center justify-center bg-[#3e5d71] px-6 py-4 text-white font-medium hover:bg-[#2f4b5b] cursor-pointer"
      >
        <span class="flex items-center gap-2">
          <svg
            xmlns="../../assets/vendor/view.png"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          View
        </span>

        <span class="flex items-center gap-2">
          <svg
            xmlns="../../assets/vendor/view.png"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          View
        </span>

        <span class="flex items-center gap-2">
          <svg
            xmlns="../../assets/vendor/view.png"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          View
        </span>
      </div>
    </div>
  </section>
  </div>
  </section>
</template>
  
  <script setup>
// No script needed for this UI component unless props or events are added
</script>
  
  <style scoped>
</style>
  Now
  
  