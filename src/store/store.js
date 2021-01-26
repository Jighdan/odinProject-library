import EventManager from "../plugins/eventManager";
import state from "./state";
import mutations from "./mutations";

export default class Store {
	constructor() {
		this.state = state;
		this.mutations = mutations;
		this.events = new EventManager();
		this.localStoreKey = "odinProject-library-state";
	};

	commit (mutationName, payload, notifyEvents=true) {
		if (typeof this.mutations[mutationName] !== "function") {
			console.error(`Mutation ${mutationName} doesn't seem to exist`);
			return false;
		};

		this.mutations[mutationName](this.state, payload);

		if (notifyEvents) {
			this.events.notify("stateChange", this.state);
		};

		localStorage.setItem(this.localStoreKey, JSON.stringify(this.state.library));
	};

	fetchSavedState() {
		const localStorageState = localStorage.getItem(this.localStoreKey);
		if (localStorageState) {
			this.state.library = JSON.parse(localStorageState);
		};
	};
};