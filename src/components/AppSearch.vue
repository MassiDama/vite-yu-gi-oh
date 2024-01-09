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
    <select v-model="store.searchText" @change="$emit('selectType')">
        <option value="" selected> Select Archetype </option>
        <option v-for="(archetype, i) in store.archeType" :key="i" :value="archetype.archetype_name" > {{ archetype.archetype_name }}</option>
    </select>
   
</template>

<style lang="scss" scoped>


</style>