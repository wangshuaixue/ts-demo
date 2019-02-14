let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.ts',
    devtool:'inline-source-map', //开发模式 
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude: /node_modules/
            },
            // {   test: /\.tsx?$/, 
            //     use: 'tslint-loader', 
            //     enforce: 'pre', 
            //     exclude: /node_modules/
            // },
        ],
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(path.resolve(__dirname), 'index.html'),
            inject: 'body'
        }),
        
    ],
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 8081
    },
    resolve :{
        extensions:['.tsx','.ts','.js']
    },
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}