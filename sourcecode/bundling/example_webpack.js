context: rootDir, 
entry: {
    di: srcDir + scriptsDir + "/di.js",
    ui: srcDir + scriptsDir + "/ui.js"
}, output: {
    path: distDir + scriptsDir, filename: "[name].js"
}, module: {
    loaders: [ { test: /\.js$/, 
        exclude: /(node_modules|tmp)/,
        loader: 'babel-loader' }]
}, plugins: [
    new HtmlWebpackPlugin({
        title: 'Index',
        filename: '/index.html', // Rel. path from "output" dir
        template: srcDir + '/index.html' // Src file
    }),
    new webpack.optimize.UglifyJsPlugin({  
        compress: { warnings: false } 
})]