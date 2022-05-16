import axios from 'axios';
import { utilService } from './util-service.js'

export const gameService = {
    getGames,
    query,
    getById,
}

const KEY = 'games_db'

async function query() {
    const games = utilService.loadFromStorage(KEY) || await getGames()
    return games
}

async function getById(gameId) {
    const games = await query()
    const game =  games.find(game => game.id === +gameId)
    return game
}

async function getGames() {
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': '4de17d17cfmsha6ed6fe590694dbp1b8813jsn3a2bbe0dd82d'
        }
    };
    try {
        const res = await axios.request(options);
        const newRes = res.data
        newRes.splice(40)
        utilService.saveToStorage(KEY, newRes)
        return newRes;
    } catch (err) {
        console.error('ERROR!', err);
    }
};