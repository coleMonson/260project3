<template>
<div class="wrapper">

  <div class="search">
    <i class="fas fa-search"></i>
    <input v-model="searchText" placeholder="search by title" />
  </div>

  <div class="filter">
    <div class="sort-by">Sort By: </div>
    <button v-bind:class="{ active: sortByTitle }" class="filter-button" @click="sortTitle()">Title</button>
    <button v-bind:class="{ active: sortByAlbum }" class="filter-button" @click="sortAlbum()">Album</button>
    <button v-bind:class="{ active: sortByLength }" class="filter-button" @click="sortLength()">Length</button>
  </div>

  <div class="tracks">
    <div class="track" v-for="track in tracks" :key="track.id">
      <div class="art">
        <img :src="'/images/albums/'+track.art">
      </div>
      <div class="track-name"> {{ track.title }} </div>
      <div class="track-album"> {{ track.album }} </div>
      <div class="track-length"> {{ track.length }} </div>
      <button class="buy" @click="addToCart(track)">BUY 99&cent;</button>
    </div>
  </div>

</div>
</template>


<script>
export default {
  name: 'TrackList',
  data() {
    return {
      searchText: '',
      sortByTitle: false,
      sortByAlbum: false,
      sortByLength: false,
    }
  },
  computed: {
    tracks() {
      return this.$root.$data.tracks.filter(track => track.title.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
  methods: {
    addToCart(track) {
      this.$root.$data.cart.push(track);
    },
    sortTitle() {
      this.sortByTitle = true;
      this.sortByAlbum = false;
      this.sortByLength = false;

      function compare(a, b) {
        if (a.title > b.title) return 1;
        if (b.title > a.title) return -1;
        return 0;
      }
      this.$root.$data.tracks.sort(compare);
    },
    sortAlbum() {
      this.sortByTitle = false;
      this.sortByAlbum = true;
      this.sortByLength = false;

      function compare(a, b) {
        if (a.album > b.album) return 1;
        if (b.album > a.album) return -1;
        return 0;
      }
      this.$root.$data.tracks.sort(compare);
    },
    sortLength() {
      this.sortByTitle = false;
      this.sortByAlbum = false;
      this.sortByLength = true;

      function compare(a, b) {
        if (a.length > b.length) return 1;
        if (b.length > a.length) return -1;
        return 0;
      }
      this.$root.$data.tracks.sort(compare);
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

.search {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 100px;
  background-color: white;
  padding: 10px 20px;
  margin-bottom: 30px;
}

.search input {
  border: 0px;
  font-size: 1.6em;
  color: #44324A;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
}

.search i {
  color: black;
  font-size: 1.2em;
  margin-right: 10px;
}

button {
  border: none;
  background-color: inherit;
  font-size: 3.4em;
}

.filter-button {
  background-color: #71567D;
  font-size: 1em;
  border-radius: 100px;
  margin: 0 10px;
  padding: 10px 20px;
}

.filter-button:hover {
  background-color: #D95585;
}

.active {
  background-color: #D95585;
}

.filter {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.6em;
  margin-bottom: 20px;
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

.buy:hover {
  background-color: #56BFA1;
}

.track:hover .buy {
  color: white;
}

@media only screen and (max-width: 500px) {
  .search {
    font-size: .8em;
  }

  .filter {
    font-size: 1em;
  }

  .filter-button {
    margin: 0 4px;
  }

  .sort-by {
    margin-right: 4px;
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
    width: 175px;
  }

  .track {
    font-size: 1.2em;
  }

  .track-id {
    width: 20px;
  }
}
</style>
