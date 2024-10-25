<template>
	<div class="filter">
		<p class="filter__title"> {{ name }} </p>
		<div class="select-wrapper">
			<div 
				class="select-placeholder"
				@click="changeSelectMode">
				<p class="select-placeholder__value"> {{ selectedItem }} </p>
				<img 
					:class="`select-placeholder__arrow select-placeholder__arrow_${selectMode}`" 
					src="~assets/images/arrow.svg"
					/>
			</div>
			<div 
				v-if="selectMode"
				:class="`filter__select filter__select_${selectMode}`" >
				<div
					v-for="(option, optionNum) in options"
					:key="`option_num-${optionNum}`"
					class="filter__option"
					@click="chancheValue(option)">
					{{ option.name }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { store } from '~/store';

export default {
	props: {
		id: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: ''
		},
		options: {
			type: Array,
			default: [],
		}
	},
	data() {
		return {
			selectedItem: this.options[0].name,
			selectMode: false,
		}
	},
	methods: {
		changeSelectMode() {
			this.selectMode = !this.selectMode
		},
		chancheValue(option) {
			this.selectedItem = option.name
			store.commit('setFilter', {type: this.id, value: option.id})
			this.selectMode = false
		}
	},
	mounted() {
		store.commit('setFilter', {type: this.id, value: this.options[0].id})
	}
}
</script>

<style scoped lang="scss">
.filter {
	display: inline-flex;
	flex-direction: column;
	gap: 6px;

	&__title {
		font-size: 12px;
		line-height: 18px;
		font-family: 'SF Pro Display';
		margin-left: 16px;
		color: #4F4F4F;
		letter-spacing: 0.4px;
	}

	&__select {
		display: inline-flex;
		border-radius: border-box;
		flex-direction: column;
		align-items: center;
		position: absolute;
		transform: translate(0, 45px);
		z-index: 2;
		overflow: hidden;
		height: 0px;
	}

	&__select_true {
		animation: scroll_down 0.5s;
		height: initial;
	}

	&__option {
		user-select: none;
		width: 288px;
		height: 40px;
		box-sizing: border-box;
		background-color: #F2F2F2;
		padding: 0px 16px;
		display: inline-flex;
		align-items: center;
		font-family: 'SF Pro Display';
		font-size: 14px;
		letter-spacing: 0.4px;
		cursor: pointer;
		transition: all 0.5s;
	}
}

.select-placeholder {
	display: inline-flex;
	width: 288px;
	height: 40px;
	box-sizing: border-box;
	justify-content: space-between;
	align-items: center;
	background-color: #F2F2F2;
	padding: 0px 16px;
	user-select: none;
	cursor: pointer;

	&__value {
		font-family: 'SF Pro Display';
		font-size: 14px;
		line-height: 21px;
		letter-spacing: 0.4px;
	}

	&__arrow {
		width: 24px;
		height: 24px;
	}
	&__arrow_true {
		transform: rotate(-180deg);
	}
	&__arrow_false {
		transform: rotate(0deg);
	}
}

.select-wrapper {
	display: inline-flex;
	flex-direction: column;
}

@keyframes scroll_down {
	from {
		max-height: 0px;
	}
	to {
		max-height: 100px;
	}
}

@media screen and (hover: hover) {
	.filter__option:hover {
		background-color: #EB5757;
		color: white;
	}
}
</style>