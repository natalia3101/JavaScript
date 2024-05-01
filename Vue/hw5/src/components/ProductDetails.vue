<template>
  <div>
    <!-- 
        Вы разрабатываете приложение для интернет-магазина и у вас есть 
        компонент Vue под названием "ProductDetails". Компонент отображает
         детали о конкретном продукте, включая его название, цену и статус доступности.

Внутри компонента "ProductDetails" создайте свойство "product" с 
объектом, представляющим информацию о продукте. Объект должен иметь свойства 
"name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на доступность продукта).

Используя вычисляемое свойство, назовите его "formattedPrice", которое 
будет возвращать форматированную цену продукта со знаком валюты. 
Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".

В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности.

Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock".
    -->
    <div v-for="product in products" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>{{ formattedPrice(product) }}</p>
        <p>{{ availabilityStatus(product) }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProductDetails',

  data() {
    return {
        products: [
        {
            id: 1,
            name: 'harry potter',
            price: 5,
            available: true,
        },
        {
            id: 2,
            name: '1984',
            price: 15,
            available: false,

        },
        {
            id: 3,
            name: 'LOTR',
            price: 50,
            available: true,
        }
       ],
    };
  },

  methods: {

  },
  computed: {
    formattedPrice(){
        return product => '$' + product.price.toFixed(2);
    },
    availabilityStatus() {
      // Проверка статуса доступности продукта
      return product => product.available ? 'Available' : 'Out of stock';
    }
  }
};
</script>