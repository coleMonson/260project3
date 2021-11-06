<template>
<div class="wrapper">
  <div class="tracks">

    <div class="cart-info">
      <div class="cart-items"> Items In Cart: {{ cartItems }} </div>
      <div v-bind:class="{ filler: empty }" class="cart-total"> Total: ${{ cartTotal }} </div>
    </div>

    <div class="track" v-for="track in cart" :key="track.title">
      <div class="art">
        <img :src="'/images/albums/'+track.art">
      </div>
      <div class="track-name"> {{ track.title }} </div>
      <div class="track-album"> {{ track.album }} </div>
      <div class="track-length"> {{ track.length }} </div>
    </div>

  </div>
</div>
</template>


<script>
export default {
  name: 'Cart',
  computed: {
    cart() {
      return this.$root.$data.cart;
    },
    empty() {
      return this.$root.$data.cart.length === 0;
    },
    cartItems() {
      return this.$root.$data.cart.length;
    },
    cartTotal() {
      return Math.round(this.$root.$data.cart.length * 0.99 * 100) / 100;
    }
  },
  methods: {
    removeFromCart(removedProduct) {
      let index = this.$root.$data.cart.findIndex(product => product.id === removedProduct.id);

      if (this.$root.$data.cart[index].quantity > 1) {
        this.$root.$data.cart[index].quantity -= 1;
      } else {
        this.$root.$data.cart.splice(index, 1);
      }
      this.$forceUpdate();
    }
  }
}
</script>


<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px 0;

  font-family: 'Roboto', sans-serif;
  color: white;
  background-color: #44324A;
}

.cart-items {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 3em;
  font-weight: bolder;
  text-align: center;
}

.cart-total {
  margin-bottom: 30px;
  text-align: center;
  font-size: 1.4em;
}

.filler {
  margin-bottom: 300px;
}

.art {
  display: flex;
  align-items: center;
}

.art img {
  height: 40px;
  padding: 0 10px;
}

.track-album {
  font-size: .8em;
  margin-right: 40px;
  color: #E0E0E0;
}

.track {
  display: flex;
  align-items: center;
  padding: 6px 0;
  font-size: 1.4em;

  border-radius: 8px;
}

.track:hover {
  background-color: pink;
  color: #44324A;
}

.track:hover .track-length,
.track:hover .track-id,
.track:hover .track-album {
  color: #6C5075;
}

.track-id {
  width: 30px;
  margin-left: 5px;
  margin-right: 10px;
  text-align: center;
  font-size: .9em;
}

.track-length {
  margin-left: auto;
  margin-right: 10px;
  font-size: .9em;
}

.track-name {
  width: 420px;
  margin-right: 10px;
}

.album-year,
.track-id,
.track-length {
  color: #E0E0E0;
}

.buy {
  font-size: .8em;
  background-color: #D95585;
  border-radius: 6px;
  margin-right: 8px;
  padding: 2px 6px;
}

@media only screen and (max-width: 500px) {
  .cart-info {
    font-size: .8em;
  }

  .cart-items {
    margin-top: 0px;
  }

  .art img {
    height: 35px;
    width: 35px;
  }

  .track-album {
    visibility: collapse;
    width: 0;
    margin: 0 0;
    font-size: 0;
  }

  .track-name {
    width: 240px;
  }

  .track {
    font-size: 1.2em;
  }

  .track-id {
    width: 20px;
  }
}
</style>
