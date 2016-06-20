var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: {
		"bundle":'./src/entry.jsx',
		"polyfill":'./src/polyfill.js'
	},
	output: {
	    path: __dirname+'/dist/',
		filename: '[name].js'
	},
	resolve: {
	    extensions: ['', '.js', '.jsx','css','es6']
	},
 	module: {
        loaders: [
        	 {test: /(\.jsx|\.js|\.es6)$/, loader: "babel",query: {
		        presets: ['es2015','react']
		     }}
			,{ test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader?root=..")}
			,{test: /.(png|jpg)$/, loader: 'url-loader?limit=10000'}
        ]
    },
    plugins: [
    	//new ExtractTextPlugin("style.[contenthash:9].css"),//发布时打开
		new ExtractTextPlugin("style.css")
		//,new HtmlWebpackPlugin({
		//	template:"./app/index.html"
		//	//path:__dirname+'/dist/'
		//})
	]
};