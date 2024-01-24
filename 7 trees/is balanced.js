var isBalanced = function(root) {
    const isBaseCase = root === null;
    if (isBaseCase) return true;
    if (!isAcceptableHeight(root)) return false;
    if (!isChildBalanced(root)) return false;

    return true;
}

const isChildBalanced = (root) => {
    const left = isBalanced(root.left);
    const right = isBalanced(root.right);

    return left && right
}

const isAcceptableHeight = (root) => {
    const left = getHeight(root.left);
    const right = getHeight(root.right);

    const difference = Math.abs(left - right);

    return difference <= 1;
}

const getHeight = (root) => {
    const isBaseCase = root === null;
    if (isBaseCase) return 0;

    return dfs(root);
}

var dfs = (root) => {
    const left = getHeight(root.left)
    const right = getHeight(root.right);

    const height = Math.max(left, right);

    return height + 1;
}