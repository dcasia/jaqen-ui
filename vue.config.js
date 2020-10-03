const path = require('path')

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                implementation: require('sass'),
                prependData: `@import "./scss/global.scss";`,
                sassOptions: {
                    includePaths: [
                        path.resolve(__dirname, 'src')
                    ]
                }
            }
        }
    },
    outputDir: 'distribution',
    devServer: {
        proxy: {
            '/dashboard-api': {
                target: `http://docker.localhost`,
                changeOrigin: true,
                secure: false,
                // pathRewrite: { '^/rest': '' },
                logLevel: 'debug'
            }
        }
    }
}
