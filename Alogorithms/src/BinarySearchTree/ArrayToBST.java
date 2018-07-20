package BinarySearchTree;

public class ArrayToBST {

	public static class TreeNode {
		int data;
		TreeNode left;
		TreeNode right;

		TreeNode(int data) {
			this.data = data;
		}
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
		int arr[] = { 10, 20, 30, 40, 50, 60, 70, 80, 90 };
		TreeNode rootNode = createBinarySearchTreeFromSortedArray(arr, 0, arr.length - 1);

		System.out.println("Inorder traversal of created binary search tree :");
		inOrder(rootNode);

	}

	public static TreeNode createBinarySearchTreeFromSortedArray(int[] arr, int start, int end) {
		if (start > end) {
			return null;
		}

		/* Get the middle element and make it root */
		int mid = (start + end) / 2;
		TreeNode node = new TreeNode(arr[mid]);

		/*
		 * Recursively construct the left subtree and make it left child of root
		 */
		node.left = createBinarySearchTreeFromSortedArray(arr, start, mid - 1);

		/*
		 * Recursively construct right subtree and make right child of the root
		 */
		node.right = createBinarySearchTreeFromSortedArray(arr, mid + 1, end);

		return node;
	}

}
