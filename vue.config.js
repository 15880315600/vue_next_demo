module.exports = {
	publicPath: './', // 根路径
	outputDir: 'dist', // 构建输出目录
	assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)
	lintOnSave: false, // 是否开启eslint保存检测,有效值（true||false||error)
	devServer: {
		port: 8000,
		proxy: {
			// 配置跨域
			'/wypapi': {
				target: 'http://39.108.184.152:9001',
				ws: true, // 是否跨域
				changeOrigin: true,
				// 重写地址
				pathRewrite: {
					'^/wypapi': ''
				}
			}
		}
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					require('postcss-pxtorem')({ // 把px单位换算成rem单位
						rootValue: 37.5, // vant官方使用的是37.5
						selectorBlackList: ['vant', 'mu'], // 忽略转换正则匹配项
						propList: ['*']
					})
				]
			}
		}
	},
	configureWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			// 为生产环境修改配置...
		} else {
			// 为开发环境修改配置...
		}
	}
}
