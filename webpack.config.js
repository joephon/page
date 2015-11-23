module.exports = {
	entry: [
		__dirname + '/src/jsx/app.jsx',
    __dirname + '/src/css/animate.min.css',
		__dirname + '/src/css/default.sass',
    __dirname + '/src/css/nav.sass',
    __dirname + '/src/css/app.sass',
    __dirname + '/src/css/home.sass',
    __dirname + '/src/css/profile.sass',
	],
	output: {
		path: __dirname + '/lib/',
		filename: 'app.js',
	},
  module: {
      loaders: [
      		{test: /\.js$/, exclude: /node_modules/,loader: "babel",query:{presets:['es2015']}},
          {test: /\.jsx$/, exclude: /node_modules/,loader: "babel",query:{presets:['react','es2015']}}, // 编译jsx文件
          {test: /\.css$/, loader: 'style!css'}, //编译css文件
          {test: /\.(jpg|png|gif)$/, loader: "url?limit=8192"},  // <=8k的图片使用base64内联, 其他的继续用图片
          {test: /\.(png|jpg|gif)$/, loader: 'file-loader'}, // 图片独立(兼容<IE8的browser)
          {test: /\.sass$/, loader: "style!css!sass?indentedSyntax"} // 编译sass文件
      ]
  }
}