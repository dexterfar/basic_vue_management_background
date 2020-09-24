const path = require("path");


function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    // webpack的相关配置
    configureWebpack: {
        entry: "./src/main.js",
        resolve: {
            extensions: [".js", ".vue", ".json", ".ts"],
            alias: {
                "@": resolve("src")
            }
        },
        module: {
            rules: [
                {
                    test: /\.(html)(\?.*)?$/,
                    use: "vue-html-loader"
                }
            ]
        },
        //公共资源合并
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: "all",
                        test: /node_modules/,
                        name: "vendor",
                        minChunks: 1,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 100
                    },
                    common: {
                        chunks: "all",
                        test: /[\\/]src[\\/]js[\\/]/,
                        name: "common",
                        minChunks: 2,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 60
                    },
                    styles: {
                        name: "styles",
                        test: /\.(sa|sc|c)ss$/,
                        chunks: "all",
                        enforce: true
                    },
                    runtimeChunk: {
                        name: "manifest"
                    }
                }
            }
        },
        //性能警告修改
        performance: {
            hints: "warning",
            //入口起点的最大体积 整数类型（以字节为单位）
            maxEntrypointSize: 50000000,
            //生成文件的最大体积 整数类型（以字节为单位 300k）
            maxAssetSize: 30000000,
            //只给出 js 文件的性能提示
            assetFilter: function (assetFilename) {
                return assetFilename.endsWith(".js");
            }
        }
    },
    chainWebpack: config => {
        // 压缩图片
        config.entry('main').add('babel-polyfill') // main是入口js文件
        config.module
            .rule("images")
            .use("image-webpack-loader")
            .loader("image-webpack-loader")
            .options({
                bypassOnDebug: true
            })
            .end();
        // 分析插件
        // config
        //   .plugin("webpack-bundle-analyzer")
        //   .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin)
        //   .end();
    },
    //打包输出路径
    outputDir: "dist/web",
    productionSourceMap: false,
    // 构建时开启多进程处理 babel 编译
    parallel: require("os").cpus().length > 1,
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        // extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    //开发服务器http代理
    devServer: {
        // host: "localhost",
        // https: false,
        // hotOnly: false,
        proxy: {
            "/api": {
                // target: "http://localhost:3100/api",  //127.0.0.1  / 本地
                target: "http://localhost:8060/",  //localhost  / 测试
                // target: "http://localhost:3100/api",  //localhost / 正式
                changeOrigin: true, //是否跨域
                pathRewrite: {
                     "^/api": ""
                }
            }
        }
    },
    // 第三方插件配置
    pluginOptions: {
    }
};
