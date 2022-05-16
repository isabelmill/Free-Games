<template>
  <section class="home">
    <game-filter @setFilter="filter" :categories="categories"></game-filter>

    <div class="games">
      <div class="game" v-for="game in gamesForDisplay" :key="game.id" @click="goToDetails(game)">
        <img :src="game.thumbnail" alt="">
        <h1>{{ game.title }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
import { gameService } from '../services/game-service.js'
import gameFilter from '../components/game-filter.vue'
export default {
  name: 'home',
  data() {
    return {
      games: null,
      filterBy: null,
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
    filter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    gamesForDisplay() {
      if (!this.filterBy) return this.games;
      const regex = new RegExp(this.filterBy.name, 'i');

      return this.games.filter(game => regex.test(game.title) && this.filterBy.category === game.genre);

    },
    categories() {
      let categories = []
      if (this.games) {
        this.games.forEach((game) => {
          categories.push(game.genre)
        })
      }
      let categoriesArray = [...new Set(categories)]
      return categoriesArray
    }
  },
  components: {
    gameFilter,
  }
}
</script>
