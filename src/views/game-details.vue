<template>
    <section v-if="game" class="game-details">
    <img :src="game.thumbnail" alt="">
        <h1>{{ game.title }}</h1>
        <p>{{ game.short_description }}</p>
        <p>Publisher: {{ game.publisher }}</p>
        <p>Genre: {{ game.genre }}</p>
        <a :href="game.game_url">Go to game</a>
        <button @click="goBack">Go back</button>
    </section>
</template>

<script>
import { gameService } from '../services/game-service.js'
export default {
    name: 'game-details',
    data() {
        return {
            game: null,
        }
    },
    async created() {
        const id = this.$route.params.id;
        const selectedGame = await gameService.getById(id)
        console.log('selectedGame:',selectedGame);
        this.game = selectedGame
    },
    methods: {
        goBack() {
            this.$router.push('/')
        },
        async loadGame() {
            const selectedGame = await gameService.getById(this.gameId)
            return this.game = selectedGame
        }
    },
    computed: {
        gameId() {
            return this.$route.params.id
        },
    },
    watch: {
        gameId: {
            handler() {
                this.loadGame()
            },
            immediate: true,
        },
    }

}
</script>