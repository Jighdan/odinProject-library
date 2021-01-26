import ComponentBase from "./ComponentBase";
import store from "./../store/index";

export default class Form extends ComponentBase {
	constructor() {
		super({ store, element: document.getElementById("newBookForm") });
		this.hasRenderedOnce = false;
	};

	addEvents() {
		this.element.addEventListener("submit", (event) => {
			event.preventDefault();

			const formElements = this.element.elements;
			const bookData = {
				title: formElements.title.value,
				author: formElements.author.value,
				// Converting string to boolean -> 
				//	https://stackoverflow.com/questions/263965/how-can-i-convert-a-string-to-boolean-in-javascript
				status: (formElements.status.value === "true")
			};

			// Clear form elements values
			formElements.title.value = "";
			formElements.author.value = "";

			store.commit("addBook", { bookData });
		});
	};

	render() {
		if (!this.hasRenderedOnce) {
			this.addEvents();
		};

		this.hasRenderedOnce = true;
		return this.element;
	};
};