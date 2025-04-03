<template>
    <section
        class="md:py-12 h-screen pt-12 pb-0 bg-gray-100 bg-[url('../../../../public/images/slider-bg.png')] bg-no-repeat bg-cover bg-right -mt-20">
        <div class="container px-4 mx-auto">
            <div class="flex flex-col items-center lg:mt-5 md:mt-11 mt-10 lg:h-[550px] md:flex-row">
                
                <!-- Slider for Mobile View-->
                <div
                    class="lg:w-2/4 p-8 font-bold text-left text-white font-alumni-sans text-[70px] uppercase leading-[3rem] drop-shadow-[0_35px_35px_#000] italic pt-0 block md:hidden">
                    The perfect<br>
                    ride exists
                </div>
                
                <!-- Search Form -->
                <div class="w-full p-6 md:pt-0 pt-6 bg-white rounded-lg shadow-lg md:w-2/4 md:bg-[#fff0]">
                    <h2 class="xl:text-[40px] md:text-[30px] text-[25px] text-[#000000] font-bold leading-8 mb-5">Find
                        Your
                        <span class="text-[#577C8E]">Perfect Car</span>
                    </h2>
                    <form class="grid gap-4 md:grid-cols-3">
                        <input type="text" placeholder="Type Your Keyword"
                            class="col-span-1 p-3 border rounded-md md:col-span-3 text-[14px]" />
                        <select class="p-3 border rounded-md text-[14px]">
                            <option>Make</option>
                        </select>
                        <select class="p-3 border rounded-md text-[14px]">
                            <option>Model</option>
                        </select>
                        <input type="number" placeholder="Min. Mileage" class="p-3 border rounded-md text-[14px]" />
                        <input type="number" placeholder="Max. Mileage" class="p-3 border rounded-md text-[14px]" />
                        <input type="number" placeholder="Min. Price" class="p-3 border rounded-md text-[14px]" />
                        <input type="number" placeholder="Max. Price" class="p-3 border rounded-md text-[14px]" />
                        <select class="p-3 border rounded-md text-[14px]">
                            <option>Start Year</option>
                        </select>
                        <select class="p-3 border rounded-md text-[14px]">
                            <option>End Year</option>
                        </select>
                        <select class="p-3 border rounded-md text-[14px]">
                            <option>Fuel</option>
                        </select>
                    </form>
                    <div class="justify-between gap-4 mt-4 md:flex">
                        <button
                            class="md:w-1/2 w-[100%] px-8 py-2 text-[#CFB680] bg-[#2F4157] xl:text-[18px] md:text-[12px] text-[12px] rounded hover:bg-[#CFB680] hover:text-white font-semibold mt-3">Search</button>
                        <button
                            class="md:w-1/2 w-[100%] px-8 py-2 text-[#2F4157] border border-[#2F4157] xl:text-[18px] md:text-[12px] text-[12px] rounded hover:bg-[#2F4157] hover:text-white font-semibold mt-3">Reset
                            Filters</button>
                    </div>
                </div>

                <!-- Slider for Desktop and Tab View -->
                <div
                    class="lg:w-2/4 p-8 font-bold text-right text-white font-alumni-sans xl:text-[100px] lg:text-[90px] md:text-[70px] uppercase lg-leading-[5rem] md:leading-[4rem] drop-shadow-[0_35px_35px_#000] italic pt-0 md:block hidden">
                    The perfect<br>
                    ride exists
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CarSearchSection",
};
</script>

<style scoped></style>