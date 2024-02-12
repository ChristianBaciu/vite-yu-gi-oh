import { Dropdown } from 'bootstrap'
import {reactive} from 'vue'

export const store = reactive({
    loading: true,
    monsterArry: [],
    monsterArryApiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',

    // select di Dropdown
    archetypeApiUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',

    selectValue: ''
})