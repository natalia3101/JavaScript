<!-- Вам необходимо создать компонент ипотечного калькулятора,
который позволяет пользователю вводить сумму кредита,
процентную ставку и срок кредита. Компонент должен автоматически
вычислять ежемесячный платеж и общую сумму выплаты по кредиту -->
<!-- Создайте компонент MortgageCalculator с соответствующим шаблоном и скриптом.
2. В шаблоне компонента разместите поля ввода для суммы кредита, процентной
ставки и срока кредита, а также элементы для отображения ежемесячного платежа
и общей суммы выплаты.
3. Используйте директиву v-model для связывания введенных пользователем
значений с соответствующими свойствами в компоненте.
4. Создайте вычисляемое свойство monthlyPayment, которое будет вычислять
ежемесячный платеж на основе введенных значений суммы кредита, процентной
ставки и срока кредита.
5. Создайте вычисляемое свойство totalPayment, которое будет вычислять общую
сумму выплаты по кредиту, учитывая ежемесячный платеж и срок кредита.
6. Отобразите значения monthlyPayment и totalPayment в соответствующих элементах
шаблона. -->
<template>
  <div>
    <label for="loanAmount">Loan Amount </label>
    <input type="number" id="loanAmount" v-model.number="loanAmount"><br>
    <label for="interestRate">Interest Rate </label>
    <input type="number" step="0.01" id="interestRate" v-model.number="interestRate"><br>
    <label for="loanTerm">Loan Term </label>
    <input type="number" id="loanTerm" v-model.number="loanTerm">
    <p> Monthly Payment {{ monthlyPayment }}</p>
    <p> Total payment {{ totalPayment }}</p>
  </div>
</template>

<script>
export default {
  name: 'MortgageCalcComp',
  data() {
    return {
        loanAmount: 1000000,
        interestRate: 10,
        loanTerm: 120
    }
  },
  computed: {
    monthlyPayment(){
        const P = this.loanAmount; // сумма кредита
        const r = (this.interestRate / 100) / 12; // месячная процентная ставка
        const n = this.loanTerm; // срок кредита в месяцах
        // Формула для расчета ежемесячного платежа по кредиту
        const monthlyPayment = P * r / (1 - Math.pow(1 + r, -n))
        // Возвращаем результат, округленный до двух знаков после запятой
        return monthlyPayment.toFixed(2)
    },
    totalPayment(){
        // Вычисляем общую сумму выплат по кредиту
        const totalPayment = this.monthlyPayment * this.loanTerm
        // Возвращаем результат, округленный до двух знаков после запятой
        return totalPayment.toFixed(2)
    }
  },
  methods: {
  }
}

</script>

<style scoped lang="scss">
</style>