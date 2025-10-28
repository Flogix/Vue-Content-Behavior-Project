const appData = {
  data() {
    return {
      facts, // from data.js
      index: 0,
      isFlipped: false,
      menuOpen: false
    };
  },
  methods: {
    move(change) {
      if (this.facts[this.index + change]) {
        this.index += change;
        this.isFlipped = false;
      }
    }
  }
};

// monte l'app sur tout le body, pas seulement #app
Vue.createApp(appData).mount("body");
