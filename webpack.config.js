const webpack = require('webpack');
module.exports = {
    entry:__dirname+'/app.js',
    output:{
        path:__dirname+'/public',
        filename:'bundle.js'
    },
    module:{
            rules:[
                {test:/\.vue$/,loader:'vue-loader'},
            ]
    },

    resolve:{
        extensions:['.js','.vue'],
        alias:{
            'Vue':'vue/dist/vue.js'
        }
    }
}
