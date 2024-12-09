import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from "path";
import prismjs from 'vite-plugin-prismjs';
const pathResolve = (dir: string) => path.resolve(__dirname, dir);
console.log(process.env.NODE_ENV);

// https://cn.vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		// svg插件
		createSvgIconsPlugin({
			// 指定需要缓存的图标文件夹
			iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
			// 指定symbolId格式
			symbolId: 'icon-[dir]-[name]',
			// 去除svg文件中的下列属性
			svgoOptions: {
				plugins: [
					{
						name: 'removeAttrs',
						params: { attrs: ['class', 'data-name', 'fill', 'stroke'] }
					}
				]
			}
		}),
		// 代码样式
		prismjs({
			languages: ['javascript', 'css', 'html', 'json', 'sass', 'scss', 'md', 'bash', 'shell', 'ts', 'markup'],
			plugins: [
				'toolbar',
				'show-language',
				'copy-to-clipboard',
				'normalize-whitespace',
				'line-numbers',
				'unescaped-markup',
			],
			theme: 'tomorrow',
			css: true
		})
	],
	resolve: {
		alias: {
			"@": pathResolve("./src"),
		},
	},
	// base: process.env.NODE_ENV === 'production' ? './' : '/',
	server: {
		host: '0.0.0.0',
		port: 1008
	}
})
