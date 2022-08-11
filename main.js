// !  условные оператор
// ? тернарные операторы
//  условие ? () : ()

// ! 1
// let currentUser = false;
// currentUser
//   ? alert("Добро пожаловать")
//   : alert("Зарегестрируйтесь или войдите в свой аккаунт");

// ! 2
// let password = prompt("Введите пароль");
// let passwordConfirm = prompt("Подтвердите пароль");
// password === passwordConfirm
//   ? alert("Вы успешно подтвердили пароль")
//   : alert("Пароли не совпадают");

// ! 3
// let age = prompt("Сколько вам лет?");
// age >= 18 ? console.log("Добро пожаловать") : console.log("Доступ запрещен");

// ! 4
// let role = prompt("Введите роль");
// role === "admin"
//   ? alert("Вы можете редактировать группу")
//   : alert("У вас не прав на редактирование");

// ! 5
// let productsCount = prompt("Введите количество товаров");
// productsCount > 0
//   ? alert(`В корзине ${productsCount} товаров`)
//   : alert("Корзина пустая");

// ! if / if...else / if...else if...else if...else
// ! 1
// let name = prompt("Введите имя");
// if (name === "John") {
//   alert(`Привет ${name}`);
// }

// ! 2
// let age = 9;
// let candrive = null;
// if (age > 17) {
//   candrive = true;
// } else {
//   candrive = false;
// }
// console.log(candrive);

// ! 3
// let startTime = 7;
// let arrive = 7;
// if (arrive >= startTime) {
//   console.log("Можете входить");
// } else {
//   console.log("Вход запрещен");
// }

// ! 4
// let num1 = +prompt("Первое число");
// let operator = prompt("Математический оператор");
// let num2 = +prompt("Второе число");
// if (operator === "+") {
//   alert(num1 + num2);
// } else if (operator === "-") {
//   alert(num1 - num2);
// } else if (operator === "*") {
//   alert(num1 * num2);
// } else if (operator === "/") {
//   alert(num1 / num2);
// } else {
//   alert("Ошибка, введите корректный оператор");
// }

//! switchcase
// let season = +prompt("Выберите сезон");
// switch (season) {
//   case 1:
//     console.log("Зима");
//     break;
//   case 2:
//     console.log("Весна");
//     break;
//   case 3:
//     console.log("Лето");
//     break;
//   case 4:
//     console.log("Осень");
//     break;
//   default:
//     console.log("Выберите число от 1 до 4");
// }

//! CREATE, UPDATE, READ, DELETE -> CRUD - operations
// let action = "DELET";
// switch (action) {
//   case "CREATE":
//     alert("Создан профиль");
//     break;
//   case "READ":
//     alert("Есть отображение");
//     break;
//   case "UPDATE":
//     alert("Профиль отредактирован");
//     break;
//   case "DELETE":
//     alert("Профиль удален");
//     break;
//   default:
//     alert("Действие не относится к CRUD!");
// }

// let day = prompt("Выберите день недели");
// switch (day) {
//   case "1":
//     console.log("ПН");
//     break;
//   case "2":
//     console.log("ВТ");
//     break;
//   case "3":
//     console.log("СР");
//     break;
//   case "4":
//     console.log("ЧТ");
//     break;
//   case "5":
//     console.log("ПТ");
//     break;
//   case "6":
//     console.log("СБ");
//     break;
//   case "7":
//     console.log("ВС");
//     break;
//   default:
//     console.log("Это не день недели!");
// }

// ! логическое И - &&
// let bread = "baton";
// let product1 = "milk";
// if (bread === "baton" && product1 === "milk") {
//   alert("Взяли нужное");
// } else {
//   alert("не то, что нужно!");
// }

// ! логическое ИЛИ - ||
// let product = "lepe";
// if (product === "baton" || product === "lep") {
//   alert("right");
// } else {
//   alert("not right");
// }

// let arrive = +prompt("Время прихода");
// if (arrive >= 10 && arrive <= 22) {
//   alert("Открыто");
// } else {
//   alert("Закрыто");
// }

//! данные из Базы Данных БД
// email: saparalievabu@gmail.com
// password: passwordrly
// const email = prompt("email adress");
// const password = prompt("password");
// if (email === "saparalievabu@gmail.com" && password === "passwordrly") {
//   alert("wp");
// } else {
//   alert("gg");
// }

// console.log(email, password);
// console.log(Boolean(email));
// const email = prompt("email adress");
// const password = prompt("password");
// if (email == null || password == null || email === "" || password === "") {
//   alert("Заполните поля");
// } else {
//   if (email === "saparalievabu@gmail.com" && password === "passwordrly") {
//     alert("wp");
//   } else {
//     alert("gg");
//   }
// }

// let password = prompt("password");
// const trie = 1;
// if (password === "passwordrly") {
//   alert("Пароль введен правильно");
// } else {
//   password = prompt("Попробуйте еще раз");
//   console.log(password);
//   if (password === "passwordrly") {
//     alert("Пароль введен правильно");
//   } else {
//     alert("Ваш аккаунт заблокирован");
//   }
// }

// const email = prompt("email adress");
// if (email === "saparalievabu@gmail.com") {
//   let password = prompt("Введите пароль");
//   if (password === "passwordrly") {
//     alert("logged in!");
//   }
// } else {
//   alert("такая почта не зарегистрирована");
// }

// let answer = confirm("Вы хотите покинуть игру");
// console.log(answer);
// if (answer) {
//   alert("А, пока!");
// } else {
//   alert("Лучший!!");
// }

// инкремент - увеличить на 1 (++)
// декремент - уменьшить на 1(--)

// let answer = confirm("поставить лайк?");
// if (answer) {
//   likes++;
//   alert(`Вы поставили лайк, всего лайков: ${likes}`);
//   console.log(likes);
// }

// answer = confirm("поставить лайк?");
// if (answer) {
//   likes++;
//   alert(`Вы поставили лайк, всего лайков: ${likes}`);
//   console.log(likes);
// }
// answer = confirm("поставить лайк?");
// if (answer) {
//   likes++;
//   alert(`Вы поставили лайк, всего лайков: ${likes}`);
//   console.log(likes);
// }
// answer = confirm("поставить лайк?");
// if (answer) {
//   likes++;
//   alert(`Вы поставили лайк, всего лайков: ${likes}`);
//   console.log(likes);
// }

// let tasksInClassroom = confirm("Вы выполнили задание из Классрума");
// let tasksInPlatform = confirm("Вы выполнили задание из Makers Courses");
// let kpi = 90;
// if (tasksInClassroom && tasksInPlatform) {
//   kpi++;
//   alert(`Ваш kpi повысился: ${kpi}`);
// } else {
//   kpi--;
//   alert(`Ваш kpi понизился: ${kpi}`);
// }

// let homework = prompt("какой макет вы сделали?");
// if (homework === "momentum" || homework === "teamflow") {
//   alert("100 баллов");
// } else {
//   alert("0 баллов");
// }
