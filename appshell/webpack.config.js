const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
    entry: "./src/index",
    mode: "development",
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      port: 3001,
    },
    output: {
      publicPath: "auto",
    },
    optimization:{
        chunkIds: "named"
    },
    stats: {
      chunks: true,
      modules: false,
      chunkModules: true,
      chunkOrigins: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 3,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "AppShell",
        remotes: {
          MyAccount: "MyAccount@http://localhost:3004/remoteEntry.js",
          Catalogue: "Catalogue@http://localhost:3002/remoteEntry.js",
          SignIn: "SignIn@http://localhost:3003/remoteEntry.js"
        },
        shared: {
                react: {
                    singleton: true,
                },
                "react-dom": {
                    singleton: true,
                },
                "react-router-dom": {
                    singleton: true
                },
                "@material-ui/core": {
                    singleton: true
                },
                "@material-ui/icons": {
                    singleton: true
                }
            }
        }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };
