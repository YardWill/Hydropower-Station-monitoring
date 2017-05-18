// webpack.config.js
const webpack = require('webpack');
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    entry: {
        index: ['./fontend/es6/main.js'],
        vendor: ['vue'],
    },
    output: {
        path: path.join(__dirname, '/public/javascripts'),
        filename: '[name].js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'css-loader!style-loader' },
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.js$/, loader: 'babel-loader', include: [resolve('src'), resolve('test')], query: { presets: ['es2015'] } }
        ],
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue$: 'vue/dist/vue.esm',
            '@': resolve('src'),
        },
    },
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        // 提取公共文件
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('dev') },
        }),
        // 如需压缩js文件，将以下注释去掉
        // new webpack.optimize.UglifyJsPlugin({
        //   compress: {
        //     warnings: false
        //   }
        // })
    ],
};
