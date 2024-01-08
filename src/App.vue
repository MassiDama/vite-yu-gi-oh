<script>
// npm install axios
import axios from 'axios'

// importo componenti
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'

export default {
  components: {
    AppHeader,
    CharactersList
  }
}

</script>

<template>
  <AppHeader />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;

</style>
