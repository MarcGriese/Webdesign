@echo off

:: Create a new folder called example
mkdir example
cd example

:: Execute commands in the new folder
node -v
npm init -y
npm i --save-dev webpack webpack-cli webpack-dev-server
npm i --save-dev babel-loader @babel/preset-env @babel/core @babel/plugin-transform-runtime @babel/preset-react @babel/eslint-parser @babel/runtime @babel/cli
npm i --save-dev eslint eslint-config-airbnb-base eslint-plugin-jest eslint-config-prettier path
npm i react react-dom

:: Create necessary directories and files
mkdir public
type nul > public\index.html
mkdir src
type nul > src\app.js
type nul > index.js
type nul > webpack.config.js
type nul > .babelrc

:: Add content to app.js, index.js, webpack.config.js, and .babelrc files
echo.import React from "react"; >> src\app.js
echo. >> src\app.js
echo.const App = () => { >> src\app.js
echo.    return ( >> src\app.js
echo.        <h1> >> src\app.js
echo.            Welcome to React App that's built using Webpack and Babel separately >> src\app.js
echo.        </h1> >> src\app.js
echo.    ) >> src\app.js
echo.} >> src\app.js
echo. >> src\app.js
echo.export default App >> src\app.js

echo.import React from "react"; >> index.js
echo.import reactDom from "react-dom"; >> index.js
echo.import App from "./src/App"; >> index.js
echo. >> index.js
echo.reactDom.render(<App />, document.getElementById("root")); >> index.js

echo.const path = require("path"); >> webpack.config.js
echo.module.exports={ >> webpack.config.js
echo.    mode: "development", >> webpack.config.js
echo.    entry: "./index.js", >> webpack.config.js
echo.    output: { >> webpack.config.js
echo.        path: path.resolve(__dirname, "public"), >> webpack.config.js
echo.        filename: "main.js" >> webpack.config.js
echo.    }, >> webpack.config.js
echo.    target: "web", >> webpack.config.js
echo.    devServer: { >> webpack.config.js
echo.        port: "9500", >> webpack.config.js
echo.        static: ["./public"], >> webpack.config.js
echo.        open: true, >> webpack.config.js
echo.        hot: true, >> webpack.config.js
echo.        liveReload: true >> webpack.config.js
echo.    }, >> webpack.config.js
echo.    resolve: { >> webpack.config.js
echo.        extensions: ['.js','.jsx','.json'] >> webpack.config.js
echo.    }, >> webpack.config.js
echo.    module:{ >> webpack.config.js
echo.        rules: [ >> webpack.config.js
echo.            { >> webpack.config.js
echo.                test: /\.(js|jsx)$/, >> webpack.config.js
echo.                exclude: /node_modules/, >> webpack.config.js
echo.                use:  'babel-loader' >> webpack.config.js
echo.            } >> webpack.config.js
echo.        ] >> webpack.config.js
echo.    } >> webpack.config.js
echo.} >> webpack.config.js

echo.{ >> .babelrc
echo.    "presets": [ >> .babelrc
echo.        "@babel/preset-env", >> .babelrc
echo.        "@babel/preset-react" >> .babelrc
echo.    ], >> .babelrc
echo.    "plugins": [ >> .babelrc
echo.        "@babel/plugin-transform-runtime" >> .babelrc
echo.    ] >> .babelrc
echo.} >> .babelrc

:: Add scripts to package.json
echo.>> package.json
echo."scripts": { >> package.json
echo.    "start": "webpack-dev-server .", >> package.json
echo.    "build": "webpack ." >> package.json
echo.} >> package.json

:: Run npm commands
npm run build
npm start
