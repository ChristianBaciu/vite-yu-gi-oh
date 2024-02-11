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
