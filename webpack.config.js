module.exports = {
    entry: './src/main.js',
    output: {
        publicPath: 'http://localhost:8090/assets',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony'}
        ]
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
