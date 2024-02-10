<script>
export default {
    name: "CompDropdown.vue",
}
</script>

<!-- ------------------------------------------------------------------ -->

<template>
    <header class="ms-5 mt-4">
        <div class="dropdown">
            <button class="btn btn-light dropdown-toggle text-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Scegli
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">...</a></li>
                <li><a class="dropdown-item" href="#">...</a></li>
                <li><a class="dropdown-item" href="#">...</a></li>
            </ul>
        </div>
    </header>

    <!-- <main class="bg-light m-5 p-2">
        <div >
            <div class="bg-dark m-5 p-2 text-light">
                <h2>Found...</h2>
            </div>
        </div>
    </main> -->
</template>

<!-- ------------------------------------------------------------------ -->

<style scoped>
    header{
        .dropdown{

            button{
                width: 160px;
            }
        }
    }
</style>
