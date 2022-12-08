<template>
    <button class = "btn btn-primary">
        {{icon}}
    </button>
</template>

<script>
export default{
    props:{
        icon:{
            type: String,
            default: "x"
        }
    } 
}

</script>


<style lang="scss" scoped>

button{
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 80px;
    height: 80px;
    border-radius: 100px;
}
</style>
