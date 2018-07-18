package Tree;

public class FindLevelOfNode {

	public static class TreeNode {
		int data;
		TreeNode left;
		TreeNode right;

		TreeNode(int data) {
			this.data = data;
		}
	}

	// Recursive Solution
	// To get level of node in a binary tree
	public static int getLevelOfNode(TreeNode root, int key, int level) {
		if (root == null)
			return 0;
		if (root.data == key)
			return level;

		int result = getLevelOfNode(root.left, key, level + 1);
		if (result != 0) {
			// If found in left subtree , return
			return result;
		}
		result = getLevelOfNode(root.right, key, level + 1);

		return result;
	}

	public static void main(String[] args) {
		// Creating a binary tree
		TreeNode rootNode = createBinaryTree();
		System.out.println("Node data: 70,Level :" + getLevelOfNode(rootNode, 70, 1));
		System.out.println("Node data: 100,Level :" + getLevelOfNode(rootNode, 100, 1));
		System.out.println("Node data: 60,Level :" + getLevelOfNode(rootNode, 60, 1));
		System.out.println("Node data: 40,Level :" + getLevelOfNode(rootNode, 40, 1));
	}

	public static TreeNode createBinaryTree() {

		TreeNode rootNode = new TreeNode(40);
		TreeNode node20 = new TreeNode(20);
		TreeNode node10 = new TreeNode(10);
		TreeNode node30 = new TreeNode(30);
		TreeNode node60 = new TreeNode(60);
		TreeNode node50 = new TreeNode(50);
		TreeNode node70 = new TreeNode(70);

		rootNode.left = node20;
		rootNode.right = node60;

		node20.left = node10;
		node20.right = node30;

		node60.left = node50;
		node60.right = node70;

		return rootNode;
	}

}
