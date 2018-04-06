package ListInterface;

import java.util.ArrayList;

public class ArrayListDemo {
	
	public static void main(String args[]){
		
		ArrayList<Integer> list = new ArrayList<Integer>();
		
		list.add(12);
		list.add(42);
		list.add(62);
		list.add(12);
		list.add(78674);
		
		System.out.println(list);
		
		list.remove(1);
		System.out.println(list);
		
		System.out.println(list.get(3));
		
		
	}

}
