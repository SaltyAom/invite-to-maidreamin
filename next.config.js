const withCSS = require("@zeit/next-css")
const withFonts = require("next-fonts");

module.exports = withCSS(
    withFonts({
        target: 'serverless',
        webpack (config, options) {
            config.resolve.alias['react'] = 'preact/compat'
            config.resolve.alias['react-dom'] = 'preact/compat'
            config.resolve.alias['components'] = 'components'
            config.resolve.alias['css'] = 'static/css'
            config.resolve.alias['static'] = 'static'

            return config
        }
    })
);