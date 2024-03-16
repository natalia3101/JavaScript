class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor(customerName, initialTotalCost) {
        this.customerName = customerName;
        this.totalCost = initialTotalCost;
        this.product = [];
    }
    addItem(product, quantity = 1) {
        this.totalCost += product.price * quantity;
        for (let i = 0; i < quantity; i++) {
            this.product.push(product);
        }
        console.log(`${quantity} ${product.name} added to the cart`);

    }
    getCurrentTotalCost() {
        // if (this.product.length === 0) {
        //     console.log(`The cart is empty`);
        //     return 0;
        // }
        // const totalCost = this.product.reduce((acc, product) => acc + product.price, 0);

        return this.totalCost;
    }

    checkout() {

        console.log(`The order for ${this.customerName} is placed. The total cost is ${this.totalCost}. 
        Thank you for the order!`);
    }
}


const cart = new ShoppingCart('Natalia', 0); // Создаем новый объект корзины
const product1 = { name: 'Книга', price: 20 }; // Создаем объект товара
const product2 = { name: 'Флешка', price: 10 }; // Создаем еще один объект товара

cart.addItem(product1); // Добавляем один товар в корзину
cart.addItem(product2, 2); // Добавляем два товара в корзину

const totalCost = cart.getCurrentTotalCost();
cart.checkout();