'use strict';

let webpack = require('webpack');
let pkg = require('./package.json');
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;


let ver = pkg.version;

let config = {
	entry: {
		fdutil: './lib.js',
	},
	output: {
        library: 'Fdutil',
        libraryTarget: 'umd', // 兼容各种模块化写法
		filename: 'dist/[name].js'
	},
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loaders: ['babel?presets[]=react&presets[]=es2015']
		}, {
			test: /\.less$/,
			loader: 'style!css!less'
		},
		{ 
			test: /\.svg$/, 
			loader: "url-loader?limit=10000&mimetype=image/svg+xml" 
		},{
			test: /\.(png|jpg|gif)$/,
			// loader: 'url?limit=8192&name=img/[hash:8].[name].[ext]'
			loader: 'url' // 用到的图片全部转base64塞到js
		}
		]
	},
	plugins: [
		// new webpack.optimize.UglifyJsPlugin({ minimize: true }),
	
	
	]
}

module.exports = config