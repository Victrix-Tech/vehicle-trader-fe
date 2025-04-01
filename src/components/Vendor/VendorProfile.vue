<template>
  <section class=" h-[60vh] overflow-y-scroll ">
    <!-- Main Section -->
    <div class="flex flex-col md:flex-row items-center space-x-6 p-10 pt-14 px-6 mb-6 pb-10 border-b border-black">
  <!-- Image on the Top for Small Screens, Left for Medium and Above -->
  <div class="w-full md:w-1/6 mb-6 md:mb-0 md:ml-0">
    <img src="../../assets/vendor/banuka.png" alt="Happy Customer" class="rounded-lg w-2/4 md:w-full mx-auto md:mx-0" />
  </div>

  <!-- Text Content on the Bottom for Small Screens, Right for Medium and Above -->
  <div class="w-full md:w-3/4">
    <h2 class="lg:text-[2rem] md:text-[1rem] text-[1rem] text-[#000000] font-bold leading-8">
      Hello
      <span class="text-[#577C8E]">Banuka Silva</span>
    </h2>

    <p class="mt-4 lg:text-[0.9rem] md:text-[1rem] text-[0.875rem] font-normal text-black text-justify">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since.
    </p>

    <div class="flex flex-wrap items-center space-x-4 mt-4">
      <div class="flex items-center">
        <img src="../../assets/vendor/phone.png" alt="Phone" />
        <span class="text-gray-700 text-sm ml-2">+94 2 000 000</span>
      </div>
      <div class="flex items-center">
        <img src="../../assets/vendor/emailG.png" alt="Email" />
        <span class="text-gray-700 text-sm ml-2">info@vehiclettr.com</span>
      </div>
      <div class="flex items-center">
        <img src="../../assets/vendor/address.png" alt="Location" />
        <span class="text-gray-700 text-sm ml-2">Colombo 8, Maradana Road, Borella.</span>
      </div>
    </div>
  </div>
</div>


        <!-- Vehicle Listing Section -->
         
        <div class="flex items-center  w-full  px-6 ">
            <h2 class="lg:text-[2rem] font-bold leading-normal">
                <span class="text-black">Vehicle</span>
                <span class="text-[#577C8E]"> Listing</span>
            </h2>
            
            <!-- Right-side icons -->
            <div class="flex lg:space-x-4 space-x-2 ml-auto p-10  ">
                <img src="../../assets/vendor/lArrow.png" alt="Icon 1" class="lg:w-[1rem] lg:h-[1.75rem] w-[0.5rem] h-[1rem] cursor-pointer "  />
                <img src="../../assets/vendor/rArrow.png" alt="Icon 2" class="lg:w-[1rem] lg:h-[1.75rem] w-[0.5rem] h-[1rem] cursor-pointer" />
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 pt-1 overflow-y-scroll h-[60vh] justify-items-center">

   
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
        class="col-span-4 bg-[#1E1E1E] text-white xl:text-[16px] lg:text-[14px] text-[13px] md:py-3 py-2 px-4 rounded-s-lg text-center hover:bg-[#577C8E] cursor-pointer">
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
        class="col-span-4 bg-[#1E1E1E] text-white xl:text-[16px] lg:text-[14px] text-[13px] md:py-3 py-2 px-4 rounded-s-lg text-center hover:bg-[#577C8E] cursor-pointer">
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
        class="col-span-4 bg-[#1E1E1E] text-white xl:text-[16px] lg:text-[14px] text-[13px] md:py-3 py-2 px-4 rounded-s-lg text-center hover:bg-[#577C8E] cursor-pointer">
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
        class="col-span-4 bg-[#1E1E1E] text-white xl:text-[16px] lg:text-[14px] text-[13px] md:py-3 py-2 px-4 rounded-s-lg text-center hover:bg-[#577C8E] cursor-pointer">
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
  </section>
</template>
    

    
    