import pkg from './package'

export default {
	mode: 'universal',

	/*
	 ** Headers of the page
	 */
	head: {
		title: pkg.name,
		meta: [{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: pkg.description
			}
		],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico'
		}, {
			rel: "stylesheet",
			href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
			integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
			crossorigin: "anonymous"
		}]
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: {
		color: '#fff'
	},

	/*
	 ** Global CSS
	 */
	css: [
		'@/assets/scss/base.scss'
	],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@nuxtjs/style-resources'
	],
	styleResources: {
		scss: [
			'assets/scss/base.scss'
		]
	},
	/*
	 ** Axios module configuration
	 */
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	},

	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {}
	}
}
