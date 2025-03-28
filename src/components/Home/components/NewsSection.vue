<template>
    <div class="py-12 bg-gray-100">
        <div class="container px-4 mx-auto">
            <div class="flex flex-row md:mb-5">
                <div class="grid cols-2">
                    <div class="grid-col-4">
                        <h2 class="md:text-[32px] text-[#000000] font-bold text-[25px]">Our Latest <span
                                class="text-[#577C8E]">News</span>
                        </h2>
                        <p class="md:text-[22px] font-semibold mb-5 text-[16px]">Lorem ipsum dolor sit amet</p>

                    </div>

                </div>
            </div>

            <div class="relative">
                <swiper :modules="[Navigation, Pagination]" :slides-per-view="1" :space-between="20" :breakpoints="{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1500: { slidesPerView: 4 }
                }" :pagination="{ clickable: true }"
                    :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
                    class="swiper-container">
                    <!-- Slide 1 -->
                    <swiper-slide>
                        <div
                            class="bg-white border-1 border-b-8 border-b-[#fff0] rounded-lg border-[#ff] shadow-lg-4 hover:border-[#577C8E] hover:border-b-8 hover:shadow-xl">
                            <img src="../../../../public/images/news-01.png" alt="Car News 1"
                                class="object-cover w-full">
                            <div class="px-6 -mt-3 pb-7">
                                <span class="text-white bg-[#577C8E] text-[10px] py-1 px-2">NEW VEHICLE</span>
                                <div class="flex flex-row mb-3">
                                    <div class="grid grid-cols-1 md:grid-cols-2">
                                        <div>
                                            <p class="mt-4 text-[14px] font-medium text-black">| 22 February, 2025 </p>
                                        </div>
                                        <div>
                                            <p class="md:mt-4 text-[14px] font-medium text-black md:text-end mt-2">
                                                <i class="fa fa-circle" aria-hidden="true"></i> By Nina
                                                Brown
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="mb-3 md:text-[20px] text-[17px] font-medium text-black">What is Lorem Ipsum?
                                </h3>
                                <p class="md:text-[14px] text-[12px] text-black">Lorem Ipsum is simply dummy text of the
                                    printing and
                                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer took.
                                </p>
                            </div>
                        </div>
                    </swiper-slide>

                    <!-- Slide 2 -->
                    <swiper-slide>
                        <div
                            class="bg-white border-1 rounded-lg border-[#ff] shadow-lg-4 hover:border-[#577C8E] hover:border-b-8 hover:shadow-xl">
                            <img src="../../../../public/images/news-02.png" alt="Car News 1"
                                class="object-cover w-full">
                            <div class="px-6 -mt-3 pb-7">
                                <span class="text-white bg-[#577C8E] text-[10px] py-1 px-2">NEW VEHICLE</span>
                                <div class="flex flex-row mb-3">
                                    <div class="grid grid-cols-1 md:grid-cols-2">
                                        <div>
                                            <p class="mt-4 text-[14px] font-medium text-black">| 22 February, 2025 </p>
                                        </div>
                                        <div>
                                            <p class="md:mt-4 text-[14px] font-medium text-black md:text-end mt-2">
                                                <i class="fa fa-circle text-[3px] me-1"></i> By Nina
                                                Brown
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="mb-3 md:text-[20px] text-[17px] font-medium text-black">What is Lorem Ipsum?
                                </h3>
                                <p class="md:text-[14px] text-[12px] text-black">Lorem Ipsum is simply dummy text of the
                                    printing and
                                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer took.
                                </p>
                            </div>
                        </div>
                    </swiper-slide>

                    <!-- Slide 3 -->
                    <swiper-slide>
                        <div
                            class="bg-white border-1 rounded-lg border-[#ff] shadow-lg-4 hover:border-[#577C8E] hover:border-b-8 hover:shadow-xl">
                            <img src="../../../../public/images/news-03.png" alt="Car News 1"
                                class="object-cover w-full">
                            <div class="px-6 -mt-3 pb-7">
                                <span class="text-white bg-[#577C8E] text-[10px] py-1 px-2">NEW VEHICLE</span>
                                <div class="flex flex-row mb-3">
                                    <div class="grid grid-cols-1 md:grid-cols-2">
                                        <div>
                                            <p class="mt-4 text-[14px] font-medium text-black">| 22 February, 2025 </p>
                                        </div>
                                        <div>
                                            <p class="md:mt-4 text-[14px] font-medium text-black md:text-end mt-2">
                                                <i class="fa fa-circle text-[3px] me-1"></i>  By Nina
                                                Brown
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="mb-3 md:text-[20px] text-[17px] font-medium text-black">What is Lorem Ipsum?
                                </h3>
                                <p class="md:text-[14px] text-[12px] text-black">Lorem Ipsum is simply dummy text of the
                                    printing and
                                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer took.
                                </p>
                            </div>
                        </div>
                    </swiper-slide>

                    <!-- Slide 4 -->
                    <swiper-slide>
                        <div
                            class="bg-white border-1 rounded-lg border-[#ff] shadow-lg-4 hover:border-[#577C8E] hover:border-b-8 hover:shadow-xl">
                            <img src="../../../../public/images/news-01.png" alt="Car News 1"
                                class="object-cover w-full">
                            <div class="px-6 -mt-3 pb-7">
                                <span class="text-white bg-[#577C8E] text-[10px] py-1 px-2">NEW VEHICLE</span>
                                <div class="flex flex-row mb-3">
                                    <div class="grid grid-cols-1 md:grid-cols-2">
                                        <div>
                                            <p class="mt-4 text-[14px] font-medium text-black">| 22 February, 2025 </p>
                                        </div>
                                        <div>
                                            <p class="md:mt-4 text-[14px] font-medium text-black md:text-end mt-2">
                                                <i class="fa fa-circle text-[3px] me-1"></i>  By Nina
                                                Brown
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="mb-3 md:text-[20px] text-[17px] font-medium text-black">What is Lorem Ipsum?
                                </h3>
                                <p class="md:text-[14px] text-[12px] text-black">Lorem Ipsum is simply dummy text of the
                                    printing and
                                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer took.
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
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
    },
};
</script>
