<template>
  <main>
    <Slider />
    <About />
    <Products />
    <Service />
    <Testimonial />
    <News />
  </main>
</template>

<script>
import Slider from "./components/SliderSection.vue";
import About from "./components/AboutSection.vue";
import Products from "./components/ProductSection.vue";
import Service from "./components/ServiceSection.vue";
import Testimonial from "./components/TestimonialSection.vue";
import News from "./components/NewsSection.vue";

export default {
  components: {
    Slider,
    About,
    Products,
    Service,
    Testimonial,
    News,
  }
};
</script>