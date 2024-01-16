import { defineValaxyConfig } from 'valaxy';
import type { ThemeConfig } from 'valaxy-theme-yun';
import { VitePWA } from 'vite-plugin-pwa';

export default defineValaxyConfig<ThemeConfig>({
	vite: {
		plugins: [VitePWA()],
	},
});
