<template>
  <nav class="breadcrumbs">
    <template v-for="page, pageNum in pagesExceptLast" :key="`page-breadcrumb_num-${pageNum}`">
      <p class="breadcrumbs__page-name breadcrumbs__page-name_previous"> {{ page }} </p>
      <p class="breadcrumbs__separator"> / </p>
    </template>
      <p class="breadcrumbs__page-name breadcrumbs__page-name_current"> {{ currentPage }} </p>
  </nav>
</template>

<script lang="ts">
import { store } from '~/store';

export default {
	data() {
		return {
			pages: store.state.breadcrumbs 
		}
	},
	computed: {
		pagesExceptLast(): string[] {
			const pagesExceptLast = this.pages.slice(0, -1)
			return pagesExceptLast
		},
		currentPage(): string {
			const currentPage: string = this.pages.at(-1) || ''
			return currentPage
		}
	}
}
</script>

<style scoped lang="scss">
.breadcrumbs {
	display: inline-flex;
	flex-direction: row;
	gap: 1em;

	&__page-name {
		font-size: 16px;
	}
	&__page-name_previous {
		color: #727783;
	}
	&__separator {
		color: #727783;
	}
}

@media screen and (width < 820px) {
	.breadcrumbs {
		display: none;
	}
}
</style>