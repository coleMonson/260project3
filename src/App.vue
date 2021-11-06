<template>
<div id="app">
  <div class="menu">
    <router-link style="text-decoration: none;" to="/">
      <img class="logo" src="/images/flamingo-logo.png">
    </router-link>
    <router-link class="albums-link" style="text-decoration: none;" to="/">
      <div class="menu-item albums">
        <i class="fas fa-record-vinyl"></i>
        <div class="menu-label">Albums</div>
      </div>
    </router-link>
    <router-link style="text-decoration: none;" to="/browse">
      <div class="menu-item browse">
        <i class="fas fa-music"></i>
        <div class="menu-label">Tracks</div>
      </div>
    </router-link>
    <router-link style="text-decoration: none;" to="/cart">
      <div class="menu-item cart">
        <i class="fas fa-shopping-cart"></i>
        <div class="menu-label total">{{ cartTotal }}</div>
      </div>
    </router-link>
  </div>
  <router-view />
  <div class="footer">
    <a href="https://github.com/BYU-CS-260-Spring-2021/lab-3b-grocery-store-coleMonson"><i class="github fab fa-github"></i></a>
  </div>
</div>
</template>


<script>
export default {
  created() {
    let id = 1;
    this.$root.$data.albums.forEach(album => {
      album.tracks.forEach(track => {
        this.$root.$data.tracks.push({
          id: id,
          title: track.title,
          album: album.name,
          art: album.art,
          length: track.length
        })
        id += 1;
      })
    })
  },
  computed: {
    cartTotal() {
      return this.$root.$data.cart.length;
    }
  },
}
</script>


<style>
.menu {
  display: flex;
  background-color: #F28D95;
  align-items: center;

  padding: 20px 80px;

  font-family: 'Roboto', sans-serif;
}

.menu-item {
  margin: 0 20px;
  color: white;
  font-size: 2em;
  text-align: center;
}

.menu-label {
  margin-top: 10px;
  font-weight: bold;
  font-size: .8em;
}

.menu-item:hover {
  color: #44324A;
}

.menu i {
  font-size: 1.8em;
}

.albums-link {
  margin-left: auto;
}

.cart {
  position: relative;
  text-align: center;
}

.total {
  position: absolute;
  top: 20%;
  left: 58%;
  color: #F28D95;
  font-size: .9em;
  transform: translate(-50%, -50%);
}

.logo {
  height: 140px;
}


.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  background-color: #44324A;
}

.footer i {
  color: pink;
  font-size: 7em;
}

.footer i:hover {
  color: #D95585;
}

@media only screen and (max-width: 500px) {
  .menu {
    padding: 10px 10px;
  }

  .menu-item {
    margin: 0 8px;
    font-size: 1.2em;
  }

  .menu-label {
    margin-top: 2px;
    font-size: .8em;
  }

  .logo {
    height: 60px;
  }

  .total {
    top: 34%;
  }

  .footer i {
    font-size: 6em;
  }
}
</style>
