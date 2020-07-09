const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    another: "./src/js/another.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              '**/*.DS_Store'
            ],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/monday.html",
      inject: true,
      chunks: ["index"],
      filename: "monday.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/tuesday.html",
      inject: true,
      chunks: ["index"],
      filename: "tuesday.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/wednesday.html",
      inject: true,
      chunks: ["index"],
      filename: "wednesday.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/thursday.html",
      inject: true,
      chunks: ["index"],
      filename: "thursday.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/friday.html",
      inject: true,
      chunks: ["index"],
      filename: "friday.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/saturday.html",
      inject: true,
      chunks: ["index"],
      filename: "saturday.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/sunday.html",
      inject: true,
      chunks: ["index"],
      filename: "sunday.html",
    }),
  ],
};
