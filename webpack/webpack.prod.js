const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('./../package.json');


const prodConfig = {
    mode: 'production',
    entry: './src/index.js',
    output:{
        //Here should be path to actually domen name
      //  publicPath: '',
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'adminApp',
            filename: 'remoteEntry.js',
            exposes: {
                './AdminApp': './src/bootstrap'
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
}

module.exports = merge(commonConfig, prodConfig);
