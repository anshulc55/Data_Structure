package Array;

import java.util.Arrays;

public class ArrayComparision {

	public static void main(String[] args) {
		int arr1[] = {1,2,3};
		int arr2[] = {1,2,3};
		
		/*if(arr1 == arr2){
			System.out.println("Arrays are Equals");
		}else{
			System.out.println("Arrays are not Equals");
		}*/
		/*boolean flag = true;
		
		if(arr1.length == arr2.length){
			
			for (int i = 0; i < arr2.length; i++) {
				if(arr1[i] == arr2[i]){
					
				}else{
					flag = false;
					break;
				}
			}
			
		}else{
			System.out.println("Arrays length is not matching");
		}
		
		if(flag){
			System.out.println("Arrays are Equals");
		}else{
			System.out.println("Arrays are not Equals");
		}*/
		
		if (Arrays.equals(arr1, arr2)) {
			System.out.println("Arrays are Equals");
		}else{
			System.out.println("Arrays are not Equals");
		}

	}

}
