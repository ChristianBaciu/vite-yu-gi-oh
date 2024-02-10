<script>
import CompHeader from './components/header/CompHeader.vue'
import CompDropdown from './components/header/CompDropdown.vue'
import CompList from './components/main/CompList.vue'
import CompCard from './components/main/CompCard.vue'

import {store} from './store'
import axios from 'axios'

export default {
    components:{
        CompHeader,
        CompDropdown,
        CompList,
        CompCard,
    },
    data(){
        return{
            store,
        }
    },
    methods:{
        getMonster(){
            axios.get(store.apiUrl).then(response =>{
                console.log(response.data.data)

                store.monsterCard = response.data.data
                // store.loading = true
                // store.loading = false
            })
        }
    },
    mounted(){
        this.getMonster()
    }
}
</script>

<!-- ------------------------------------------------------------------------------ -->

<template>
    <header>
        <CompHeader/>
        <!-- <div v-if="(store.loading)" class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div> -->
        <CompDropdown/>
    </header>

    <main>
        <CompList/>
    </main>
</template>

<!-- ------------------------------------------------------------------------------ -->

<style lang="scss" scoped>

</style>
