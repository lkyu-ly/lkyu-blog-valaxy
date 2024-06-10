// Valaxy 配置文件
import { defineValaxyConfig } from 'valaxy';
import { addonComponents } from 'valaxy-addon-components';
import { addonWaline } from 'valaxy-addon-waline';
import type { UserThemeConfig } from 'valaxy-theme-yun';

// add icons what you will need
const safelist = ['i-ri-home-line'];

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
	// site config see site.config.ts

	theme: 'yun',

	modules: {
		rss: {
			enable: true,
		},
	},

	themeConfig: {
		banner: {
			enable: true,
			title: '翎钰的小窝',
			cloud: {
				enable: true,
			},
		},

		bg_image: {
			enable: true,
			// 可以使用本地文件，放到public后在url直接填写文件名
			url: 'https://pic.imgdb.cn/item/5fd234093ffa7d37b3b4e5e1.jpg',
			dark: 'https://pic.imgdb.cn/item/5fd234093ffa7d37b3b4e5e1.jpg',
			// blur: 30px , 设置背景模糊程度
			opacity: 0.6,
		},

		fireworks: {
			enable: true,
			colors: ['#66A7DD', '#3E83E1', '#214EC2'],
		},

		// sidebar: {
		//   //src: "/js/sidebar.js",
		//   bg_image: "https://pic.imgdb.cn/item/5fd2473e3ffa7d37b3cb7445.jpg",
		//   dark_bg_image: "https://pic.imgdb.cn/item/5fd23f433ffa7d37b3c2156b.png",
		//   bg_position: "bottom 0rem center",
		//   tagcloud: {
		//     enable: true,
		//     amount: 20,
		//   },
		// },

		notice: {
			enable: true,
			content: '欢迎你来到我的小站 >_<',
		},

		pages: [
			{
				name: '我的小伙伴们',
				url: '/links/',
				icon: 'i-ri-genderless-line',
				color: 'dodgerblue',
			},
			{
				name: '我的纸片人老婆们',
				url: '/girls/',
				icon: 'i-ri-women-line',
				color: 'hotpink',
			},
		],

		footer: {
			since: 2020,
			beian: {
				enable: false,
				icp: '',
			},
		},
	},

	unocss: { safelist },

	addons: [
		addonWaline({
			serverURL: 'https://waline.lkyu.cf',
			comment: true,
			emoji: [
				'https://unpkg.com/@waline/emojis@1.2.0/bilibili',
				'https://unpkg.com/@waline/emojis@1.2.0/soul-emoji',
				'https://unpkg.com/@waline/emojis@1.2.0/weibo',
				'https://unpkg.com/@waline/emojis@1.2.0/qq',
			],
			search: true,
			reaction: false,
			lang: 'zh-CN',
		}),
		addonComponents(),
	],

	markdown: {
		lineNumbers: true,
		/**
		 * KaTeX options
		 * @see https://katex.org/docs/options.html
		 */
		katex: {
			strict: false,
			displayMode: true,
			colorIsTextColor: true,
		},
	},
});
