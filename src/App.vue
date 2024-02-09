<script>
    import CompHeader from './components/header/CompHeader.vue'
    import CompMain from './components/main/CompMain.vue'

    import {store} from './store'
    import axios from 'axios'


    export default{
        components:{
            CompHeader,
            CompMain,
        },
        data(){
            return{
                store,
            }
        },
        methods:{
            getMonster(){    // apiUrl l'abbiamo preso dallo store.js
                axios.get(store.apiUrl).then(res =>{
                    console.log(res.data)

                    // per inserire nell'array l'oggetto
                    store.monsterCard = res.data

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
        <CompMain/>
    </main>

</template>

<!-- ------------------------------------------------------------------------------ -->

<style lang="scss" scoped>

</style>
