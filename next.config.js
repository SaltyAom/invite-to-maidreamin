const path = require("path")
const withStylus = require("@zeit/next-stylus")

module.exports = withStylus({
	exportPathMap: () => {
		return {
			"/": {
				page: "/"
			}
		}
	},
	target: "serverless",
	webpack(config, options) {
		;(config.resolve.alias["react"] = "preact/compat"),
			(config.resolve.alias["react-dom"] = "preact/compat"),
			(config.resolve.alias["react-ssr-prepass"] = "preact-ssr-prepass"),
			(config.resolve.alias["react-render-to-string"] =
				"preact-render-to-string"),
			(config.resolve.alias["assets"] = path.join(
				__dirname,
				"static/assets"
			)),
			(config.resolve.alias["css"] = path.join(__dirname, "static/css")),
			(config.resolve.alias["components"] = path.join(
				__dirname,
				"components"
			)),
			(config.resolve.alias["static"] = path.join(__dirname, "static")),
			(config.resolve.alias["stores"] = path.join(__dirname, "stores")),
			(config.resolve.alias["icon"] = path.join(
				__dirname,
				"components/icon"
			))

		return config
	}
})
