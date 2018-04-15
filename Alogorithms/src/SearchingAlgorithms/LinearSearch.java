package SearchingAlgorithms;

public class LinearSearch {
	
	//Linear Search in Java
	public static void main(String args[]){
		
		int x = 300;
		
		int[] arr = {10,30,50,60,110,130,170};
		
		System.out.println("Element is present at index : " + linerSearch(arr, x));
		
	}
	
	public static int linerSearch(int[] arr, int x){
		
		for (int i = 0; i < arr.length; i++) {
			if (x==arr[i])
				return i;
		}
		return -1;	
	}

}
