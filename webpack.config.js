const path = require("path");

module.exports = {
	entry: "./src/main.js",
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
	module: {
		rules: []
	},
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "script.js"
	}
}