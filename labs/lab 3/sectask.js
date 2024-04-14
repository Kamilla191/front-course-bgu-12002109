var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function isSameTree(p, q) {
    if (p === null && q === null) {
        return true; // Если оба дерева пусты, они считаются одинаковыми
    }
    if (p === null || q === null) {
        return false; // Если одно из деревьев пусто, а другое нет - они не одинаковы
    }
    // Рекурсивно проверяем, совпадают ли значения текущих узлов и их поддеревья
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
// Примеры использования:
var p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
var q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(p, q)); // Вывод: true
var p2 = new TreeNode(1, new TreeNode(2), null);
var q2 = new TreeNode(1, null, new TreeNode(2));
console.log(isSameTree(p2, q2)); // Вывод: false
