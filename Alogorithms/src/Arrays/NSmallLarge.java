package Arrays;

import java.util.Arrays;

public class NSmallLarge {
	
	// Function to return k'th smallest 
    // element in a given array
    public static int kthSmallest(Integer [] arr, int k) 
    {
        // Sort the given array
        Arrays.sort(arr);
 
        // Return k'th element in 
        // the sorted array
        return arr[k-1];
    } 
     
    // driver program
    public static void main(String[] args) 
    {
        Integer arr[] = {12, 3, 5, 7, 19, 44, 98, 1, 8};
        int k = 6;
        System.out.print( "K'th smallest element is "+
                            kthSmallest(arr, k) );     
    }

}
