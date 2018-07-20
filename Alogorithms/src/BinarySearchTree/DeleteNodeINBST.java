package BinarySearchTree;

public class DeleteNodeINBST {

	public static class TreeNode {
		int data;
		TreeNode left;
		TreeNode right;

		TreeNode(int data) {
			this.data = data;
		}
	}

	// Get minimum element in binary search tree
	public static TreeNode minimumElement(TreeNode root) {
		if (root.left == null)
			return root;
		else {
			return minimumElement(root.left);
		}
	}

	public static TreeNode deleteNode(TreeNode root, int value) {
		if (root == null)
			return null;
		if (root.data > value) {
			root.left = deleteNode(root.left, value);
		} else if (root.data < value) {
			root.right = deleteNode(root.right, value);

		} else {
			// if nodeToBeDeleted have both children
			if (root.left != null && root.right != null) {
				TreeNode temp = root;
				// Finding minimum element from right
				TreeNode minNodeForRight = minimumElement(temp.right);
				// Replacing current node with minimum node from right subtree
				root.data = minNodeForRight.data;
				// Deleting minimum node from right now
				deleteNode(root.right, minNodeForRight.data);

			}
			// if nodeToBeDeleted has only left child
			else if (root.left != null) {
				root = root.left;
			}
			// if nodeToBeDeleted has only right child
			else if (root.right != null) {
				root = root.right;
			}
			// if nodeToBeDeleted do not have child (Leaf node)
			else
				root = null;
		}
		return root;
	}

	public static TreeNode insert(TreeNode root, TreeNode nodeToBeInserted) {
		if (root == null) {
			root = nodeToBeInserted;
			return root;
		}

		if (root.data > nodeToBeInserted.data) {
			if (root.left == null)
				root.left = nodeToBeInserted;
			else
				insert(root.left, nodeToBeInserted);
		} else if (root.data < nodeToBeInserted.data)
			if (root.right == null)
				root.right = nodeToBeInserted;
			else
				insert(root.right, nodeToBeInserted);
		return root;
	}

	public static void inOrder(TreeNode root) {
		if (root == null)
			return;
		inOrder(root.left);
		System.out.print(root.data + " ");
		inOrder(root.right);
	}

	public static void main(String[] args) {

		// Creating a binary search tree
		TreeNode rootNode = createBinarySearchTree();

		System.out.println("Binary tree:");
		inOrder(rootNode);
		System.out.println();
		System.out.println("Deleting node 13 which have two children:");
		TreeNode rootNodeRes = deleteNode(rootNode, 13);
		inOrder(rootNodeRes);
		
		System.out.println("Deleting node 10 which have two children:");
		TreeNode rootNodeRes1 = deleteNode(rootNode, 10);
		inOrder(rootNodeRes1);
		
		System.out.println("Deleting node 40 which have two children:");
		TreeNode rootNodeRes2 = deleteNode(rootNode, 40);
		inOrder(rootNodeRes2);
	}

	public static TreeNode createBinarySearchTree() {
		TreeNode rootNode = new TreeNode(40);
		TreeNode node20 = new TreeNode(20);
		TreeNode node10 = new TreeNode(10);
		TreeNode node30 = new TreeNode(30);
		TreeNode node60 = new TreeNode(60);
		TreeNode node50 = new TreeNode(50);
		TreeNode node70 = new TreeNode(70);
		TreeNode node5 = new TreeNode(5);
		TreeNode node13 = new TreeNode(13);
		TreeNode node55 = new TreeNode(55);

		insert(null, rootNode);
		insert(rootNode, node20);
		insert(rootNode, node10);
		insert(rootNode, node30);
		insert(rootNode, node60);
		insert(rootNode, node50);
		insert(rootNode, node70);
		insert(rootNode, node5);
		insert(rootNode, node13);
		insert(rootNode, node55);
		return rootNode;
	}

}
