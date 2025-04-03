<template>
  <main>
    <Slider />
    <div ref="aboutSection" class="section" data-aos="fade-up">
      <About />
    </div>

    <div ref="productsSection" class="section" data-aos="fade-up">
      <Products />
    </div>
    <div ref="serviceSection" class="section" data-aos="fade-up">
      <Service />
    </div>
    <div ref="testimonialSection" class="section" data-aos="fade-up">
      <Testimonial />
    </div>
    <div ref="newsSection" class="section" data-aos="fade-up">
      <News />
    </div>

  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Import Components
import Slider from "./components/SliderSection.vue";
import About from "./components/AboutSection.vue";
import Products from "./components/ProductSection.vue";
import Service from "./components/ServiceSection.vue";
import Testimonial from "./components/TestimonialSection.vue";
import News from "./components/NewsSection.vue";

// State to manage visibility of Back to Top button
const showButton = ref(false);

// Scroll to Top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Variables to store scroll position and manage scroll delay
let lastScrollTime = 0; // Timestamp of the last scroll event
const scrollDelay = 150; // Time delay in ms between scrolls to slow down fast scrolling

// Intersection Observer setup to handle scrolling load
const observer = ref(null);

// Sections references
const aboutSection = ref(null);
const productsSection = ref(null);
const serviceSection = ref(null);
const testimonialSection = ref(null);
const newsSection = ref(null);

// Handle scroll event to show/hide Back to Top button
const showBackToTopButton = () => {
  if (window.scrollY > 300) {
    showButton.value = true;
  } else {
    showButton.value = false;
  }
};

// Callback for the Intersection Observer
const onIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aos-animate"); // Trigger AOS animation
    }
  });
};

// Scroll handler function to manage scroll delay and prevent fast scrolling
const handleScroll = () => {
  const currentTime = Date.now();
  const timeDiff = currentTime - lastScrollTime;

  // Only allow scrolling if enough time has passed (delay between scrolls)
  if (timeDiff > scrollDelay) {
    lastScrollTime = currentTime;

    // Proceed with scroll logic (fade-in, back-to-top button visibility, etc.)
    showBackToTopButton();
  }
};

// Initialize Intersection Observer
onMounted(() => {
  // Options for IntersectionObserver
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.2, // Trigger the event when 20% of the section is in view
  };

  // Create a new Intersection Observer instance
  observer.value = new IntersectionObserver(onIntersect, options);

  // Observe each section
  if (aboutSection.value) observer.value.observe(aboutSection.value);
  if (productsSection.value) observer.value.observe(productsSection.value);
  if (serviceSection.value) observer.value.observe(serviceSection.value);
  if (testimonialSection.value) observer.value.observe(testimonialSection.value);
  if (newsSection.value) observer.value.observe(newsSection.value);

  // Listen to scroll events
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("wheel", handleScroll); // Listen to wheel events for mouse/touchpad scroll
});

// Cleanup on before component unmount
onBeforeUnmount(() => {
  if (observer.value) {
    observer.value.disconnect(); // Stop observing
  }
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("wheel", handleScroll); // Remove wheel event listener
});

</script>

