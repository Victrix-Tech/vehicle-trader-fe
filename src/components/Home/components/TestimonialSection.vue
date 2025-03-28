<template>
    <div class="md:py-12 pt-3 pb-5 text-white bg-[#262626]">
        <div class="container px-4 mx-auto">
            <!-- Header Section -->
            <div class="">
                <div class="grid py-5 md:py-0 xl:py-5 grid-col-2">
                    <div class="text-end">
                        <h2
                            class="xl:text-[40px] lg:text-[35px] md:text-[30px] text-[28px] text-[#FFFFFF] font-bold text-end">
                            Client <span class="text-[#CFB680]">Testimonial</span></h2>
                        <p class="lg:text-[24px] md:text-[20px] text-[18px] font-semibold lg:mb-5 text-[#ffffff]">Lorem
                            Ipsum is simply dummy text of the printing
                        </p>
                    </div>
                </div>
            </div>

            <!-- Swiper Carousel -->
            <div class="relative mt-0 md:mt-8">
                <swiper :modules="[Navigation, Pagination]" :slides-per-view="1" :space-between="20" :breakpoints="{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 3 },
                    1500: { slidesPerView: 3 }
                }" class="swiper-container">
                    <!-- Testimonial Card - 01 -->
                    <swiper-slide>
                        <div>
                            <div class="p-5 bg-white rounded-lg shadow-lg">
                                <img src="../../../../public/images/review-icon.png" alt="Icon" class="mx-auto">
                                <p
                                    class="xl:text-[16px] lg:text-[14px] md:text-[13px] text-[14px] font-normal text-black text-center mt-4 pb-8">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                            <img src="../../../../public/images/profile-02.png" alt="Profile"
                                class="mx-auto -mt-10 -z-30">
                            <p class="text-center text-[18px]">Jim Hendricks</p>
                        </div>
                    </swiper-slide>
                    
                    <!-- Testimonial Card - 02 -->
                    <swiper-slide>
                        <div>
                            <div class="p-5 bg-[linear-gradient(to_top,#FFFFFF_10%,#CFB680_90%)] rounded-lg shadow-lg">
                                <img src="../../../../public/images/review-icon.png" alt="Icon" class="mx-auto">
                                <p
                                    class="xl:text-[16px] lg:text-[14px] md:text-[13px] text-[14px] font-normal text-black text-center mt-4 pb-8">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                            <img src="../../../../public/images/profile-01.png" alt="Profile"
                                class="mx-auto -mt-10 -z-30">
                            <p class="text-center text-[20px]">Jim Hendricks</p>
                        </div>
                    </swiper-slide>
                    
                    <!-- Testimonial Card - 01 -->
                    <swiper-slide>
                        <div>
                            <div class="p-5 bg-white rounded-lg shadow-lg">
                                <img src="../../../../public/images/review-icon.png" alt="Icon" class="mx-auto">
                                <p
                                    class="xl:text-[16px] lg:text-[14px] md:text-[13px] text-[14px] font-normal text-black text-center mt-4 pb-8">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                            <img src="../../../../public/images/profile-03.png" alt="Profile"
                                class="mx-auto -mt-10 -z-30">
                            <p class="text-center text-[18px]">Jim Hendricks</p>
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
    }
};
</script>