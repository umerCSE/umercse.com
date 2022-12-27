module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader']
			},
			{
                test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
                type: "asset/resource",
            }
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
};
