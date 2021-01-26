import store from "../../store/index";
import TableRowStatus from "./TableRowStatus";
import TableRowDelete from "./TableRowDelete";

export default class TableRow {
	constructor(rowData) {
		this.rowData = rowData;
		this.element = document.createElement("tr");
		this.element.setAttribute("data-row-id", rowData.id);
	};

	generateRow() {
		const rowNumber = store.state.library.indexOf(this.rowData) + 1;
		const rowHeader = document.createElement("th");
		rowHeader.setAttribute("scope", "row");
		rowHeader.innerText = rowNumber;

		const buttonDelete = new TableRowDelete(this.rowData.id).render();
		const rowDelete = document.createElement("td");
		rowDelete.appendChild(buttonDelete);

		const rowCells = Object.keys(this.rowData.data).map(dataItem => {
			const cell = document.createElement("td");

			if (dataItem === "status") {
				const cellStatus = new TableRowStatus(this.rowData.id, this.rowData.data["status"]);
				cell.appendChild(cellStatus.render());
				return cell;
			};

			cell.innerText = this.rowData.data[dataItem];

			return cell;
		});

		this.element.append(rowHeader, ...rowCells, rowDelete)
	};

	render() {
		this.generateRow();

		return this.element;
	};
};