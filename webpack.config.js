var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry:{
        'app1':'./app/app1.jsx',
        'app':'./app/app.jsx'
    },
    
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'[name].js'
    },
    resolve:{
        extensions:['.jsx','.js',''],
        moduleDirectories:['node_modules']
    },
    module:{
        preLoaders:[
            {

                test:/\.js$/,
                loader:'eslint-loader?{rules:{semi:0}}',
                exclude:/node_modules/
            }
        ],
        loaders:[
            {
                test:/\.jsx$/,
                include:path.join(__dirname,'/app'),
                exclude: /(node_modules)/,
                loader:'babel-loader',
                query:{
                    presets:['es2015','react'],
                    cacheDirectory:true
                }
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader?modules',
                exclude: /(node_modules)/
            },
            {
                test:/\.(png|jpg)$/,
                loader:'url-loader?limit=8192',
                exclude: /(node_modules)/
            }
        ],
        noParse:[

        ]
    },
    plugins: [
        new CommonsChunkPlugin({
            name:['init','init1'],
            minChunks:2,
            chunks:['app1','app']//从entry-output的指定文件中提取公共.
        }),
        new webpack.DefinePlugin({
            __DEBUG__:true
        })
    ],
    eslint:{
        configFile:path.join(__dirname,'.eslintrc.json')
    }
};




