class recipe {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories;
    }

    mensaje() {
        return "Esta receta contiene aproximadamente " + this.calories + " kcal";
    }
}
const meals = [{ name: "Risotto de hongos con hierbas", calories: 100 }, { name: "Tarta de jamón y queso", calories: 120 }, { name: "Zucchini condimentado", calories: 70 }, { name: "Milanesa de ternera con ensalada fresca", calories: 95 }, { name: "Hongos fritos con huevos poyet", calories: 97 }, { name: "Capelletti de verduras con salsa blanca", calories: 270 }, { name: "Ensalada de lentejas", calories: 85 }, { name: "Omelette caprese", calories: 105 }, { name: "Tortilla de espinaca y ricota", calories: 113 }];

let recipe_user;
let total_calories = 0;
let dessert = 300;

request_ingredients();
add_dessert();

const light_meals = meals.filter(name => name.calories < 100);
for (const name of light_meals) { console.log("Las comidas con menos calorías son: " + name.name) };

// FUNCIONES DEFINIDAS
function request_ingredients() {
    let request_recipe_name = prompt("Qué receta querés hacer? OPCIONES: POLLO CON PAPAS - FIDEOS CON CREMA - BERENJENAS EMPANADAS CON PURÉ");
    if (request_recipe_name === "pollo con papas") {
        recipe_user = new recipe(request_recipe_name, 200);
        meals.push(recipe_user);
        alert(recipe_user.mensaje());
    } else if (request_recipe_name === "fideos con crema") {
        recipe_user = new recipe(request_recipe_name, 300);
        meals.push(recipe_user);
        alert(recipe_user.mensaje());
    } else if (request_recipe_name === "berenjenas empanadas con pure" || request_recipe_name === "berenjenas empanadas con puré") {
        recipe_user = new recipe(request_recipe_name, 150);
        meals.push(recipe_user);
        alert(recipe_user.mensaje());
    } else {
        alert("No ingresaste una receta válida, por favor ingrese nuevamente");
        request_ingredients();
    }
}

function add_dessert() {
    if ((recipe_user.calories + dessert) <= 500) {
        total_calories = recipe_user.calories + dessert;
        alert("Con la comida que elegiste podrías comer de postre un FLAN CON DULCE DE LECHE y la suma de calorías de ambas comidas es de: " + total_calories + "kcal");
    } else {
        alert("La comida que elegiste ya tiene demasiadas calorías para comer postre");
    }
}


















// const light_meals = meals.sort(order_calories());
// let meals_calories;

// function order_calories() {
//     for (const calories of meals) {
//         meals_calories = calories.calories;
//     }
// }