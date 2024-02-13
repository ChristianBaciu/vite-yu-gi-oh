<script>
import {store} from '../../store'

export default {
    name: "CompDropdown.vue",
    data(){
        return{
            store
        }
    }
}
</script>

<!-- ------------------------------------------------------------------ -->

<template>
    <header class="ms-5 mt-4">


        <select class="from-select form-select-lg" v-model="store.selectValue" @change="$emit('emitMonster')">

            <option :value="element.archetype_name" v-for="(element, index) in store.archetypeApiUrl" key="index">{{ element.archetype_name }}</option>

        </select>
        
    </header>
</template>

<!-- ------------------------------------------------------------------ -->

<style scoped>
    header{
        select{
            width: 320px;
        }
    }
</style>
