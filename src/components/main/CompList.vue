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
    <div class="bg-light m-4 p-5">
        <div class="bg-dark text-light p-4 ">
            <h3>Found 20 cards</h3>
        </div>
        <div class="containerMonster d-flex flex-wrap mx-auto">
            <CompCard v-for="(monster, index) in store.monsterCard" :key="index" :monsterData="monster" />
        </div>
    </div>
</template>

<!-- ------------------------------------------------------------------ -->

<style scoped>

</style>
