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

export default {
	components: {
		StoreFilters,
		StoreProductCard,
	},
	computed: {
		productCards() {
			console.log(store.state.productCards)
			return store.state.productCards
		},
	},
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
</style>