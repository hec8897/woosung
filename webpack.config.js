const path = require('path');

module.exports = {
  // enntry file
  entry: './src/app.js',
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [ path.resolve(__dirname, 'src/js')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:{
            presets:['@babel/preset-env','es2015']
          },
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader','css-loader','sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader'],
      },
      { 
        test: /\.(png|jpg|gif)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    context: path.resolve(__dirname, "src/"),
                    outputPath: 'image/',
                    useRelativePaths: true
                }
            }
        ] 
    }
    ]
  },
  devtool: 'source-map',
  mode: 'development'
};