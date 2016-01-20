// module.exports = {
//     entry: "./app/assets/frontend/main.jsx",
//     output: {
//         path: __dirname + "/app/assets/javascripts",
//         filename: "bundle.js"
//     },
//     resolve: {
//       extensions: ['', '.js', '.jsx']
//     },
//     module: {
//       loaders: [
//         { test: /\.jsx?$/, loader: 'babel-loader' }
//       ]
//     }
// };


module.exports = {
    entry: "./app/assets/frontend/main.jsx",
    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    }
};
