const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  ['wallet-lib']);

module.exports = {
  output: {
    uniqueName: "mfe1"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      name: "mfe1",
      filename: "remoteEntry.js",
      exposes: {
        './Module': './projects/mfe1/src/app/cryptos/cryptos.module.ts',
      },

      // For hosts (please adjust)
      // remotes: {
      //     "shell": "shell@http://localhost:5000/remoteEntry.js",

      // },

      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
        "@angular/material/core": { singleton: true, strictVersion: true },
        "@angular/material/icon": { singleton: true, strictVersion: true },
        "@angular/material/input": { singleton: true, strictVersion: true },
        "@angular/material/card": { singleton: true, strictVersion: true },
        "@angular/material/button": { singleton: true, strictVersion: true },
        "@angular/material/sidenav": { singleton: true, strictVersion: true },
        // "@angular/material/": { singleton: true, strictVersion: true },


        ...sharedMappings.getDescriptors()
      }

    }),
    sharedMappings.getPlugin(),
  ],
};
