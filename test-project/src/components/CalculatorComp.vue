<template>
  <div>
    <div class="calc">
        <!-- <input class="input" type="text" v-model="result">
        <button @click="addButton(num)" v-for="num in nums" :key="num.id">{{ num }}</button>
        <button @click="addButton(tab)" v-for="tab in tabs" :key="tab.id">{{ tab }}</button>
        <button @click="resultCalc" >=</button>
        <button class="reset" @click="reset" >Reset</button> -->
        <input type="text" v-model="operand1">
        <input type="text" v-model="operand2">
        {{ result }}
      <div>        
        <!-- <button @click="calcAllResult('+')">+</button>
        <button @click="calcAllResult('-')">-</button>
        <button @click="calcAllResult('*')">*</button>
        <button @click="calcAllResult('/')">/</button> -->
        <button v-for="operation in operations" :key="operation.id" @click="calcAllResult(operation)">{{ operation }}</button>
      </div>

      <div class="division error">
        <div v-show="error">
          {{ error }} 
        </div>
      </div>

      <div>
        <template v-if="result < 0">The number is below zero</template>
        <template v-if="result >= 0 && result <= 100">The number is between 0 and 100</template>
        <template v-if="result > 100">The number is above 100</template>
      </div>

      <div>
        Fibbonaci number for the first number is {{ fib1 }}<br>
        Fibbonaci number for the second number is {{ fib2 }}<br>

      </div>

      <div>
        <h2>Log history</h2>
        <div v-for="log in logs" :key="log.id">{{ log }}</div>
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'CalculatorComp',

  data() {
    return {
      // nums:[1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      // tabs:['-', '+', '*', '/'],
      // result: '',
      operand1: 0,
      operand2: 0,
      result: 0,
      operations:['+', '-', '*', '/'],
      error: '',
      logs: {},

    };
  },

  methods: {
    // addButton(char){
    //     this.result = this.result.toString();
    //     this.result += char;
    // },
    // resultCalc(){
    //     this.result = eval(this.result);
    // },
    // reset(){
    //     this.result = '';
    // }
    add(){
      this.result = Number(this.operand1) + Number(this.operand2)
    },
    minus(){
      this.result = Number(this.operand1) - Number(this.operand2)
    },
    multi(){
      this.result = Number(this.operand1) * Number(this.operand2)
    },
    divide(){
      // this.result = Number(this.operand1) / Number(this.operand2)
      const {operand1, operand2} = this;
      if (operand2 === 0) {
        this.error = 'Cannot divide by 0'
      } else{
        this.result = operand1 / operand2;
      }
    },
    fib(n){
      return n <= 1? n : this.fib(n - 1) + this.fib(n - 2);
    },

    calcAllResult(operation = '+'){
      this.error = '';
      switch (operation) {
        case '+':
          this.add()
          break;
        case '-':
          this.minus()
          break;
        case '*':
          this.multi()
          break;
        case '/':
          this.divide()
          break;
      }
      const key = Date.now()
      const value = `${this.operand1}${operation}${this.operand2}=${this.result}`
      Vue.set(this.logs, key, value)
    },
  },
  computed: {
    fib1() {
      return this.fib(this.operand1);
    },
    fib2() {
      return this.fib(this.operand2);
    }
  }
};
</script>
<style lang="css" scoped>
/* .calc{
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

} */
</style>
