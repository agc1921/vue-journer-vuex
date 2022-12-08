<template>
    <div class="entry-container mb-3 pointer p-2" @click='$router.push({name:"entry", params: {id:10}})' >
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">julio</span>
            <span class="mx-2 fs-5 fw-light">2021, jueves</span>
        </div>
        <div class="entry-description fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, velit laborum delectus sit illo similique nihil
            ab mollitia excepturi totam accusamus soluta aut numquam quia omnis, quibusdam at magni blanditiis!
        </div>
    </div>
</template>

<script>

export default{

}
</script>

<style scoped lang="scss">
    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2 all ease-in;
        &:hover{
            background-color: lighten($color: grey, $amount: 45);
            transition: 0.2 all ease-in;
        }
    }
</style>