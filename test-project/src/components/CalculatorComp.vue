<template>
  <div>
    <div class="calc">
        <input class="input" type="text" v-model="result">
        <button @click="addButton(num)" v-for="num in nums" :key="num.id">{{ num }}</button>
        <button @click="addButton(tab)" v-for="tab in tabs" :key="tab.id">{{ tab }}</button>
        <button @click="resultCalc" >=</button>
        <button class="reset" @click="reset" >Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalculatorComp',

  data() {
    return {
      nums:[1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      tabs:['-', '+', '*', '/'],
      result: '',
    };
  },

  methods: {
    addButton(char){
        this.result = this.result.toString();
        this.result += char;
    },
    resultCalc(){
        this.result = eval(this.result);
    },
    reset(){
        this.result = '';
    }
  },
};
</script>
<style lang="css" scoped>
.calc{
    display: grid;
    grid-template-columns: repeat(3, 50px);
    justify-content: center;
    padding-top: 48px;
    padding-bottom: 48px;
}
.input{
    grid-column: 1 / -1;
    text-align: right;
}
.reset{
    grid-column: 1 / -1;

}
</style>
