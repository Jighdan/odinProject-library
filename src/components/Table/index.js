// For more information on styling -> https://getbootstrap.com/docs/5.0/content/tables/
import ComponentBase from "../ComponentBase";
import store from "../../store/index";
import TableRow from "./tableRow";

export default class Table extends ComponentBase {
	constructor() {
		super({ store, element: document.getElementById("libraryContainer") });
		this.tableBody = document.createElement("tbody");
		this.element.appendChild(this.tableBody);

		this.hasRenderedOnce = false;
	};

	generateHeaders() {
		// Need a last empty header to compensate for the `delete` button of each row
		const availableHeaders = ["#", "Title", "Author", "Status", ""];
		const tableHeader = document.createElement("thead");

		const headers = availableHeaders.map(headerText => {
			const headerItemContainer = document.createElement("th");
			headerItemContainer.setAttribute("scope", "col");

			const headerItemText = document.createElement("h4");
			headerItemText.innerText = headerText;

			headerItemContainer.appendChild(headerItemText);
			return headerItemContainer;
		});

		tableHeader.append(...headers);
		this.element.appendChild(tableHeader);
	};

	generateBody() {
		const tableRows = store.state.library.map(book => new TableRow(book).render());
		this.tableBody.append(...tableRows);
	};

	generatePlaceholderText() {
		const placeholderText = document.createElement("p");
		placeholderText.classList.add("lead");
		placeholderText.innerText = "No Books Added... Yet"

		return placeholderText;
	};

	render() {
		// Headers will be generated independently there's content
		if (!this.hasRenderedOnce) {
			this.generateHeaders();
		};

		// Clear the table body
		this.tableBody.innerHTML = "";

		const storedLibraryHasContent = store.state.library?.length;

		if (!storedLibraryHasContent) {
			const placeholderText = this.generatePlaceholderText();
			this.tableBody.appendChild(placeholderText);
		};

		if (storedLibraryHasContent) {
			this.generateBody();
		};

		this.hasRenderedOnce = true;
		return this.element;
	}
}