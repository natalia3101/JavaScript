<!-- Разработать интерфейс корзины товаров, в котором пользователь
может изменять количество товаров в корзине и видеть общую сумму
покупки. Каждый товар представлен в виде блока, содержащего поле
ввода для изменения количества товара и отображение его цены. При
изменении количества товаров в поле ввода, необходимо
автоматически пересчитывать стоимость каждого товара и обновлять
общую сумму покупки.  -->

<template>
    <div>
      <!-- <div v-for="product in products" :key="product.id">
        <input type="number" v-model="product.quantity">
        <p>{{ product.name }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.quantity * product.price }}</p>
      </div>
      <p>Total {{ totalPrice }}</p> -->
      <div v-for="book in products" :key="book.id">
        <p>{{ book.name }}</p>
        <!-- <button @click="book.showDescription = !book.showDescription">Show description</button> -->
        <button @click="toggleDescription(book.id)">Show description</button>
        <!-- <p v-if="book.showDescription">{{ book.description }} {{ book.publishYear }}</p> -->
        <p v-if="showDescription.includes(book.id)">{{ book.description }} {{ book.publishYear }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CartComp',
  data() {
    return {
       products: [
        {
            id: 1,
            name: 'harry potter',
            price: 5,
            quantity: 1,
            description: 'lkbvkjvkrjvlnvl',
            publishYear: 2001,
            // showDescription: false
        },
        {
            id: 2,
            name: '1984',
            price: 15,
            quantity: 1,
            description: 'sssnlkcnlkdnvlknv',
            publishYear: 2020,
            // showDescription: false
        },
        {
            id: 3,
            name: 'LOTR',
            price: 50,
            quantity: 1,
            description: 'kdnlslkvnlnsdvkl',
            publishYear: 2000,
            // showDescription: false
        }
       ],
       showDescription: []
    }
  },
  computed: {
    totalPrice(){
        return this.products.reduce((sum, current) => sum + current.price * current.quantity, 0)
    }
  },
  methods: {
    toggleDescription(id) {
        const findIndex = this.showDescription.indexOf(id);
        if(findIndex === -1) {
            this.showDescription.push(id)
        } else {
            this.showDescription.splice(findIndex, 1)
        }
    },
  },
}

</script>

<style scoped lang="scss">
</style>
