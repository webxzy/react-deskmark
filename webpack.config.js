var path = require('path');
var webpack = require('webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

var extractCSS = new ExtractTextPlugin('stylesheets/[name].css');


module.exports = {
	entry: {
		app: path.resolve(APP_PATH, 'app.jsx')
	},
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	devtool: 'eval',
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		root: APP_PATH
	},
	module: {
		preLoaders: [{
			test: /\.jsx?$/,
			loaders: ['eslint'],
			include: APP_PATH
		}],
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['babel'],
			include: APP_PATH
		}, {
			test: /\.scss$/,
			loader: extractCSS.extract(['css', 'sass'])
			// loaders: ['style', 'css', 'sass']
		}, {
	        test:/\.(js|jsx)$/,
	        loader:'babel',
	        include:path.join(__dirname, 'src'),
	        query: {
	          plugins: [
	            ["react-transform", {
	              transforms: [{
	                transform:"react-transform-hmr",
	                imports: ["react"],
	                locals: ["module"]
	              }, {
	                "transform":"react-transform-catch-errors",
	                "imports": ["react", "redbox-react"]
	              }]
	            }]
	          ]
	        }
        }]
	},
	plugins: [
		extractCSS,
		new HtmlWebPackPlugin({
			title: 'Deskmark'
		})
	]
}