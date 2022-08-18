<template lang="html">

  <div class="container">
    <div class="row">
      <div v-for="(item, index) in products" :key="index" class="col-md py-5">
        <div class="col-md">
          <div class="card-body shadow-5-strong">
            <h5 class="card-title"><b>{{item.title}}</b></h5>
            <p class="card-text fst-italic" style="font-size: 90%">{{item.description}}</p>
            <p class="card-text">Price: {{item.price}}$</p>
            <p class="card-text">Amount: {{item.amount}} units</p>
            <button type="button" class="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">
  import axios from 'axios';

  export default  {
    name: 'home-component',
    props: [],
    async mounted () {
      // ! guardamos en una variable el token que nos devuelve el servidor
      let isLogged = localStorage.getItem("isLogged");

      // ! si el token existe, entonces redirigimos al usuario a la pagina de home sino al login
      if (isLogged != "true") {
        this.$router.push("/login");
      }

      let response = await axios.get(
        "https://62d8b1a29088313935937e1f.mockapi.io/api/products"
      );
    this.products = response.data;
    },
    data () {
      return {
        products: [],
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>

</style>
