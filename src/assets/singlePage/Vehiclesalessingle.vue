<template>
  <div>
    <img class="w-full" src="../assets/wishlist/wishlistBg.png" alt="Wishlist Background" />

    <div class="bg-gray-100 p-6">
      <div class="mx-auto p-[2.5rem] max-w-[90rem]">
        <!-- Tabs -->
        <div class="flex justify-center space-x-6 border-b pb-2 border-[#A3A3A3]">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            @click="activeTab = tab.value"
            :class="{'border-black text-black': activeTab === tab.value, 'text-gray-500': activeTab !== tab.value}"
            class="pb-2 border-b-2 font-semibold"
          >{{ tab.label }}</button>
        </div>

        <!-- Content -->
        <div class="mt-6 border-b border-[#A3A3A3]">
          <div v-if="activeTab === 'summary'">
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li v-for="(item, index) in vehicleSummary" :key="index" class="flex items-center">
                <img
                  src="../assets/vehiclesalessingle/listSvg.png"
                  alt="List Icon"
                  class="w-4 h-4 mr-4"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
            <div class="flex gid lg:grid-cols-2 grid-cols-1 mt-4">
              <div class="lg:w-[43.1rem]"></div>
              <div class="flex gap-3">
                <div class="mt-1">
                  <img src="../assets/vehiclesalessingle/location.png" />
                </div>
                <div class="text-gray-800 font-semibold mb-6">
                  <p class="mb-2">Can be seen at:</p>
                  <p>A A Auto Mart</p>
                  <p>No 25 Dutugemunu Street,</p>
                  <p>Kohuwala</p>
                </div>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'additional'">
            <h3 class="text-xl font-semibold">Additional Information</h3>
            <p
              class="text-gray-600"
            >Details about additional features, warranty, or special conditions.</p>
          </div>

          <div v-if="activeTab === 'reviews'">
            <h3 class="text-xl font-semibold">Customer Reviews</h3>
            <p class="text-gray-600">Read what other customers have to say about this vehicle.</p>
          </div>
        </div>
      </div>
    </div>
    <div>hee</div>
    <div class="ml-20 mr-20">
      <!-- /////////////// -->
      <div class="md:py-12 pt-3 pb-5 text-white bg-[#ffff]">
        <div class="container px-4 mx-auto">
          <!-- Header Section -->
          <div class>
            <div class="grid py-5 md:py-0 xl:py-5 grid-col-2">
              <div class="text-center">
                <h2
                  class="xl:text-[40px] lg:text-[35px] md:text-[30px] text-[28px] text-[#000000] font-bold"
                >You May Also Like</h2>
              </div>
            </div>
          </div>

          <!-- Swiper Carousel -->
          <div class="relative mt-0 md:mt-8">
            <swiper
              :modules="[Navigation, Pagination]"
              :slides-per-view="1"
              :space-between="20"
              :breakpoints="{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1280: { slidesPerView: 4 },
                            1500: { slidesPerView: 5 }
                        }"
              :pagination="{ clickable: true }"
              :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
              class="swiper-container"
            >
              <!-- Product Card - 01 -->
              <swiper-slide>
                <div class="bg-[#FCFCFC] rounded-lg shadow-lg">
                  <img
                    class="grid justify-items-end p-2"
                    src="../assets/vehiclesalessingle/heart.png"
                  />
                  <img
                    src="../assets/singlePage/product-02.png"
                    alt="BMW I8"
                    class="object-contain w-full h-60"
                  />

                  <div class="p-5">
                    <div class="justify justify-between items-center w-[10rem]">
                      <div
                        class="border border-[#2F4157] bg-[#2F4157] text-[#FFFF] rounded-sm pl-3 pr-3 p-2 text-[13px]"
                      >March 2025 Delivery</div>
                    </div>
                    <div class="text-[#000000] font-semibold">Tesla Model Y</div>
                    <div class="text-[#000000] font-medium">Long Range Auto RWD 5dr</div>

                    <div class="flex place-items-center gap-3 pt-5 mb-3">
                      <div>
                        <img
                          class="w-[18px] h-[18px]"
                          src="../assets/vehiclesalessingle/priceTag.png"
                        />
                      </div>
                      <div>
                        <h2 class="text-[#2F4157] font-extrabold text-xl">Rs.&nbsp; &nbsp;49,500,000</h2>
                      </div>
                    </div>

                    <div class>
                      <div class="flex grid lg:grid-cols-2 grid-cols-1 text-[14px]">
                        <div class="text-[#000000] font-medium">Initial Payment</div>
                        <div class="text-[#000000] font-bold">Rs.10,000,00,00</div>
                      </div>
                      <div class="flex grid lg:grid-cols-2 grid-cols-1 text-[14px]">
                        <div class="text-[#000000] font-medium">Month Contract</div>
                        <div class="text-[#000000] font-bold">36</div>
                      </div>
                      <div class="flex grid lg:grid-cols-2 grid-cols-1 text-[14px]">
                        <div class="text-[#000000] font-medium">Miles p/a</div>
                        <div class="text-[#000000] font-bold">6,000</div>
                      </div>
                    </div>

                    <div
                      class="flex gap-2 grid lg:grid-cols-2 grid-cols-1 text-[#000000] text-[14px] border-t border-[#A3A3A3] mt-5"
                    >
                      <div class="flex gap-2 place-items-center pt-1 mt-5">
                        <div>
                          <img
                            class="w-[15px] h-[15px]"
                            src="../assets/vehiclesalessingle/Electric.png"
                          />
                        </div>
                        <div>
                          <p class="font-semibold">Electric</p>
                        </div>
                      </div>

                      <div class="flex gap-2 place-items-center pt-1 lg:mt-5">
                        <div>
                          <img
                            class="w-[15px] h-[15px]"
                            src="../assets/vehiclesalessingle/door.png"
                          />
                        </div>
                        <div>
                          <p class="font-semibold">5 Doors</p>
                        </div>
                      </div>

                      <div class="flex gap-2 place-items-center">
                        <div>
                          <img
                            class="w-[15px] h-[15px]"
                            src="../assets/vehiclesalessingle/Automatic.png"
                          />
                        </div>
                        <div>
                          <p class="font-semibold">Automatic</p>
                        </div>
                      </div>

                      <div class="flex gap-2 place-items-center">
                        <div>
                          <img
                            class="w-[15px] h-[15px]"
                            src="../assets/vehiclesalessingle/seat.png"
                          />
                        </div>
                        <div>
                          <p class="font-semibold">5 Seats</p>
                        </div>
                      </div>

                      <div class="flex gap-2 place-items-center">
                        <div>
                          <img
                            class="w-[18px] h-[18px]"
                            src="../assets/vehiclesalessingle/Saloon.png"
                          />
                        </div>
                        <div>
                          <p class="font-semibold">Saloon</p>
                        </div>
                      </div>

                      <div class="flex gap-2 place-items-center">
                        <div>
                          <img
                            class="w-[18px] h-[18px]"
                            src="../assets/vehiclesalessingle/miles.png"
                          />
                        </div>
                        <div>
                          <p class="font-semibold">373 Miles</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- <div class="px-4 py-2 mt-2 text-sm text-gray-700">
                                        <div class="grid grid-cols-2">
                                            <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                                                <p>Mileage:</p>
                                            </div>
                                            <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold mb-2">
                                                <p>54,000km</p>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 mb-2">
                                            <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                                                <p>Door :</p>
                                            </div>
                                            <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold">
                                                <p>2</p>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 mb-2">
                                            <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                                                <p>Body Type :</p>
                                            </div>
                                            <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold">
                                                <p>Car</p>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 mb-2">
                                            <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                                                <p>Fuel :</p>
                                            </div>
                                            <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold">
                                                <p>Petrol
                                                </p>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 mb-2">
                                            <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                                                <p>Year :</p>
                                            </div>
                                            <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold">
                                                <p>2020/6
                                                </p>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 mb-2">
                                            <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                                                <p>Location :</p>
                                            </div>
                                            <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold">
                                                <p>Colombo 8
                                                </p>
                                            </div>
                                        </div>

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
                  </div>-->
                </div>
              </swiper-slide>
              <!-- Product Card - 02 -->
              <swiper-slide>
                <div class="bg-white rounded-lg shadow-lg">
                  <span
                    class="flex font-semibold text-white bg-[#577C8E] text-end py-1 px-4 xl:text-[16px] lg:text-[13px] md:text-[14px] text-[12px] absolute rounded-s-lg top-5 right-0"
                  >
                    Rs.
                    12,450,000 /=
                  </span>
                  <img
                    src="../assets/singlePage/product-01.png"
                    alt="BMW I8"
                    class="object-contain w-full h-60"
                  />
                  <h3
                    class="bg-black xl:text-[20px] lg:text-[16px] text-[15px] font-bold px-3 py-2"
                  >Tesla Model S 2024</h3>
                  <div class="px-4 py-2 mt-2 text-sm text-gray-700">
                    <div class="grid grid-cols-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Mileage:</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold mb-2"
                      >
                        <p>54,000km</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Door :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>2</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Body Type :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>Car</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Fuel :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>Petrol</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Year :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>2020/6</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Location :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>Colombo 8</p>
                      </div>
                    </div>

                    <div class="items-center justify-between py-4 mt-5 border-t xxl:p-4">
                      <div class="grid grid-cols-5 md:mx-4">
                        <div
                          class="col-span-4 bg-[#1E1E1E] text-white xl:text-[16px] lg:text-[14px] text-[13px] md:py-3 py-2 px-4 rounded-s-lg text-center hover:bg-[#577C8E]"
                        >Read More</div>
                        <div
                          class="bg-[#577C8E] text-white md:text-[16px] text-[13px] md:py-3 py-2 rounded-e-lg col-span-1 text-center"
                        >
                          <i class="fa fa-angle-right text-[40px]"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <!-- Product Card - 03 -->
              <swiper-slide>
                <div class="bg-white rounded-lg shadow-lg">
                  <span
                    class="flex font-semibold text-white bg-[#577C8E] text-end py-1 px-4 xl:text-[16px] lg:text-[13px] md:text-[14px] text-[12px] absolute rounded-s-lg top-5 right-0"
                  >
                    Rs.
                    12,450,000 /=
                  </span>
                  <img
                    src="../../../../public/images/product-03.png"
                    alt="BMW I8"
                    class="object-contain w-full h-60"
                  />
                  <h3
                    class="bg-black xl:text-[20px] lg:text-[16px] text-[15px] font-bold px-3 py-2"
                  >Mercedes-Benz SUV</h3>
                  <div class="px-4 py-2 mt-2 text-sm text-gray-700">
                    <div class="grid grid-cols-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Mileage:</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold mb-2"
                      >
                        <p>54,000km</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Door :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>2</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Body Type :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>Car</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Fuel :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>Petrol</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Year :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>2020/6</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Location :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>Colombo 8</p>
                      </div>
                    </div>

                    <div class="items-center justify-between py-4 mt-5 border-t xxl:p-4">
                      <div class="grid grid-cols-5 md:mx-4">
                        <div
                          class="col-span-4 bg-[#1E1E1E] text-white xl:text-[16px] lg:text-[14px] text-[13px] md:py-3 py-2 px-4 rounded-s-lg text-center hover:bg-[#577C8E]"
                        >Read More</div>
                        <div
                          class="bg-[#577C8E] text-white md:text-[16px] text-[13px] md:py-3 py-2 rounded-e-lg col-span-1 text-center"
                        >
                          <i class="fa fa-angle-right text-[40px]"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <!-- Product Card - 04 -->
              <swiper-slide>
                <div class="bg-white rounded-lg shadow-lg">
                  <span
                    class="flex font-semibold text-white bg-[#577C8E] text-end py-1 px-4 xl:text-[16px] lg:text-[13px] md:text-[14px] text-[12px] absolute rounded-s-lg top-5 right-0"
                  >
                    Rs.
                    12,450,000 /=
                  </span>
                  <img
                    src="../../../../public/images/product-04.png"
                    alt="BMW I8"
                    class="object-contain w-full h-60"
                  />
                  <h3
                    class="bg-black xl:text-[20px] lg:text-[16px] text-[15px] font-bold px-3 py-2"
                  >Volkswagen Two VW</h3>
                  <div class="px-4 py-2 mt-2 text-sm text-gray-700">
                    <div class="grid grid-cols-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Mileage:</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold mb-2"
                      >
                        <p>54,000km</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Door :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>2</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Body Type :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>Car</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Fuel :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>Petrol</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Year :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>2020/6</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Location :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>Colombo 8</p>
                      </div>
                    </div>

                    <div class="items-center justify-between py-4 mt-5 border-t xxl:p-4">
                      <div class="grid grid-cols-5 md:mx-4">
                        <div
                          class="col-span-4 bg-[#1E1E1E] text-white xl:text-[16px] lg:text-[14px] text-[13px] md:py-3 py-2 px-4 rounded-s-lg text-center hover:bg-[#577C8E]"
                        >Read More</div>
                        <div
                          class="bg-[#577C8E] text-white md:text-[16px] text-[13px] md:py-3 py-2 rounded-e-lg col-span-1 text-center"
                        >
                          <i class="fa fa-angle-right text-[40px]"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <!-- Product Card - 05 -->
              <swiper-slide>
                <div class="bg-white rounded-lg shadow-lg">
                  <span
                    class="flex font-semibold text-white bg-[#577C8E] text-end py-1 px-4 xl:text-[16px] lg:text-[13px] md:text-[14px] text-[12px] absolute rounded-s-lg top-5 right-0"
                  >
                    Rs.
                    12,450,000 /=
                  </span>
                  <img
                    src="../assets/singlePage/product-02.png"
                    alt="BMW I8"
                    class="object-contain w-full h-60"
                  />
                  <h3
                    class="bg-black xl:text-[20px] lg:text-[16px] text-[15px] font-bold px-3 py-2"
                  >BMW I8 2016</h3>
                  <div class="px-4 py-2 mt-2 text-sm text-gray-700">
                    <div class="grid grid-cols-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Mileage:</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold mb-2"
                      >
                        <p>54,000km</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Door :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>2</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Body Type :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>Car</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Fuel :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>Petrol</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Year :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>2020/6</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 mb-2">
                      <div class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
                        <p>Location :</p>
                      </div>
                      <div
                        class="xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] font-bold"
                      >
                        <p>Colombo 8</p>
                      </div>
                    </div>

                    <div class="items-center justify-between py-4 mt-5 border-t xxl:p-4">
                      <div class="grid grid-cols-5 md:mx-4">
                        <div
                          class="col-span-4 bg-[#1E1E1E] text-white xl:text-[16px] lg:text-[14px] text-[13px] md:py-3 py-2 px-4 rounded-s-lg text-center hover:bg-[#577C8E]"
                        >Read More</div>
                        <div
                          class="bg-[#577C8E] text-white md:text-[16px] text-[13px] md:py-3 py-2 rounded-e-lg col-span-1 text-center"
                        >
                          <i class="fa fa-angle-right text-[40px]"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>

            <!-- Navigation Arrows -->
            <button class="absolute top-[40rem] z-10 swiper-button-prev"></button>
            <button
              class="absolute right-0 z-10 p-3 transform -translate-y-1/2 swiper-button-next top-1/2"
            ></button>
          </div>

          <!-- View More Button -->
          <div class="mt-3 md:mt-8 justify-self-center">
            <button
              class="md:px-36 px-24 md:py-3 py-2 text-[#CFB680] bg-[#2F4157] md:text-[16px] text-[14px] rounded hover:bg-[#CFB680] hover:text-white font-semibold mt-3"
            >
              <a href="#">View More</a>
            </button>
          </div>
        </div>
      </div>

      <!-- /////////////////// -->
    </div>

    <div></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
