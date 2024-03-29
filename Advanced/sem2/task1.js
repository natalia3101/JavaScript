// Давайте создадим класс для управления банковским счетом. В этом классе будет приватное
// свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
// 1. Класс должен содержать приватное свойство #balance, которое инициализируется
// значением 0 и представляет собой текущий баланс счета.
// 2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
// 3. Реализуйте метод deposit(amount), который позволит вносить средства на счет.
// Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте
// ошибку.
// 4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета.
// Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в
// противном случае выбрасывайте ошибку.
// 5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента.
// Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте
// ошибку.

class BankAccount {
    // приватное свойство для хранения баланса
    _balance = 0;
    // геттер для получения текущего баланса
    get balance() {
            return this._balance;
        }
        // метод для внесения денег на счет
    deposit(amount) {
            if (amount < 0) {
                throw new Error('The amount to deposit cannot be negative');
            }
            this._balance += amount;
            return this._balance;
        }
        // withdraw(amount) метод для снятия денег
    withdraw(amount) {
        if (amount < 0) {
            throw new Error('The amount to withdraw cannot be negative');
        }
        if (amount > this._balance) {
            throw new Error('There is not enough money on the account')
        }
        this._balance -= amount;
    }
    constructor(initialBalance) {
        if (initialBalance < 0) {
            throw new Error('initial balance cannot be negative');
        }
        this._balance = initialBalance || 0;
    }
}
// создаем банковский счет с начальным балансом
let account = new BankAccount(500);
console.log(account.balance);

account.deposit(200);
console.log(account.balance);

account.withdraw(1000);
console.log(account.balance);