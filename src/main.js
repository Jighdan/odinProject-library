import store from "./store/index";
import Table from "./components/Table/index";
import Form from "./components/Form";

// Fetch stored state
store.fetchSavedState();

const instanceOfTable = new Table();
const instanceOfForm = new Form();

instanceOfTable.render();
instanceOfForm.render();
