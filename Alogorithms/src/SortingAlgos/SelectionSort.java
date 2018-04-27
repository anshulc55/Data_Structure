package SortingAlgos;

public class SelectionSort {

	public void doSort(int arr[]) {
		int n = arr.length;

		// One by one move boundary of unsorted subarray
		for (int i = 0; i < n - 1; i++) {
			// Find the minimum element in unsorted array
			int min_indx = i;
			for (int j = i + 1; j < n; j++){
				if (arr[j] < arr[min_indx])
					min_indx = j;
			}

			// Swap the found minimum element with the first
			// element
			int temp = arr[min_indx];
			arr[min_indx] = arr[i];
			arr[i] = temp;	
		}
	}

	// Prints the array
	void printArray(int arr[]) {
		int n = arr.length;
		for (int i = 0; i < n; ++i)
			System.out.print(arr[i] + " ");
	}

	// Driver code to test above
	public static void main(String args[]) {
		SelectionSort ob = new SelectionSort();
		int arr[] = { 94, 8, 73, 32, 11 };
		ob.doSort(arr);
		System.out.println("Sorted array");
		ob.printArray(arr);
	}
	// Time Complexity : O(n2) as there are two nested loops.
}
