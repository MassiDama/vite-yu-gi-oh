<script>
import SingleCard from './SingleCard.vue'

// importo store
import { store } from '../store';

export default {
    name: "CardList",
    components: {
        SingleCard
    },
    data() {
        return {
            store,
        }
    },
    computed: {
        resultNumber() {
            return store.cardList.length;
        },
    }
}
</script>

<template>
    
        <div class="container">
            <div v-if="resultNumber > 0" class="cards-found">
                Found {{ resultNumber }} cards
            </div>
            <div v-else class="cards-found">
                Not results found
            </div>
            <div class="item" v-for="card in store.cardList" :key="card.id">
                <SingleCard :info="card" />
            </div>
        </div>
   
    
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

    .container {
        width: 100%;
        padding: 50px;
        background-color: white;
        display: flex;
        align-items: center;
        flex-wrap: wrap;

       .cards-found {
        width: 100%;
        height: 50px;
        background-color: black;
        color: white;
        display: flex;
        align-items: center;
        padding: 15px;
       }
           
     .item {
            width: calc((100% / 5) - 20px);
            text-align: center;
            margin-right: 20px;
            background-color: $primary;
            margin-bottom: 20px;
            padding-bottom: 20px;
            height: 450px;
        }
        
       
       
    }




</style>