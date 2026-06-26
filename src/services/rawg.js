import { computed, Text } from "vue"
import { errorMessages } from "vue/compiler-sfc"

const CLE = '9ead80a37b6e4b24a64a06ac74cbc90a'
const BASE = 'https://api.rawg.io/api'


export async function getGames(pageSize = 15 , page = 1) {

  const reponse = await fetch(`${BASE}/games?key=${CLE}&page_size=${pageSize}&page=${page}`)
  if (!reponse.ok) {
    throw new Error('Erreur API RAWG')
  }
  const data = await reponse.json()
  return data.results

}


export async function getGameDetails(gameId) {

  const reponse = await fetch(`${BASE}/games/${gameId}?key=${CLE}`)
  if (!reponse.ok) {
    throw new Error ('Erreur API RAWG : game id')
  }
  return await reponse.json()

}


export async function searchGame(search = '' ) {

  const reponse = await fetch(`${BASE}/games?key=${CLE}&search=${search}`)
  if (!reponse.ok) {
    throw new Error('Erreur API RAWG : recherche')
  }
  const data = await reponse.json()
  return data.results

}

