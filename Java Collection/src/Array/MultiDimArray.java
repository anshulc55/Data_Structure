package Array;

public class MultiDimArray {

	public static void main(String[] args) {
		// 2-D Array

		// twoDimensional is containing two Arrays of Three Elements
		int[][] twoDimensional = new int[2][3];
		twoDimensional[0][0] = 10;
		twoDimensional[0][1] = 20;
		twoDimensional[0][2] = 30;
		twoDimensional[1][0] = 11;
		twoDimensional[1][1] = 21;
		twoDimensional[1][2] = 31;

		int[][] twoDimArray = { { 50, 60, 70 }, { 51, 61, 71 } };

		for (int i = 0; i < twoDimArray.length; i++) {
			for (int j = 0; j < twoDimArray[i].length; j++) {
				System.out.print(twoDimArray[i][j] + " ");
			}
			System.out.println();
		}

	}

}
