const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main',
        vendors: './src/vendors'
    },
    output: {
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                options: {
                    loaders: {

                        scss: ExtractTextPlugin.extract({
                            use: ['css-loader?minimize', 'postcss-loader', 'sass-loader'],
                            fallback: 'vue-style-loader'
                        }),

                        sass: ExtractTextPlugin.extract({
                            use: ['css-loader?minimize', 'postcss-loader', 'sass-loader'],
                            fallback: 'vue-style-loader'
                        }),

                        css: ExtractTextPlugin.extract({
                            use: ['css-loader', 'postcss-loader'],
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            // {
            //     test: /iview\/.*?js$/,
            //     loader: 'babel-loader'
            // },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?minimize', 'postcss-loader'],
                    fallback: 'style-loader'
                })
            },

            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    use: ['postcss-loader', 'sass-loader'],
                    fallback: 'style-loader'
                }),
                exclude: /node_modules/
            },

            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=2048&name=static/[name].[hash:8].[ext]'
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new CleanWebpackPlugin(
            ['dist/*'], 　 //匹配删除的文件
            {
                root: __dirname, //根目录
                verbose: true, //开启在控制台输出信息
                dry: false //启用删除文件
            }
        )
    ]
};