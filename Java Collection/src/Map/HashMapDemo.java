package Map;

import java.util.HashMap;

public class HashMapDemo {
	
	public  static void main(String agrs[]){
		
		HashMap<String, Integer> hmap = new HashMap<String, Integer>();
		
		hmap.put("Anshul", 27);
		hmap.put("John", 47);
		hmap.put("Amit", 26);
		hmap.put("Nitika", 23);
		hmap.put("Julia", 32);
		
		System.out.println(hmap);
		
		if (hmap.containsKey("Amit")){
			System.out.println("Age of Amit is : " + hmap.get("Amit"));
		}
		System.out.println("Size of HashMap is : " + hmap.size());
		hmap.clear();
		System.out.println("Is hashMap Empty ? " + hmap.isEmpty());
	}

}
