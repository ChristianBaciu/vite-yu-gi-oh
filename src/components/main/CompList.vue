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
        <div class="bg-dark text-light p-3">
            <h3>Found {{ store.monsterCard.length }} cards</h3> <!-- store.monsterCard.length scrive quante carte ci sono in tutto -->
        </div>
        <div class="containerMonster d-flex flex-wrap mx-auto">
            <CompCard v-for="(monster, index) in store.monsterCard" :key="index" :monsterData="monster" />
        </div>
    </div>
</template>

<!-- ------------------------------------------------------------------ -->

<style scoped>

</style>
