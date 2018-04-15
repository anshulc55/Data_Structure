package SearchingAlgorithms;

public class BinarySearch {
	
	//Recursion Method of Bimnary Search
	//Binary Search, Search element in Array[f....l], find element x
	//Return index if element is present else return -1
	public int binarySearch(int[] arr, int f, int l, int x ){
		
		if(l>=1){
			
			int mid = f + (l-f)/2;
			
			//Match with middle
			if(arr[mid] == x)
				return mid;
			
			//Element is greater than middle
			if(x>arr[mid])
				return binarySearch(arr, mid+1, l, x);
			
			//Element is less than Middle
			if(x<arr[mid])
				return binarySearch(arr, f, mid-1, x);
		}
		
		return -1;
	}
	
	
	public int binarySearchItr(int[] arr, int x){
		int f = 0;
		int l = arr.length;
		
		while (l>=f){
			
			int mid = f + (l-f)/2;
			
			//If middle is equal to x
			if(arr[mid] == x){
				return mid;
			}else if (arr[mid]< x){
				f = mid +1;
			} else{
				l = mid -1;
			}
			
		}
		
		return -1;
	}
	
	//Implement Binary Search
	public static void main(String args[]){
		
		BinarySearch ob = new BinarySearch();
		int[] array = {10,23,30,45,88,132,567,888};
		
		int x = 23;
		int length = array.length;
		
		//int index = ob.binarySearch(array, 0, length-1, x);
		int index = ob.binarySearchItr(array, x);
		
		if(index==-1){
			System.out.println("Element is not Presnt in Array");
		}else{
			System.out.println("Element is presnt at Index : " + index);
		}
		
	}

}
