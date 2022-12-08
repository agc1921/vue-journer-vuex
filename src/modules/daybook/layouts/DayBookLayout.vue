<template>
    <vNavbar />

    <div class = "d-flex">
        <div class = "col-4">
            <EntryList />
        </div>
        <div class = "col">
            <RouterView />
        </div>

    </div>
</template>

<script>
import {defineAsyncComponent} from "vue"

export default{

     components:{
        vNavbar: defineAsyncComponent(() => import("../components/vNavbar.vue") ),
        EntryList: defineAsyncComponent(()=> import ("../components/EntryList.vue") )
     }
}
</script>