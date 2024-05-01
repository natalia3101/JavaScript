<template>
  <div id="app">
    <!-- <AddCount></AddCount>
    <AddCount></AddCount>
    <AddCount></AddCount> -->
    <PaymentDisplay :items="paymentList" :info="infoText"></PaymentDisplay>
    <AddList @addNewPay="addNewPay" />
  </div>
</template>

<script>
// import AddCount from './components/AddCount.vue';
import PaymentDisplay from './components/PaymentDisplay.vue';
import AddList from './components/AddList.vue';

export default {
  name: 'App',
  components: {
    PaymentDisplay,
    AddList
  },
  data() {
    return {
      paymentList: [],
    }
  },
  methods: {
    fetchData(){
      return [
        {
          date: '29.04.2024',
          category: 'Books',
          value: 142,
        },
        {
          date: '29.04.2024',
          category: 'Travel',
          value: 122642,
        },                
        {
            date: '29.04.2024',
            category: 'Food',
            value: 4433,
        },                
        {
          date: '29.04.2024',
          category: 'Rent',
          value: 94848,
        },
      ]
    },
    addNewPay(data){
      this.paymentList.push(data)
    }
  },
  created(){
    this.paymentList = this.fetchData();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
