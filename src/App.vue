<script>
// npm install axios
import axios from 'axios'

// importo componenti
import AppHeader from './components/AppHeader.vue'
import CardList from './components/CardList.vue'
import AppSearch from './components/AppSearch.vue'

// importo store
import { store } from './store'

export default {
  components: {
    AppHeader,
    CardList,
    AppSearch
  },
  data(){
    return{
      store,
    }
  },
  methods: {
    getCard() {
      let myUrl = store.apiUrl;
      let myfilterUrl = store.filterUrl;

      if (store.apiUrl !== '') {
          myUrl += `&archetype=${store.searchText}`
      } 

      // chiamata carte 
      axios
        .get(myUrl)
        .then((res => {
          //consol.log(res.data.data);
          store.cardList = res.data.data;
        }))
        .catch((err) => {
          console.log("error", err);
        });


      // chiamata archetypes
      axios
        .get(myfilterUrl)
        .then((res => {
          // console.log(res.data);
          store.archeType = res.data;
        }))
        .catch((err) => {
          console.log("error", err);
        })
    }

  },
  created() {
    this.getCard();
  }
}


</script>

<template>
  <AppHeader />
  <main>
    <AppSearch @selectType="getCard"/>
    <CardList />
  </main>
  
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;

main {
    background-color:  hsl(33.46deg 64.46% 52.55%);
    width: 100%;
    padding: 60px 80px 0;
}

</style>
