<template>
	<section class="product-section">
		<StoreFilters />
		<div class="product-section__cards">
			<StoreProductCard 
				v-for="productCard, productNum in productCards"
				:key="`product-card_num-${productNum}`"
				:description="productCard" />
		</div>
	</section>
</template>

<script>
import { store } from '~/store';
import StoreFilters from './StoreFilters/StoreFilters.vue';
import StoreProductCard from './StoreProductCard.vue';
import nuxtStorage from 'nuxt-storage';

export default {
	components: {
		StoreFilters,
		StoreProductCard,
	},
	computed: {
		productCards() {
			return store.state.getFilteredCards()
		},
	},
	mounted() {
		if (!nuxtStorage.localStorage.getData('inBasket')) {
			nuxtStorage.localStorage.setData('inBasket', [])
		}
		if (!nuxtStorage.localStorage.getData('inFavorite')) {
			nuxtStorage.localStorage.setData('inFavorite', [])
		}
	}
}
</script>

<style scoped lang="scss">
.product-section {
	display: inline-flex;
	flex-direction: column;
	gap: 41px;

	&__cards {
		display: inline-grid;
		grid-template-columns: 336px 336px 336px;
		column-gap: 48px;
		row-gap: 40px;
	}
}

@media screen and (width >= 820px) and (width < 1280px) {
	.product-section__cards {
		grid-template-columns: 336px 336px;
	}
}

@media screen and (width < 820px) {
	.product-section__cards {
		grid-template-columns: 336px;
	}
}
</style>