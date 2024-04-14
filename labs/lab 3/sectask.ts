class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
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
const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(p, q)); // Вывод: true

const p2 = new TreeNode(1, new TreeNode(2), null);
const q2 = new TreeNode(1, null, new TreeNode(2));
console.log(isSameTree(p2, q2)); // Вывод: false
