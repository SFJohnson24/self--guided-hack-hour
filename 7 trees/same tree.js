var isSameTree = function(p, q) {
    const isBaseCase = !(p || q);
    if (isBaseCase) return true;

    const isBalanced = (p && q);
    if (!isBalanced) return false;

    const isSame = p.val === q.val;
    if (!isSame) return false;

    return dfs(p, q);
};

const dfs = (p, q) => {
    const left = isSameTree(p.left, q.left);
    const right = isSameTree(p.right, q.right);

    return left && right;
}