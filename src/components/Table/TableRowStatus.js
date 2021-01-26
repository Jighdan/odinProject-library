// For more information on styling -> https://getbootstrap.com/docs/5.0/components/buttons/#outline-buttons
import ComponentBase from "../ComponentBase";
import store from "../../store/index";

export default class TableRowStatus extends ComponentBase {
	constructor (rowId, status) {
		super({ store, element: document.createElement("button") });
		this.rowId = rowId;
		this.status = status;
		this.hasRenderedOnce = false;

		this.element.setAttribute("type", "button");
		this.element.classList.add("btn");
	};

	addEvents() {
		this.element.addEventListener("click", () => {
			this.element.classList.remove("btn-outline-secondary", "btn-outline-success");
			store.commit("updateBookStatus", { bookId: this.rowId });
		});
	};

	render() {
		if (!this.hasRenderedOnce) {
			this.addEvents();
		};

		if (!this.status) {
			this.element.classList.add("btn-outline-secondary");
			this.element.innerText = "Not Read";
		};

		if (this.status) {
			this.element.classList.add("btn-outline-success");
			this.element.innerText = "Read";
		};

		this.hasRenderedOnce = true;
		return this.element;
	};
};