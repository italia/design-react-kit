const nodeExternals = require('webpack-node-externals');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {

    config.externals = nodeExternals()

    // Return the altered config
    return config;


};
