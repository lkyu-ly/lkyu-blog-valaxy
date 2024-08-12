import { defineConfig } from 'vite';

export default defineConfig({
	optimizeDeps: {
		include: ['@waline/client/component'],
	},
});
