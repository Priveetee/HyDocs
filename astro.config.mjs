// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	vite: {
		server: {
			proxy: {
				'/meili': {
					target: 'http://localhost:7701',
					rewrite: (path) => path.replace(/^\/meili/, ''),
					changeOrigin: true,
				},
			},
		},
	},
});
