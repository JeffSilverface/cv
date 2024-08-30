<script setup lang="ts">
interface RightAsideProps {
  sectionIndex: number
  maxSections: number // Nombre total de sections sur la page
}

const props = defineProps<RightAsideProps>()
const isColorChanged = ref(false)

const calculateBarHeight = (index: number, max: number) => {
  const normalizedIndex = (index + 1) / max
  return 100 - normalizedIndex * 100
}

watch(
  () => props.sectionIndex,
  (newVal, oldVal) => {
    isColorChanged.value = true

    setTimeout(() => {
      isColorChanged.value = false
    }, 700)
  }
)
</script>

<template>
  <div class="w-24 bg-transparent h-screen fixed top-0 right-4 flex justify-center items-center">
    <div :class="['relative w-0.5 h-80 transition-all duration-700', isColorChanged ? 'bg-red-400' : 'bg-red-600']">
      <div
        class="absolute bottom-0 bg-black transition-all duration-300 w-1 left-1/2 transform -translate-x-1/2"
        :style="{ height: calculateBarHeight(props.sectionIndex, props.maxSections) + '%' }"
      />
    </div>
  </div>
</template>

<style scoped></style>
