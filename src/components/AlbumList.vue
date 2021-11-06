<template>
<div class="wrapper">
  <div class="nav">
    <button class="arrow" @click="moveLeft()"><i class="fas fa-chevron-left"></i></button>
    <div class="side-album art">
      <img :src="'/images/albums/'+leftAlbum.art">
    </div>
    <div class="center-album art">
      <img :src="'/images/albums/'+currentAlbum.art">
    </div>
    <div class="side-album art">
      <img :src="'/images/albums/'+rightAlbum.art">
    </div>
    <button class="arrow" @click="moveRight()"><i class="fas fa-chevron-right"></i></button>
  </div>

  <div class="album-info">
    <div class="album-name"> {{ currentAlbum.name }} </div>
    <div class="album-year"> {{ currentAlbum.year }} </div>
  </div>
  <div class="tracks">
    <div class="track" v-for="track in currentAlbum.tracks" :key="track.id">
      <div class="track-id"> {{ track.id }} </div>
      <div class="track-name"> {{ track.title }} </div>
      <div class="track-length"> {{ track.length }} </div>
      <button class="buy" @click="addToCart(track, currentAlbum)">BUY 99&cent;</button>
    </div>
  </div>

</div>
</template>


<script>
export default {
  name: 'AlbumList',
  props: {
    albums: Array
  },
  data() {
    return {
      currentID: 9,
      leftID: 8,
      rightID: 0,
    }
  },
  computed: {
    currentAlbum() {
      return this.$root.$data.albums[this.currentID];
    },
    leftAlbum() {
      return this.$root.$data.albums[this.leftID];
    },
    rightAlbum() {
      return this.$root.$data.albums[this.rightID];
    },
  },
  methods: {
    addToCart(track, album) {
      this.$root.$data.cart.push({
        title: track.title,
        album: album.name,
        art: album.art,
        length: track.length
      })
    },
    moveLeft() {
      this.currentID = (this.currentID - 1 + 10) % 10;
      this.leftID = (this.leftID - 1 + 10) % 10;
      this.rightID = (this.rightID - 1 + 10) % 10;
    },
    moveRight() {
      this.currentID = (this.currentID + 1 + 10) % 10;
      this.leftID = (this.leftID + 1 + 10) % 10;
      this.rightID = (this.rightID + 1 + 10) % 10;
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;

  padding: 50px 0;

  font-family: 'Roboto', sans-serif;
  color: white;
  background-color: #44324A;
}

.nav {
  display: flex;
  align-items: center;
}

button {
  border: none;
  background-color: inherit;
  font-size: 3.4em;
}

.arrow:hover {
  color: #F28D95;
}

.art {
  margin: 0 15px;
}

.side-album img {
  width: 250px;
  height: 250px;
}

.center-album img {
  width: 300px;
  height: 300px;
}

.album-name {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 3em;
  font-weight: bolder;
  text-align: center;
}

.album-year {
  margin-bottom: 30px;
  text-align: center;
  font-size: 1.4em;
}

.track {
  display: flex;
  align-items: center;
  padding: 8px 0;
  font-size: 1.4em;

  border-radius: 8px;
}

.track:hover {
  background-color: pink;
  color: #44324A;
}

.track:hover .track-length,
.track:hover .track-id {
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

.buy:hover {
  background-color: #56BFA1;
}

.track:hover .buy {
  color: white;
}

@media only screen and (max-width: 500px) {
  .side-album {
    visibility: collapse;
    width: 0;
    height: 0;
  }

  .side-album img {
    width: 0;
    height: 0;
  }

  .center-album img {
    width: 220px;
    height: 220px;
  }

  .art {
    margin: 0 6px;
  }

  .track-name {
    width: 180px;
  }

  .track {
    font-size: 1.2em;
  }

  .track-id {
    width: 20px;
  }

  .album-info {
    font-size: .9em;
  }
}
</style>
