<script>
import SingleCharacter from './SingleCharacter.vue'

// importo store
import { store } from '../store';

export default {
    name: "CharactersList",
    components: {
        SingleCharacter
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <main>
        <div class="container">
            <div class="cards-found">
                Found 39 cards
            </div>
            <div class="item" v-for="card in store.charactersList" :key="card.id">
                <SingleCharacter :info="card" />
            </div>
        </div>
    </main>
    
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

main {
    background-color:  hsl(33.46deg 64.46% 52.55%);
    width: 100%;
    padding: 60px 80px 0;
   
    
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
            
        }
        
       
       
    }
}



</style>