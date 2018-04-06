package Set;

import java.util.TreeSet;

public class TreeSetDemo {

	public static void main(String[] args) {
		 TreeSet tSet = new TreeSet<>();
		 
		 tSet.add(12);
		 tSet.add(887);
		 tSet.add(34);
		 tSet.add(654);
		 tSet.add(111);
		 tSet.add(434);
		 
		 System.out.println(tSet);
		 
		 //tSet.remove(111);
		 //System.out.println(tSet);
		 
		 System.out.println("Set Contains 12 ? " + tSet.contains(12));
		 
		 System.out.println("First Element of TreeSet : " +tSet.first());
		 System.out.println("Last Element of TreeSet : " +tSet.last());
		 
		 System.out.println("Use of HeadSet : " +tSet.headSet(111));
		 System.out.println("Use of TailSet : " +tSet.tailSet(111));
		 
		 System.out.println("Use of SubSet : " +tSet.subSet(34, 788));
		 
		 tSet.clear();
		 System.out.println(tSet);
		 

	}

}
