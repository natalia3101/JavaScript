// Создание простого счетчика: Создайте компонент
// счетчика, который имеет кнопку "+" и кнопку "-", и
// отображает текущее значение счетчика. При нажатии на
// кнопки счетчик должен увеличиваться или уменьшаться
// соответственно.


'use strict';
// Vue.component('counter', {
//     template: `
//     <div>
//         <p>{{counter}}</p>
//         <button @click="counterPlus()">+</button>
//         <button @click="counterMinus()">-</button>
//     </div>
//     `,
//     data() {
//         return {
//             counter: 0,
//         }
//     },
//     methods: {
//         counterPlus() {
//             this.counter++;
//         },
//         counterMinus() {
//             this.counter--;
//         }
//     }
// });


// Создайте компонент списка дел, в котором можно
// добавлять и удалять элементы. Каждый элемент списка
// должен иметь кнопку удаления, при нажатии на которую
// элемент списка будет удаляться.

// Создайте компонент списка, который отображает массив
// элементов. Добавьте текстовое поле для фильтрации
// списка. При вводе текста в поле, список должен
// автоматически обновляться, отображая только элементы,
// содержащие введенный текст


/*Vue.component('to-do-list', {
    template: `
<div>
    <input type="text" placeholder="Add element" v-model="toDoName">
    <button @click="addtoList" type="submit">Add</button>
    <ul>
        <li v-for="(item, index) in filteredList" :key="index">{{item}} <button @click="deleteItem">Delete</button></li>
    </ul>
    <input type="text" placeholder="Filter" v-model="filterText">

    
</div>
    `,
    data() {
        return {
            toDoList: ['one', 'two', 'three', 'one'],
            toDoName: '',
            filterText: '',
        }
    },
    methods: {
        addtoList() {
            this.toDoList.push(this.toDoName);
            this.toDoName = '';
        },
        deleteItem(index) {
            this.toDoList.splice(index, 1);
        },
    },
    computed: {
        filteredList() {
            if (this.filterText) {
                return this.toDoList.filter(item => item.includes(this.filterText));
            } else {
                return this.toDoList;
            }
        },
    }
});*/


// Вам необходимо создать компонент "Товар", который будет отображать
// информацию о товаре, включая название, описание и цену. Кроме того, вы
// должны реализовать фильтрацию товаров по цене (по возрастанию и
// убыванию)
// 1. Создайте компонент "Товар", который вы создавали в интернетмагазине BRAND
// 2. Создайте список товаров, используя компонент "Товар". Данные о
// товарах могут быть представлены в виде массива объектов.
// 3. Добавьте две кнопки сортировки (по убыванию, по возрастанию)
// 4. При нажатии на кнопки, обновите список отображаемых товаров,
// отфильтрованных по цене. 

Vue.component('product', {
    props: {},
    template: `
    <div>
        <ul>
            <li v-for="(item, index) in sortedList" :key="item.id">{{item.name}} - {{item.price}}</li>
        </ul>   
        <button @click="sortDirection='up'">Up</button>
        <button @click="sortDirection='down'">Down</button>
        <button @click="sortDirection=''">Reset</button>
    </div>
    `,
    data() {
        return {
            products: [{
                id: 1,
                name: 'bread',
                price: 76,
            }, {
                id: 2,
                name: 'apples',
                price: 13,
            }, {
                id: 3,
                name: 'chocolade',
                price: 31,
            }],
            sortDirection: '',
        }
    },
    computed: {
        sortedList() {
            const sortedArr = [...this.products];
            switch (this.sortDirection) {
                case 'up':
                    return sortedArr.sort((a, b) => a.price - b.price);
                case 'down':
                    return sortedArr.sort((a, b) => b.price - a.price);
                default:
                    return this.products;
            }
        }
    },
});

new Vue({
    el: '#app',
    data: {},
})