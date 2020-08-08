const HtmlWebPackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(s*)css$/,
				use: [ miniCss.loader, 'css-loader', 'sass-loader' ]
			}
		]
	},
	plugins: [
		new miniCss({
			filename: 'style.css'
		}),
		new HtmlWebPackPlugin({
			template: './index.html',
			filename: './index.html'
		})
	]
};
