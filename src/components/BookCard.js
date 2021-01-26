export default class BookCard {
	constructor(bookData) {
		this.data = bookData;
		this.element = document.createElement("article");
		this.element.classList.add("card", "card-container");
	};

	addDataToElement() {
		const elementBody = document.createElement("div");
		elementBody.classList.add("card-body");

		const elementBodyTitle = document.createElement("h5");
		elementBodyTitle.classList.add("card-title");
		elementBodyTitle.innerText = this.data?.title;

		const elementBodySubtitle = document.createElement("h6");
		elementBodySubtitle.classList.add("card-subtitle", "mb-2", "text-muted");
		elementBodySubtitle.innerText = this.data?.author;

		const elementBodyText = document.createElement("p");
		elementBodyText.classList.add("card-text");
		elementBodyText.innerText = this.data?.summary;

		elementBody.append(elementBodyTitle, elementBodySubtitle, elementBodyText);
		this.element.appendChild(elementBody);
	};

	render() {
		this.addDataToElement();
		return this.element;
	};
};