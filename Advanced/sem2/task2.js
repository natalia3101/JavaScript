// У вас есть базовый список пользователей.Некоторые из них имеют информацию
//  о своем премиум - аккаунте, а
// некоторые– нет.
// Ваша задача– создать структуру классов для этих пользователей и функцию 
// для получения информации о
// наличии премиум - аккаунта, используя Опциональную цепочку вызовов методов, 
// оператор нулевого слияния
// и instanceof.
// 1. Создайте базовый класс User с базовой информацией(например, имя и фамилия).
// 2. Создайте классы PremiumUser и RegularUser, которые наследуются от User.Класс
// PremiumUser должен иметь свойство premiumAccount(допустим, дата истечения 
// срока действия), а у RegularUser такого свойства нет.
// 3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и
// возвращает информацию о наличии и сроке действия премиум - аккаунта, используя
// Опциональную цепочку вызовов методов и оператор нулевого слияния.
// 4. В функции getAccountInfo используйте instanceof для проверки типа переданного
// пользователя и дайте соответствующий ответ.

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

}
class PremiumUser extends User {
    constructor(firstName, lastName) {
        super(firstName, lastName);
        this.premiumAccount = null;
    }
    setPremiumAccount() {
        this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1); // установите срок действия на год вперед
    };
}

class RegularUser extends User {
    // no additional qualities
    constructor(firstName, lastName) {
        super(firstName, lastName)
    }
}

function getAccountInfo(user) {
    // премиум акккаунт действителен до такой-то даты или инфо отсутствует
    // пользователь без премиум аккаунта
    // тип пользователя не определен
    if (user instanceof PremiumUser) {
        return user.premiumAccount ? new Date(user.premiumAccount).toLocaleDateString() : 'Premium account expired';
    } else if (user instanceof RegularUser) {
        return 'Regular user, no premium account';
    } else {
        return 'Unknown type of user';
    }
}
// проверка
const premiumUser = new PremiumUser('Natalia', 'Sl', '2025-03-28');
premiumUser.setPremiumAccount();
const regularUser = new RegularUser('Chris', 'Man');
console.log(getAccountInfo(premiumUser));
console.log(getAccountInfo(regularUser));