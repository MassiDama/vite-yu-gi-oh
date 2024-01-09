import { reactive } from "vue";

export const store = reactive({
    cardList: [],
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=60&offset=4",
    searchText: "",
});

