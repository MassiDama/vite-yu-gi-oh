<script>
// importo store
import { store } from '../store';

export default {
    name: "AppSearch",
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    
    <!-- blocco select (parametro specifico di ricerca) -->
    <select v-model="store.searchText"></select>
   
</template>

<style lang="scss" scoped>


</style>