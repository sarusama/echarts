const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	entry: {
		app: path.resolve(__dirname, "../src/index.js")
	},
	output: {
		path: path.resolve(__dirname, "../docs"),
		filename: "[name].js",
		publicPath: "/"
	},
	resolve: {
		alias: {
	        'vue$': 'vue/dist/vue.esm.js',
			"@": path.join(__dirname, "../src")
		},
	    extensions: ['.js', '.vue', '.json', ".css"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html",
			inject: true,
			filename: path.resolve(__dirname, "../docs/index.html")
		}),
		new VueLoaderPlugin()
	],
	module: {
		rules: [
		    {
		    	test: /\.vue$/,
		    	loader: "vue-loader"
		    },
		    {
		    	test: /\.js$/,
		    	loader: "babel-loader"
		    },
		    {
		    	test: /\.css$/,
		    	loader: ["vue-style-loader", "style-loader", "css-loader"]
		    }
		]
	},
	devServer: {
		hot: true,
		host: "0.0.0.0",
		port: 8086,
		contentBase: path.join(__dirname, "../public")
	}
};
