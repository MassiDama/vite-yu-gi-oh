<script>
// npm install axios
import axios from 'axios'

// importo componenti
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'

// importo store
import { store } from './store'

export default {
  components: {
    AppHeader,
    CharactersList
  },
  data(){
    return{
      store,
    }
  },
  methods: {
    getCharacters() {
      axios
        .get(store.apiUrl)
        .then((res => {
          //consol.log(res.data.data);
          store.charactersList = res.data.data;
        }))
        .catch((err) => {
          console.log("error", err);
        });
    }

  },
  created() {
    this.getCharacters();
  }
}


</script>

<template>
  <AppHeader />
  <CharactersList />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;

</style>
