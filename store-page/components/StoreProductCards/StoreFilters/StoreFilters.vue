<template>
	<section class="store-filters">
		<StoreFilter
			v-for="filter, filterNum in filters"
			:key="`filter_num-${filterNum}`"
			:name="filter.name"
			:options="filter.options" />
	</section>
</template>

<script>
import StoreFilter from './StoreFilter.vue';

export default {
	components: {
		StoreFilter,
	},
	data() {
		return {
			filters: [
				{ name: 'Сортировать по', options: ['Цена по возрастанию', 'Цена по убыванию'] },
				{ name: 'Материал', options: ['Металл', 'Дерево'] }
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.store-filters {
	display: inline-flex;
	gap: 24px;
}
</style>