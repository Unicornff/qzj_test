import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from "path";
const pathResolve = (dir: string) => path.resolve(__dirname, dir);

// https://cn.vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		// svg插件
		createSvgIconsPlugin({
			iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
			symbolId: 'icon-[dir]-[name]',
		})
	],
	resolve: {
		alias: {
			"@": pathResolve("./src"),
		},
	},
	server: {
		host: '0.0.0.0',
		port: 1008
	}
})
