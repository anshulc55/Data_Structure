package Arrays;

public class FindMissingNumber {

	public static void main(String[] args) {

		int[] arr1 = { 8, 9, 3, 5, 6, 1, 4, 2 };
		System.out.println("Missing number from array arr1: " + missingNumber(arr1));
		int[] arr2 = { 6, 3, 1, 2 , 4, 7 };
		System.out.println("Missing number from array arr2: " + missingNumber(arr2));

	}

	public static int missingNumber(int[] arr) {
		int n = arr.length + 1;
		int sum = n * (n + 1) / 2;
		int restSum = 0;
		for (int i = 0; i < arr.length; i++) {
			restSum = restSum + arr[i];
		}
		int missingNumber = sum - restSum;
		return missingNumber;
	}
}
