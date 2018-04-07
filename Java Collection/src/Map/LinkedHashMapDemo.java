package Map;

import java.util.LinkedHashMap;

public class LinkedHashMapDemo {
	
	public static void main(String args[]){
		
		LinkedHashMap<String, Integer> lmap = new LinkedHashMap<>();
		
		lmap.put("Anshul", 27);
		lmap.put("John", 47);
		lmap.put("Amit", 26);
		lmap.put("Nitika", 23);
		lmap.put("Julia", 32);
		lmap.putIfAbsent("Anshul", 27);
		
		System.out.println(lmap);
		System.out.println("Size of map : " + lmap.size());
		System.out.println("Is map Empty : " + lmap.isEmpty());
		System.out.println("Is Contains Nitika : " + lmap.containsKey("Neetika"));
		System.out.println("Is Contains 23 : " + lmap.containsValue(123));
		
		
	}

}
