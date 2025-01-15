import { reactive } from 'vue'

// Passer à un objet réactif
// Mise à jour des composants liés
const state = reactive({ message: "bonjour" }); 

export const store = {
  get(prop){
    if(DEBUG_MODE) console.log("[store] get", prop)
    return state[prop]
  },
  set(prop, value){
    if(DEBUG_MODE) console.log("[store] set", prop)
    state[prop] = value
  }
}