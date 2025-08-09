function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

var isSameTree = function (p, q) {
	if (p == null && q == null) {
		return true;
	}

	if (p == null || q == null) {
		return false;
	}

	stack_p = [p];
	stack_q = [q];

	result_p = [];
	result_q = [];

	while (stack_p.length > 0) {
		node_p = stack_p.pop();
		node_q = stack_q.pop();

		console.log(node_p.right);
		console.log(node_q.right);

		if (node_p.val !== node_q.val) {
			return false;
		}

		if (node_p.left && node_q.left) {
			stack_p.push(node_p.left);
			stack_q.push(node_q.left);
		} else if (!(node_p.left === null && node_q.left === null)) {
			return false;
		}

		if (node_p.right && node_q.right) {
			stack_p.push(node_p.right);
			stack_q.push(node_q.right);
		} else if (!(node_p.right === null && node_q.right === null)) {
			return false;
		}
	}
	return true;
};

p = new TreeNode(1);
q = new TreeNode(1, null, new TreeNode(3, null, null));

console.log(isSameTree(p, q));
