package Stack;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class StackToList {

	public static void main(String a[]) {

		// Create Object of Stack & Push Elements
		Stack<Integer> stack = new Stack<>();
		stack.push(1);
		stack.push(2);
		stack.push(3);
		stack.push(90);

		// Create Object of List and add Stack elements
		List<Integer> list = new ArrayList<>();
		list.addAll(stack);
		System.out.println("Non-Empty stack : " + stack);
		System.out.println("Non-Empty List : " + list);
	}

}
