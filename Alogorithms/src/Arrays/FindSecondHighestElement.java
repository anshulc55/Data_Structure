package Arrays;

public class FindSecondHighestElement {

	public static void main(String args[]) {
		int[] arr1 = { 7, 5, 6, 1, 4, 2, 45, 78,43,0,99,67 };
		int secondHighest = findSecondLargestNumberInTheArray(arr1);
		System.out.println("Second largest element in the array : " + secondHighest);
	}

	public static int findSecondLargestNumberInTheArray(int array[]) {
		// Initialize these to the smallest value possible
		int highest = Integer.MIN_VALUE;
		int secondHighest = Integer.MIN_VALUE;

		for (int i = 0; i < array.length; i++) {

			// If current element is greater than highest
			if (array[i] > highest) {

				// assign second highest element to highest element
				secondHighest = highest;

				// highest element to current element
				highest = array[i];
			} else if (array[i] > secondHighest)
				secondHighest = array[i];
		}
		return secondHighest;
	}

}