export default {
  data() {
    return {
      activeTab: "summary",
      tabs: [
        { label: "Vehicle Summary", value: "summary" },
        { label: "Additional Information", value: "additional" },
        { label: "Reviews", value: "reviews" }
      ],
      vehicleSummary: [
        "Land Rover Range Rover Sport HSE Autobiography",
        "Year of Manufacture 2015",
        "3rd Owner",
        "CAK - XXXX (Special Number Series)",
        "Mileage 73,000 kms Only",
        "Complete Maintenance Records Available",
        "Metallic Gray Color Exterior with Ebony Black Leather Interior",
        "Head Up Display",
        "Panoramic Full Glass Roof with Open Sunroof",
        "Original Rear Entertainment",
        "Leather Electric Seats",
        "Dual Electric Seats with Memory",
        "Cool Box",
        "Dual Malfunction",
        "Cruise Control",
        "Soft Close Doors",
        "Off Road Package",
        "Dual Exhaust System",
        "Factory Fitted Side Step",
        "Original Alloy Wheels",
        "Power Tailgate",
        "Immaculate Condition",
        "Many More Options Available on the Jeep",
        "Height Control",
        "Sliding Sunroof",
        "Meridian Surrounding Sound System"
      ]
    };
  },
  components: { Swiper, SwiperSlide },
  setup() {
    return { Navigation, Pagination };
  }
};
</script>
