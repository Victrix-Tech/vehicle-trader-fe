<template>
  <div class="bg-[#2F4157] hidden lg:block  ">
    <!-- First row in Header -->
    <div class="h-[50px] grid justify items-center border-b-2 border-[#FFFFFF]">
      <div class="justify flex justify-between font-'Plus Jakarta Sans' text-[#FFFFFF]  lg:px-20 px-5">
        <div class="font-semibold text-[12px]">Welcome to Vehicle Trader</div>
        <div class="flex gap-3 text-[14px] font-bold">
          <div class="flex gap-4">
            <img src="../assets/wishlist/loginLogo.png">
            <a href="#">Login</a>
          </div>
          <div>/</div>
          <div>
            <a href="#">Register</a>

          </div>
          
        </div>
      </div>
    </div>

    <!-- Second row in Header -->
    <div class="grid justify items-center lg:px-20 px-5 h-[100px] ">
      <div class="border-b-2 border-[#FFFFFF] pt-7 pb-7">
        <div class="grid grid-cols-4 gap-4 justify justify-between">
          <div>
            <img src="../assets/wishlist/logoWishlist.png">
          </div>
          <div class="col-span-2">
            
              <form class="max-w-xl mx-auto">
                  <div class="flex">
                      <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                      <button id="dropdown-button" data-dropdown-toggle="dropdown" class="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-[#FFFFFF] border-r-2 border-[#3E3E3E] rounded-s-sm focus:outline-none" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                      </button>
                      <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                          <li>
                              <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                          </li>
                          <li>
                              <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                          </li>
                          <li>
                              <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                          </li>
                          <li>
                              <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                          </li>
                          </ul>
                      </div>
                      <div class="relative w-full">
                          <input type="search" id="search-dropdown" class="block p-2.5 focus:outline-none w-full z-20 text-sm text-gray-900 bg-[#FFFFFF] rounded-e-sm border-s-gray-50 border-s-2 border border-gray-300 " placeholder="Search All Cars" required />
                          <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#CFB680] rounded-e-sm">
                              <img src="../assets/wishlist/searchIcon.png">
                              <!-- <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                              </svg> -->
                              <span class="sr-only">Search</span>
                          </button>
                      </div>
                  </div>
              </form>

          </div>
          <div class="flex gap-4 justify-end text-[#FFFFFF]">
            <!-- Account -->
            <div class="flex  gap-3">
              <div class="w-33 h-auto">
                <img src="../assets/wishlist/account.png">
              </div>
              <div class=" flex flex-col space-y-0 " >
                <p class="text-[12px] py-0 ">Login</p>
                <a href="#" class="font-semibold text-[12px] py-0 mb-[10rem] ">My Account</a>

              </div>
              
            </div>
            <!-- Favourite -->
            <div class="flex  gap-3">
              <div class="w-33 h-auto">
                <img src="../assets/wishlist/fov.png">
              </div>
              <div class=" flex flex-col space-y-0 " >
                <p class="text-[12px] py-0 ">Favorite</p>
                <a href="#" class="font-semibold text-[12px] py-0 mb-[10rem] ">My Favorite</a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- third row in Header -->
     <div class="flex text-[#FFFFFF] gap-[4.8rem] justify-end lg:px-20 px-5 h-[50px] justify items-center lg:text-[15px] text-[10px] ">
      <div>
        <a href="#" class="font-semibold py-0 mb-[10rem] ">Used Cars</a>
      </div>
      <div>
        <a href="#" class="font-semibold py-0 mb-[10rem] ">New Cars</a>
      </div>
      <div>
        <a href="#" class="font-semibold py-0 mb-[10rem] ">Sell Your Car</a>
      </div>
      <div>
        <a href="#" class="font-semibold  py-0 mb-[10rem] "> Value Your Care</a>
      </div>
      <div>
        <a href="#" class="font-semibold  py-0 mb-[10rem] ">Car Reviews</a>
      </div>
      <div>
        <a href="#" class="font-semibold  py-0 mb-[10rem] ">Car Leasing</a>
      </div>
      <div>
        <a href="#" class="font-semibold  py-0 mb-[10rem] ">Electric Cars</a>
      </div>
      <div>
        <a href="#" class="font-semibold  py-0 mb-[10rem] ">Buy a Car Online</a>
      </div>
     </div>
    

  </div>
</template>