import { createStore } from 'vuex'

import products from '../assets/items.json'
import materials from '../assets/materials.json'

export const store = createStore({
	state () {
	  return {
		breadcrumbs: [
			'Главная',
			'Системы хранения',
			'Комплекты стеллажных систем'
		],
		materials: materials,
		directions: [{name: 'Цена по возрастанию', id: 'up'}, {name: 'Цена по убыванию', id: 'down'}],
		filters: {material: '', direction: ''},
		getFilteredCards:
			function() {
				const filters = this.filters
				let cards = JSON.parse(JSON.stringify(products))
				switch (filters.direction) {
					case 'up':
						cards.sort((product_1, product_2) => 
							product_1.price.current_price - product_2.price.current_price
						)
						break
					case 'down':
						cards.sort((product_2, product_1) => 
							product_1.price.current_price - product_2.price.current_price
							)
				}				
				return cards.filter((elem) => `${elem.material}` === filters.material)
		  	}
	  	}
	},
	mutations: {
		setFilter(state, filter) {
			state.filters[filter.type] = filter.value
			state.filteredCards = state.getFilteredCards()
		}
	}
})
