const { merge } = require('webpack-merge');
const packageJson = require('./../package.json');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    output:{
        publicPath:'http://localhost:8090/'
    },
    devServer: {
        port: 8090,
        historyApiFallback: {
            index: '/index.html'
        },
    },
    target: 'web',
    plugins: [
        new ModuleFederationPlugin({
            name: 'adminApp',
            filename: 'remoteEntry.js',
            exposes: {
                './AdminApp': './src/bootstrap.js'
            },
            shared: {
                ...packageJson.dependencies,
                 react: { singleton: true, eager: true, requiredVersion: packageJson.dependencies.react },
                 "react-dom": { singleton: true, eager: true, requiredVersion: packageJson.dependencies["react-dom"]
            },
            "prop-types": { singleton: true, eager: true, requiredVersion: packageJson.dependencies["prop-types"]},
            }
        }),
        
    ]
};

module.exports = merge(commonConfig, devConfig);