package Tree;

public class LeafNodeTraversal {

	public static class TreeNode {
		int data;
		TreeNode left;
		TreeNode right;

		TreeNode(int data) {
			this.data = data;
		}
	}

	// print leaf nodes
	public static void printLeafNodes(TreeNode node) {

		if (node == null)
			return;

		if (node.left == null && node.right == null) {
			System.out.printf("%d ", node.data);
		}
		printLeafNodes(node.left);
		printLeafNodes(node.right);
	}

	public static void main(String[] args) {
		// Creating a binary tree
		TreeNode rootNode = createBinaryTree();
		System.out.println("Printing leaf nodes in binary tree :");
		printLeafNodes(rootNode);
	}

	public static TreeNode createBinaryTree() {

		TreeNode rootNode = new TreeNode(40);
		TreeNode node20 = new TreeNode(20);
		TreeNode node10 = new TreeNode(10);
		TreeNode node30 = new TreeNode(30);
		TreeNode node60 = new TreeNode(60);
		TreeNode node50 = new TreeNode(50);
		TreeNode node70 = new TreeNode(70);
		TreeNode node5 = new TreeNode(5);
		TreeNode node55 = new TreeNode(55);

		rootNode.left = node20;
		rootNode.right = node60;

		node20.left = node10;
		node20.right = node30;

		node60.left = node50;
		node60.right = node70;
		
		node10.left = node5;
		
		node50.right = node55;

		return rootNode;
	}

}
