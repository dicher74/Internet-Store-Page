<template>
	<section class="store-filters">
		<StoreFilter
			v-for="filter, filterNum in filters"
			:key="`filter_num-${filterNum}`"
			:name="filter.name"
			:id="filter.id"
			:options="filter.options" />
	</section>
</template>

<script>
import { store } from '~/store';
import StoreFilter from './StoreFilter.vue';

export default {
	components: {
		StoreFilter,
	},
	data() {
		return {
			filters: [
				{ name: 'Сортировать по', options: store.state.directions, id: 'direction' },
				{ name: 'Материал', options: store.state.materials, id: 'material' }
			]
		}
	},
}
</script>

<style lang="scss" scoped>
.store-filters {
	display: inline-flex;
	gap: 24px;
}
</style>