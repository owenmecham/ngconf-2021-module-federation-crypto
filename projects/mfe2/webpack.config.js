const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "mfe2"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      name: "mfe2",
      filename: "remoteEntry.js",
      exposes: {
        './Chart1': './projects/mfe2/src/app/chart1/chart1.component.ts',
        './Chart2': './projects/mfe2/src/app/chart2/chart2.component.ts',
        './Chart3': './projects/mfe2/src/app/chart3/chart3.component.ts',
        './Chart4': './projects/mfe2/src/app/chart4/chart4.component.ts',
      },

      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
      }

    }),
  ],
};
