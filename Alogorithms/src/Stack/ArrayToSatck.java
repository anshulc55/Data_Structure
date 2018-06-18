package Stack;

import java.util.Stack;

public class ArrayToSatck {

	public static void main(String a[]) {
		//Initialize and Define Array
		Integer[] intArr = { 1001, 1002, 1003, 1004 };
		
		//Create Object of Stack
		Stack<Integer> stack = new Stack<>();
		
		//Push Elements in Stack
		for (Integer i : intArr) {
			stack.push(i);
		}
		System.out.println("Non-Empty stack : " + stack);
	}

}
