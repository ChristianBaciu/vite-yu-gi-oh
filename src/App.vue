<script>
    import CompHeader from './components/header/CompHeader.vue'
    import CompDropdown from './components/main/CompDropdown.vue'
    import CompCard from './components/main/CompCard.vue'

    import {store} from './store'
    import axios from 'axios'

    export default{
        components:{
            CompHeader,
            CompDropdown,
            CompCard,
        },
        data(){
            return{
                store,
            }
        },
        methods:{
            getMonster(){    // apiUrl nel store.js
                axios.get(store.apiUrl).then(res =>{
                    console.log(res.data)
                    // per inserire nell'array l'oggetto
                    store.monsterCard = res.data.data

                    store.loading = true
                    store.loading = false
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

    <CompHeader/>

    <main>
        <div v-if="(store.loading)" class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <CompDropdown/>
        
    </main>

</template>

<!-- ------------------------------------------------------------------------------ -->

<style lang="scss" scoped>

</style>
