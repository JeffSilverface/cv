<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import SectionHome from '~/components/SectionHome.vue'
import SectionAboutMe from '~/components/SectionAboutMe.vue'
import SectionExperience from '~/components/SectionExperience.vue'
import SectionSkills from '~/components/SectionSkills.vue'
import SectionContact from '~/components/SectionContact.vue'

const sections = [
  { component: SectionHome, id: 'home' },
  { component: SectionAboutMe, id: 'about' },
  { component: SectionExperience, id: 'experience' },
  { component: SectionSkills, id: 'skills' },
  { component: SectionContact, id: 'contact' },
]

// Utilisation de ref avec un tableau contenant des HTMLElements ou null
const sectionsElements = ref<Element[]>([])

const currentSectionIndex = ref(0)
let observer: IntersectionObserver | null = null

/**
 * Met à jour l'index de la section visible.
 *
 * @param {number} index - L'index de la section actuellement visible.
 */
const updateVisibleSection = (index: number) => {
  currentSectionIndex.value = index
}

const updateElement = (el: Element) => {
  if (el) sectionsElements.value.push(el)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionsElements.value.findIndex((section) => section === entry.target)
          if (index !== -1) {
            updateVisibleSection(index)
          }
        }
      })
    },
    {
      root: null,
      threshold: 0.5,
    }
  )

  // Observer chaque élément de section
  sectionsElements.value.forEach((section) => {
    if (section) observer?.observe(section)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})

watchEffect(() => {
  console.log('observer', observer)
  console.log('sectionElements', sectionsElements.value)
})
</script>

<template>
  <div class="flex flex-col h-screen">
    <header>
      <Header :section-index="currentSectionIndex" />
    </header>

    <main class="flex-1 snap-y snap-mandatory overflow-y-scroll h-screen">
      <section
        v-for="(section, index) in sections"
        :key="index"
        :id="section.id"
        class="h-screen w-full flex items-center justify-center"
        :ref="(el) => updateElement(el as Element)"
      >
        <component :is="section.component" />
      </section>
    </main>

    <aside><LeftAside /></aside>
    <aside><RightAside :section-index="currentSectionIndex" :maxSections="sections.length" /></aside>

    <footer>
      <Footer />
    </footer>
  </div>
</template>
