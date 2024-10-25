// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	 app: {
		head: {
		title: 'Каталог',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
		]
		},
	},
  css: ["./assets/master.css"]
})
