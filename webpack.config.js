var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry: ['./src/main.js'],
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	},
	module: {
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					postcss: [require('postcss-cssnext')()]
					// other vue-loader options go here
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: 'images/[name].[ext]?[hash]'
				}
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'cssPath': './src/assets/css'
		},
		extensions: ['*', '.vue', '.js']
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		port: 8084, //访问端口
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
}

if(process.env.NODE_ENV === 'production') {
	module.exports.devtool = 'module-source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}