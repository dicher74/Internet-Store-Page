<template>
	<div class="product-card">
		<div v-if="discountMode" class="product-card__discount"> Скидка </div>
		<img class="product-card__image" :src="`product-images/${imageUrl}`" />
		<div class="product-card__descriprion">
			<p class="product-card__code"> {{ code }} </p>
			<p class="product-card__name"> {{name}} </p>
			<div class="product-card__prices">
				<p 	v-if="oldPrice"	class="old-price"> {{ oldPrice }}₽ </p>
				<p v-if="currentPrice" class="current-price"> {{ currentPrice }}₽ </p>
			</div> 
		</div>
	</div>
</template>

<script>
export default {
	props: {
		description: {
			type: Object,
			default: () => { }
		}
	},
	computed: {
		imageUrl() {
			return this.description.image.url
		},
		code() {
			return this.description.code
		},
		name() {
			return this.description.name
		},
		oldPrice() {
			return this.description.price['old_price']
		},
		currentPrice() {
			return this.description.price['current_price']
		},
		discountMode() {
			return this.oldPrice && (this.oldPrice > this.currentPrice)
		}
	}
}
</script>

<style lang="scss" scoped>
.product-card {
	width: 336px;
	height: 352px;
	display: inline-flex;
	flex-direction: column;
	border: 1px solid #EEEEEE;
	gap: 23px;
	padding: 0 12px;
	box-sizing: border-box;


	&__description {
		display: inline-flex;
		flex-direction: column;
	}

	&__name {
		margin-top: 5.38px;
		font-size: 16px;
		font-weight: 500;
		letter-spacing: 0.02em;
		line-height: 22.4px;
	}

	&__code {
		font-size: 10px;
		color: #888888;
		height: 15.17px;
	}

	&__prices {
		display: inline-flex;
		gap: 9.14px;
		margin-top: 10px;
		font-size: 16px;
	}

	&__image {
		width: 238px;
		height: 237px;
		align-self: center;
	}

	&__discount {
		width: 81px;
		height: 24px;
		position: absolute;
		margin-top: 5px;
		margin-left: -12px;
		background-color: #EB5757;
		color: #FFFFFF;
		font-family: 'SF Pro Display';

		display: inline-flex;
		justify-content: center;
		align-items: center;
		letter-spacing: 1%;
	}
}

.old-price {
	color: #888888;
	text-decoration: line-through;
}
</style>