/** @format */

//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
	constructor(matrix) {
		// set the matrix
		this.matrix = matrix;
	}

	get rows() {
		// first set the rows to the matrix
		let rows = this.matrix;

		// now i will have to split each of the rows
		let splitRows = rows.split("\n");
		// then next is to map through the rows , then split the rows and return the data value in each rows
		const mapping = splitRows.map((row) => {
			const splitt = row.split(" ");

			// next is to then return the split result and map through each data in the table
			return splitt.map((data) => {
				return Number(data);
			});
		});
		// finally return the mapped rows
		return mapping;
	}

	get columns() {
		// set an empty array of columns
		const columns = [];

		for (let i = 0; i <= this.rows.length; i++) {
			columns[i] = this.rows.map((row) => {
				return row[i];
			});
		}
		return columns;
	}
}
