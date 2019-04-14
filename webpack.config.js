const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devServer: {
        contentBase: `${__dirname}/dist`,
        compress: true,
        port: 9000
    },
};
