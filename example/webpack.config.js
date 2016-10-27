module.exports = {
    entry : './main.js',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 4444
    },
    module: {
        loaders : [
            {
                test: /\.js$/,  //All .js files
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.png/,
                loader: "file-loader"
            },
            {
                test: /\.svg/,
                loader: "svg-loader"
            },
            {
                test: /\.styl/,
                loader: "style-loader!css-loader!stylus-loader"
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
        ]
    }
}