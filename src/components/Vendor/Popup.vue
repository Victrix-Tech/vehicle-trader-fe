<template>
  <div
    v-if="visible"
    class="fixed top-5 right-5 z-50 bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-start justify-between gap-4 w-[300px]"
  >
    <span class="text-sm">{{ message }}</span>
    <button @click="close" class="font-bold text-white text-xl leading-none">&times;</button>
  </div>
</template>
  
  <script setup>
import { ref, watch, onMounted } from "vue";

const props = defineProps({
  message: String,
  duration: {
    type: Number,
    default: 4000
  }
});

const emit = defineEmits(["close"]);

const visible = ref(true);

const close = () => {
  visible.value = false;
  emit("close");
};

watch(
  () => props.message,
  () => {
    visible.value = true;
    setTimeout(close, props.duration);
  }
);

onMounted(() => {
  setTimeout(close, props.duration);
});
</script>
  