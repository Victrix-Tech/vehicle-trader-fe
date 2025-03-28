<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faBolt
} from "@fortawesome/free-solid-svg-icons";
</script>

<template>
    <div class="md:py-12 pt-3 pb-5 text-white bg-[#262626]">
        <div class="container px-4 mx-auto">
            <!-- Header Section -->
            <div class="">
                <div class="grid py-5 md:py-0 xl:py-5 grid-col-2">
                    <div class="text-end">
                        <h2 class="xl:text-[40px] lg:text-[35px] md:text-[30px] text-[28px] text-[#FFFFFF] font-bold text-end">Today’s Top<span
                                class="text-[#CFB680]">Vehicles</span></h2>
                        <p class="lg:text-[24px] md:text-[20px] text-[18px] font-semibold lg:mb-5 text-[#ffffff]">How much can You Save?
                        </p>
                        <p class="mt-4 lg:text-[16px] md:text-[15] text-[13px] font-normal text-white">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the <br /> industry's standard dummy text ever since the 1500s, when an unknown printer
                            took.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Swiper Carousel -->
            <div class="relative mt-0 md:mt-8">
                <swiper :modules="[Navigation, Pagination]" :slides-per-view="1" :space-between="20" :breakpoints="{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 4 },
                    1500: { slidesPerView: 5 }
                }" :pagination="{ clickable: true }"
                    :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
                    class="swiper-container">
                    <!-- Product Card - 01 -->
                    <swiper-slide>
                        <div class="bg-white rounded-lg shadow-lg">
                            <span
                                class="flex font-semibold text-white bg-[#577C8E] text-end py-1 px-4 xl:text-[16px] lg:text-[13px] md:text-[14px] text-[12px] absolute rounded-s-lg top-5 right-0">Rs.
                                12,450,000 /=
                            </span>
                            <img src="../../../../public/images/product-02.png" alt="BMW I8"
                                class="object-contain w-full h-60">
                            <h3 class="bg-black xl:text-[20px] lg:text-[16px] text-[15px] font-bold px-3 py-2">BMW I8 2016</h3>
                            <div class="px-4 py-2 mt-2 text-sm text-gray-700">
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
                            </div>
                        </div>
                    </swiper-slide>
                    <!-- Product Card - 02 -->
                    <swiper-slide>
                        <div class="bg-white rounded-lg shadow-lg">
                            <span
                                class="flex font-semibold text-white bg-[#577C8E] text-end py-1 px-4 xl:text-[16px] lg:text-[13px] md:text-[14px] text-[12px] absolute rounded-s-lg top-5 right-0">Rs.
                                12,450,000 /=
                            </span>
                            <img src="../../../../public/images/product-01.png" alt="BMW I8"
                                class="object-contain w-full h-60">
                            <h3 class="bg-black xl:text-[20px] lg:text-[16px] text-[15px] font-bold px-3 py-2">Tesla Model S 2024</h3>
                            <div class="px-4 py-2 mt-2 text-sm text-gray-700">
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
                            </div>
                        </div>
                    </swiper-slide>
                    <!-- Product Card - 03 -->
                    <swiper-slide>
                        <div class="bg-white rounded-lg shadow-lg">
                            <span
                                class="flex font-semibold text-white bg-[#577C8E] text-end py-1 px-4 xl:text-[16px] lg:text-[13px] md:text-[14px] text-[12px] absolute rounded-s-lg top-5 right-0">Rs.
                                12,450,000 /=
                            </span>
                            <img src="../../../../public/images/product-03.png" alt="BMW I8"
                                class="object-contain w-full h-60">
                            <h3 class="bg-black xl:text-[20px] lg:text-[16px] text-[15px] font-bold px-3 py-2">Mercedes-Benz SUV</h3>
                            <div class="px-4 py-2 mt-2 text-sm text-gray-700">
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
                            </div>
                        </div>
                    </swiper-slide>
                    <!-- Product Card - 04 -->
                    <swiper-slide>
                        <div class="bg-white rounded-lg shadow-lg">
                            <span
                                class="flex font-semibold text-white bg-[#577C8E] text-end py-1 px-4 xl:text-[16px] lg:text-[13px] md:text-[14px] text-[12px] absolute rounded-s-lg top-5 right-0">Rs.
                                12,450,000 /=
                            </span>
                            <img src="../../../../public/images/product-04.png" alt="BMW I8"
                                class="object-contain w-full h-60">
                            <h3 class="bg-black xl:text-[20px] lg:text-[16px] text-[15px] font-bold px-3 py-2">Volkswagen Two VW</h3>
                            <div class="px-4 py-2 mt-2 text-sm text-gray-700">
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
                            </div>
                        </div>
                    </swiper-slide>
                    <!-- Product Card - 05 -->
                    <swiper-slide>
                        <div class="bg-white rounded-lg shadow-lg">
                            <span
                                class="flex font-semibold text-white bg-[#577C8E] text-end py-1 px-4 xl:text-[16px] lg:text-[13px] md:text-[14px] text-[12px] absolute rounded-s-lg top-5 right-0">Rs.
                                12,450,000 /=
                            </span>
                            <img src="../../../../public/images/product-02.png" alt="BMW I8"
                                class="object-contain w-full h-60">
                            <h3 class="bg-black xl:text-[20px] lg:text-[16px] text-[15px] font-bold px-3 py-2">BMW I8 2016</h3>
                            <div class="px-4 py-2 mt-2 text-sm text-gray-700">
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
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>

                <!-- Navigation Arrows -->
                <button
                    class="absolute top-[40rem] z-10 swiper-button-prev">
                </button>
                <button
                    class="absolute right-0 z-10 p-3 transform -translate-y-1/2 swiper-button-next top-1/2 ">
                </button>
            </div>

            <!-- View More Button -->
            <div class="mt-3 md:mt-8 justify-self-center">
                <button
                    class="md:px-36 px-24 md:py-3 py-2 text-[#CFB680] bg-[#2F4157] md:text-[16px] text-[14px] rounded hover:bg-[#CFB680] hover:text-white font-semibold mt-3">
                    <a href="#">View More</a>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default {
    components: { Swiper, SwiperSlide },
    setup() {
        return { Navigation, Pagination };
    }
};
</script>