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
		<div class="product-card__button-area button-area">
			<img 
				v-if="!sold"
				class="product-button__image product-button__image_basket" 
				src="~assets/images/basket.svg"
				@click="buyProduct"/>
			<img 
				v-if="sold"
				class="product-button__image product-button__image_sold" 
				src="~assets/images/sold.svg"
				/>
			<img 
				v-if="!liked"
				class="product-button__image product-button__image_favorite" 
				src="~assets/images/favorite.svg"
				@click="likeProduct"/>
			<img 
				v-if="liked"
				class="product-button__image product-button__image_sold" 
				src="~assets/images/sold.svg"
				/>
		</div>
	</div>
</template>

<script>
import nuxtStorage from 'nuxt-storage';

export default {
	props: {
		description: {
			type: Object,
			default: () => { }
		},
	},
	data() {
		return {
			sold: nuxtStorage.localStorage.getData('inBasket') ?
					nuxtStorage.localStorage.getData('inBasket').includes(this.description.id)
					: false,
			liked: nuxtStorage.localStorage.getData('inFavorite') ?
				nuxtStorage.localStorage.getData('inFavorite').includes(this.description.id)
				: false,
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
	},
	methods: {
		buyProduct() {
			this.sold = true
			const inBasket = nuxtStorage.localStorage.getData('inBasket')
			if (!inBasket.includes(this.description.id)) {
				inBasket.push(this.description.id)
				nuxtStorage.localStorage.setData('inBasket', inBasket)
			}
		},
		likeProduct() {
			this.liked = true
			const inFavorite = nuxtStorage.localStorage.getData('inFavorite')
			if (!inFavorite.includes(this.description.id)) {
				inFavorite.push(this.description.id)
				nuxtStorage.localStorage.setData('inFavorite', inFavorite)
			}
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
		letter-spacing: 2%;
	}

	&__image {
		margin-top: 9px;
		letter-spacing: 2%;
		width: 238px;
		height: 237px;
		align-self: center;
	}

	&__discount {
		width: 81px;
		height: 24px;
		position: absolute;
		margin-top: 8px;
		margin-left: -12px;
		background-color: #EB5757;
		color: #FFFFFF;
		font-family: 'SF Pro Display';
		font-size: 14px;
		font-weight: 500;
		line-height: 18.2px;

		display: inline-flex;
		justify-content: center;
		align-items: center;
		letter-spacing: 0.3px;
	}

	&__button-area {
		position: absolute;
		align-self: flex-end;
		justify-self: end;
		margin-top: 312px;
		display: inline-flex;
		gap: 11px;
	}
}

.product-button{
	&__image {
		width: 36px;
		height: 36px;
		cursor: pointer;
	}
}

.old-price {
	color: #888888;
	text-decoration: line-through;
}
</style>