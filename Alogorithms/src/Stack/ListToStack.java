package Stack;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class ListToStack {

	public static void main(String a[]) {
		// Create Object of Stack
		Stack<Integer> stack = new Stack<>();

		// Create Object of List and add elements
		List<Integer> list = new ArrayList<>();
		list.add(1);
		list.add(2);
		list.add(3);
		list.add(23);

		// Add all elements of Array in Stack
		System.out.println("Non-Empty stack addAll Operation : " + stack.addAll(list));
		System.out.println("Non-Empty stack : " + stack);
	}

}
