import ComponentBase from "../ComponentBase";
import store from "../../store/index";

export default class TableRowDelete extends ComponentBase {
	constructor(rowId) {
		super({ store, element: document.createElement("button") });
		this.rowId = rowId;
		this.hasRenderedOnce = false;

		this.element.setAttribute("type", "button");
		this.element.classList.add("btn", "btn-danger");
		this.element.innerText = "Delete";
	};

	addEvents() {
		this.element.addEventListener("click", () => {
			store.commit("removeBook", { bookId: this.rowId });
		});
	};

	render() {
		if (!this.hasRenderedOnce) {
			this.addEvents();
		};

		this.hasRenderedOnce = true;
		return this.element;
	}
};