// Использование типа в определении переменных
var variable1 = "a"; // Верно
var variable2 = 3; // Верно
// Использование типа в аргументах функции
function logFirstElement(arr) {
    return arr[0];
}
var result1 = logFirstElement(["a", "b", "c"]); // Тип result1 будет string, так как это первый элемент массива строк
var result2 = logFirstElement([1, 2, 3]); // Тип result2 будет number, так как это первый элемент массива чисел
console.log(typeof result1);
console.log(typeof result2);
