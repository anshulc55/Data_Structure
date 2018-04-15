package Array;

public class ArrayIntro {

	public static void main(String[] args) {
		
		//Define array
		int[] intArray = new int[5];
		String[] arrayTwo = new String[]{"New York", "LA", "Zurich", "London", "New Delhi"};
		
		
		intArray[0] = 76;
		intArray[1] = 66;
		intArray[2] = 987;
		intArray[3] = 12;
		intArray[4] = 176;
		
		/*System.out.println(intArray[2]);
		System.out.println(arrayTwo[7]);
*/
		for (int i = 0; i < intArray.length; i++) {
			System.out.println("Element at Index : " +i+ " is : " + intArray[i]);
		}
		
		for (String city : arrayTwo) {
			System.out.println(city);
		}
	}

}
