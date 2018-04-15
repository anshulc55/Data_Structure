package Array;

public class PassingArrayToMethod {

	public static void main(String[] args) {
		
		int[] number = {3,1,4,5,9,2};
		
		sum(number);
	}
	
	public static void sum(int[] arr){
		
		int sum = 0;
		
		for (int i = 0; i < arr.length; i++) {
			sum = sum + arr[i];
		}
		
		System.out.println("Sum of Array is : " + sum);
	}

}
