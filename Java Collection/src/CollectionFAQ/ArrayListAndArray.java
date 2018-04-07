package CollectionFAQ;

import java.util.ArrayList;
import java.util.Arrays;

public class ArrayListAndArray {

	public static void main(String[] args) {
		//Convert Array To ArrayList or Make Array Dynamic
		
		String[] array = {"Anshul", "John", "Mirrila", "Sachin", "Amit"};
		
		ArrayList arrayList = new ArrayList(Arrays.asList(array));
		
		arrayList.add("Nitika");
		System.out.println(arrayList);
		
		
		//Convert ArrayList to Array
		ArrayList arrayListDemo = new ArrayList<>();
		
		arrayListDemo.add("India");
		arrayListDemo.add("USA");
		arrayListDemo.add("UK");
		arrayListDemo.add("Singapore");
		
		String[] testArray = (String[]) arrayListDemo.toArray(new String[arrayListDemo.size()]);
		
		System.out.println(testArray[0]);
	}

}
