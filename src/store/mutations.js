import generateId from "../plugins/idGenerator";

export default {
	addBook (state, { bookData }) {
		state.library.push({
			id: generateId(),
			data: {
				...bookData
			}
		});
	},

	removeBook (state, { bookId }) {
		const selectedBook = state.library.find(book => book.id === bookId);
		if (selectedBook) {
			const bookIndex = state.library.indexOf(selectedBook);
			state.library.splice(bookIndex, 1);
		};
	},

	updateBookStatus(state, { bookId }) {
		const selectedBook = state.library.find(book => book.id === bookId);
		if (selectedBook) {
			const bookIndex = state.library.indexOf(selectedBook);
			state.library[bookIndex].data.status = !selectedBook.data.status;
		};
	}
};