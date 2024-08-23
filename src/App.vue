<template>
  <Header></Header>
  <Board></Board>
</template>

<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'
import Header from '@/components/Header.vue'
import Board from '@/components/Board.vue'
const state = reactive({
  count: 0,
  message: 'Hello Vue 3!'
});


</script>