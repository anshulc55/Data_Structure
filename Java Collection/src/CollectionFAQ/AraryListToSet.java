package CollectionFAQ;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.TreeSet;

public class AraryListToSet {
	
	public static void main(String agrs[]){
		
		ArrayList alist = new ArrayList<>();
		alist.add(12);
		alist.add(23);
		alist.add(54);
		alist.add(12);
		alist.add(54);
		alist.add(124);
		alist.add(98);
		//[12, 23, 54, 12, 54, 124, 98]

		System.out.println(alist);
		
		//Convert ArrayList to Set
		HashSet set = new HashSet(alist);
		System.out.println("Removed Duplicate : " +set);
		
		
		//Sort ArrayList
		Collections.sort(alist);
		System.out.println("Sorted ArrayList : " + alist);
		
		//Remove Duplicate & Sort
		TreeSet tset = new TreeSet(alist);
		System.out.println("Sorted and Uniques : " + tset);
	}

}
