package Array;

public class ReturnArray {

	public static void main(String[] args) {
		int[] number = test();
		
		for (int i = 0; i < number.length; i++) {
			System.out.println(number[i]);
		}
	}

	public static int[] test(){
		
		int[] number2 = {1,23,56,87,25,54};
		return number2;
	}
}
