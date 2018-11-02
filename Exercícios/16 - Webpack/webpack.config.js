//Arquivo de configuração do webpack - precisa ter esse nome

//Como vai ser um arquivo interpretado pelo Node.js precisamos utilizar
//neste arquivo o sistema de modulos commonsJs que o Node suporta
//nos outros podemos utilizar o sitema de modulos do EcmaScript
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const modoDev = process.env.NODE_ENV !== 'production'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

//exportando toda a configuracao do webpack
module.exports = {
    //modo do webpack (development e production)
    mode: modoDev ? 'development' : 'production',
    //arquivo de entrada onde vai ter os imports para outros modulos/arquivos
    entry: './src/principal.js',
    //definindo manualmente as configurações de saída dos arquivos processsados
    output: {
        //nome do principal arquivo estático gerado
        filename: 'principal.js',
        //diretório onde vai ser colocado a saída dos arquivos processsados
        //__dirname: variável de ambiente do node
        path: __dirname + '/public'
    },
    //define as optimizaçÕes a serem feitas quando o modo for production
    optimization: {
        minimizer: [
            //minifica o JS
            new UglifyJsPlugin({
                //pra rodar mais rápido
                cache: true,
                parallel: true
            }),
            //minifica o CSS
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    //configura o webpack-dev-server
    devServer: {
        //pasta de vai ser servida
        contentBase: "./public",
        //porta
        port: 9000
    },
    //define os plugins a serem usados
    plugins: [
        //instancia o plugin importando
        new MiniCssExtractPlugin({
            //define o nome do arquivo estático que vai ser gerado
            filename: 'style.css'
        })
    ],
    module: {
        //Regras para definir tipos de arquivos e quais loaders vao usar
        rules: [{
            //define todos arquivos com .css
            // test: /\.css$/,

            //define arquivos .sass, .scss ou .css
            test: /\.s?[ac]ss$/,

            //vai usar os loaders...
            use: [
                //MiniCssExtractPlugin.loader é uma propriedade que contém o loader do plugin para processar os arquivos
                //Esse plugin entra em conflito com o 'style-loader', pois não vai ser mais injetado no JS o CSS e sim arquivo separado
                MiniCssExtractPlugin.loader,
                // 'style-loader', //Adiciona CSS a DOM injetando a tag <style> - o CSS é jogado dentro do arquivo JS final, e quando o arquivo é rodado ele cria a tag <style> no head da página pelo JS,
                'css-loader', //Interpreta @import, url() ...,
                'sass-loader',
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }]
    }
}