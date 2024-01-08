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
        justify-content: space-between;
        flex-wrap: wrap;
       
        
       

        .item {
            width: calc(100% / 5);
            text-align: center;
           
        }
        
       
       
    }
}



</style>