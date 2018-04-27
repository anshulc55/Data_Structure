package SearchingAlgorithms;

public class FindFirstTwoSmallestInArray {

	public void findSmallest(int[] arr) {

		int first, second, length = arr.length;

		first = second = Integer.MAX_VALUE;

		for (int i = 0; i < arr.length; i++) {

			if (arr[i] < first) {
				second = first;
				first = arr[i];
			} else if (arr[i] < second && arr[i] != first) {
				second = arr[i];
			}
		}

		System.out.println("First Smallest is : " + first + " And Second smallest is : " + second);

	}

	public static void main(String args[]) {

		FindFirstTwoSmallestInArray ob = new FindFirstTwoSmallestInArray();
		int[] array = {123,45,12,8,776,1,999,34,27,1};
		
		ob.findSmallest(array);
		
	}

}
