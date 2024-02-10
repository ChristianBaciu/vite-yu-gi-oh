<script>
export default {
    name: "CompCard",
    props: [
        'monsterData'
    ],
    data(){
        return {}
    }
}
</script>

<!-- ------------------------------------------------------------------ -->

<template>
    <div>
        <h1>{{ monsterData.name }}</h1>
        <!-- Altri elementi del componente CompCard che utilizzano monsterData -->
    </div>
</template>
<!-- ------------------------------------------------------------------ -->

<style scoped>

</style>
