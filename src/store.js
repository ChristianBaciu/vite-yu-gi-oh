import {reactive} from 'vue'

export const store = reactive({
    // searchText: "",
    loading: true,
    monsterCard: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
})