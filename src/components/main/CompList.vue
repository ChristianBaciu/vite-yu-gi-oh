<script>
import CompCard from './CompCard.vue'
import {store} from '../../store'

export default {
    name: "CompList",
    components:{
        CompCard
    },
    data(){
        return{
            store
        }
    }
}
</script>

<!-- ------------------------------------------------------------------ -->

<template>
<CompCard v-for="(element, index) in store.monsterCard" :key="index" :monsterData="element" />
</template>

<!-- ------------------------------------------------------------------ -->

<style scoped>

</style>
