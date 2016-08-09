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
        extensions:['','.js','.jsx'],
        moduleDirectories:['node_modules']
    },
    module:{
        loaders:[
            {
                test:/\.jsx?/,
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
        ]
    },
     plugins: [
        new CommonsChunkPlugin('init.js')
      ]
};




