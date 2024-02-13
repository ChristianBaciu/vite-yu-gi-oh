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



            axios.get(store.monsterArryApiUrl).then(response =>{
                console.log(response.data.data)

                store.monsterArry = response.data.data
                // caricamento pagina
                store.loading = true
                store.loading = false

                
                if(store.selectValue){
                    store.monsterArryApiUrl += `&archetypeApiUrl${store.selectValue}`
                }


            })
        },

        getArchetype(){
            axios.get(store.archetypeApiUrl).then(response =>{
                console.log(response.data)

                store.archetypeApiUrl = response.data
            })
        },

    },
    mounted(){
        this.getMonster()
        this.getArchetype()
    }
}
</script>

<!-- ------------------------------------------------------------------------------ -->

<template>
    <header>
        <CompHeader/>

        <CompDropdown @emitMonster="getMonster"/> <!-- figlio  -->

        <div class="d-flex justify-content-center">
            <div v-if="(store.loading)" class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </header>

    <main>
        <CompList/>
    </main>
</template>

<!-- ------------------------------------------------------------------------------ -->

<style lang="scss" scoped>

</style>
