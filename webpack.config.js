var webpack = require('webpack');
module.exports = {
	entry: "./app/App.js",
	output: {
		filename: "public/js/bundle.js"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['react']
			}
		}]
	}
}
