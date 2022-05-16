<template>
    <section class="game-filter">
        <label for="labels">Filter by Category</label>
        <select v-model="filterBy.category" @change="setFilter" name="category">
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
        <label for="search">Search:</label>
        <input v-model="filterBy.name" @input="setFilter" type="text" class="form-input"
            placeholder="Search game name..." />
    </section>
</template>

<script >

export default {
    name: 'game-filter',
    props: {
        categories: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            filterBy: {
                name: '',
                category: '',
            },
        }
    },
    methods: {
        setFilter() {
            this.$emit('setFilter', this.filterBy)
        },
    },
}
</script>