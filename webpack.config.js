const path = require("path")


module.exports = {
	mode: 'development',
	entry: [path.resolve(__dirname, "./client/index")],
	output: {
		path: path.resolve(__dirname, "static/js"),
		filename: "bundle.js",
		publicPath: "/js/"
	},
	module:{
		rules: [{
			test: /\.jsx?$/,
	        include: [
	          path.resolve(__dirname, "client")
	        ],
	        loader: "babel-loader",
	        options: {
	        	presets: ["env", "react"],
	        	plugins: ["transform-decorators-legacy"]
	        },
		}]
	}
}