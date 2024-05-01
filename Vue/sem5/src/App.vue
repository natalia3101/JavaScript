<template>
  <div id="app">
    <!-- <AuthenticationComp></AuthenticationComp> -->
    <!-- <CartComp></CartComp> -->
    <MortgageCalcComp></MortgageCalcComp>
  </div>
</template>

<script>
// import AuthenticationComp from './components/AuthenticationComp.vue'
// import CartComp from './components/CartComp.vue'
import MortgageCalcComp from './components/MortgageCalcComp.vue'



export default {
  name: 'App',
  components: {
    // AuthenticationComp
    // CartComp
    MortgageCalcComp
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
