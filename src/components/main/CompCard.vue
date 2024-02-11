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
    <div class="containerList d-flex p-2">
        <div class="bgColor">
            <figure>
                <img :src="monsterData.card_images[0].image_url" alt="img" style="width: 100%;">
            </figure>
            <h6 class="text-center text-light">{{ monsterData.name }}</h6>
            <p class="text-center">{{ monsterData.archetype }}</p>
        </div>
    </div>
</template>
<!-- ------------------------------------------------------------------ -->

<style scoped>
    .containerList{
        width: calc(100% / 5);
        
        .bgColor{
            background-color: #d48f38;
            /* figure{
                width: 100%;
            } */
        }
    }
</style>
