import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useFavorisStore = defineStore('favoris', () => {
  const liste = ref(localStorage.getItem("favorisListe") ? JSON.parse(localStorage.getItem("favorisListe")) : []) 

  const nombre = computed(() => liste.value.length)

  function basculer(jeu) {
    const i = liste.value.findIndex(j => j.id === jeu.id)
    if (i === -1) {
      liste.value.push(jeu)
      localStorage.setItem("favorisListe" , JSON.stringify(liste.value))
    }
    else{
      liste.value.splice(i, 1)
      localStorage.setItem("favorisListe" , JSON.stringify(liste.value))
    }
  }

  function estFavori(id) {
    return liste.value.some(j => j.id === id)
  }


  return { liste, nombre, basculer, estFavori }
})