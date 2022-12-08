<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>hola mundo</h1>

    <button @click="gotoDayBook" class = "btn btn-primary">primary</button>
    <button @click="gotoDayBook" class = "btn btn-secondary">secondary</button>
    <button @click="gotoDayBook" class = "btn btn-success">success</button>

  </div>
</template>

<script>
export default{
  methods:{
    gotoDayBook(){
      this.$router.push({ name: "daybook" })
    }
  }
}

</script>