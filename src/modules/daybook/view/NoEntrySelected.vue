<template>
    <div class = "d-flex justify-content-center">
        <h1 class = "align-self-center">no hay nada seleccionado</h1>
    </div>
    <vFab/>
</template>

<script>

import {defineAsyncComponent} from "vue"
export default{


    components: {
        vFab: defineAsyncComponent(() => import("../components/vFab.vue"))
    }
}

</script>

<style lang="scss" scoped>
div{
    height: 100%;
}
</style>