import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('BoardStore', {
  state: () => {
    count = 0;
  } ,
  actions:{
    plus(){
      this.count++
    }
  }
})
