<template>
  <section class="home">
    <h1>Hi</h1>
    <div class="games" v-for="game in games" :key="game.id" @click="goToDetails(game)">
      <img :src="game.thumbnail" alt="">
      <h1>{{ game.title }}</h1>
    </div>
  </section>
</template>

<script>
import { gameService } from '../services/game-service.js'
export default {
  name: 'home',
  data() {
    return {
      games: null,
    }
  },
  created() {
    this.queryGames()
  },
  methods: {
    async queryGames() {
      const res = await gameService.query();
      this.games = res
    },
    goToDetails(game) {
      this.$router.push(`/game/${game.id}`)
    },
  },
}
</script>
