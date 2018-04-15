package Array;

public class ObjectArray {

	public static void main(String[] args) {

		Cities[] cityArray = new Cities[5];

		cityArray[0] = new Cities(201301, "Noida");
		cityArray[1] = new Cities(201302, "LA");
		cityArray[2] = new Cities(110011, "New York");
		cityArray[3] = new Cities(330099, "London");
		cityArray[4] = new Cities(501301, "New Delhi");

		for (int i = 0; i < cityArray.length; i++) {
			System.out.println("City PIN is : " + cityArray[i].pinCode + " & Name is : " + cityArray[i].city);
		}

	}

}
