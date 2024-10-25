import { createStore } from 'vuex'
import data from '../assets/items.json'

export const store = createStore({
	state () {
	  return {
		breadcrumbs: [
			'Главная',
			'Системы хранения',
			'Комплекты стеллажных систем'
		  ],
		productCards: data
	  }
	},
	mutations: {
		setProducts(state, products) {
			state.productCards = products
		}
	}
})
