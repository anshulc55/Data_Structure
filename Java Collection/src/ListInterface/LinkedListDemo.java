package ListInterface;

import java.util.LinkedList;

public class LinkedListDemo {

	public static void main(String[] args) {
		
		LinkedList list = new LinkedList();
		
		list.add(12);
		list.add(100);
		list.add("Java");
		list.add("Tutorial");
		list.add(88);
		list.add("Collection");
		list.add(123);
		list.add(98);
		list.add(56);
		
		System.out.println(list);
		list.addFirst("Anshul");
		System.out.println(list);
		list.addLast("Thakur");
		System.out.println(list);
	}

}
