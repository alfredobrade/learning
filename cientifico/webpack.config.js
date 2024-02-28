const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //punto de entrada a nuestro js
    entry: './src/index.js',
    output: {
        //donde se va a crear el directorio con el archivo
        path: path.resolve(__dirname, 'dist'),
        //nombre del archivo compilado
        filename: 'main.js' 
    },
    resolve: {
        // extensiones con las que vamos a trabajar
        extensions: ['.js'],
    },
    module: {
        //reglas que se pasan en un array
        rules: [
            {
                //estructura de babel
                test: /\.js?$/, //riyex no se que
                exclude: /node_modules/, //excluir node modules
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin([
            {
                //como voy a inyectar un valor a un archivo html
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
        ])
    ]
}