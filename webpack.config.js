var autoprefixer = require('autoprefixer');
module.exports = {
	entry: {
     p: [
  		__dirname + '/src/jsx/app.jsx',
  	 ],
     m: [
      __dirname + '/src/jsx/m.app.jsx',
     ]
  },
	output: {
		path: __dirname + '/lib/',
		filename: '[name].app.js',
	},
  module: {
      loaders: [
      		{test: /\.js$/, exclude: /node_modules/,loader: "babel",query:{presets:['es2015']}},
          {test: /\.jsx$/, exclude: /node_modules/,loader: "babel",query:{presets:['react','es2015']}}, // 编译jsx文件
          {test: /\.css$/, loader: 'style!css!postcss'}, //编译css文件 和autoprefixer自动补全前缀
          {test: /\.(jpg|png|gif)$/, loader: "url?limit=8192"},  // <=8k的图片使用base64内联, 其他的继续用图片
          {test: /\.(png|jpg|gif)$/, loader: 'file-loader'}, // 图片独立(兼容<IE8的browser)
          {test: /\.sass$/, loader: "style!css!postcss!sass?indentedSyntax"} // 编译sass文件
      ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
}