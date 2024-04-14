type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type First<T extends any[]> = T extends [infer U, ...any[]] ? U : never;

type head1 = First<arr1>; // 'a'
type head2 = First<arr2>; // 3

// Использование типа в определении переменных
const variable1: head1 = "a"; // Верно
const variable2: head2 = 3; // Верно

// Использование типа в аргументах функции
function logFirstElement<T extends any[]>(arr: T): First<T> {
    return arr[0];
}

const result1 = logFirstElement(["a", "b", "c"]); // Тип result1 будет string, так как это первый элемент массива строк
const result2 = logFirstElement([1, 2, 3]); // Тип result2 будет number, так как это первый элемент массива чисел

console.log(typeof result1)
console.log(typeof result2)