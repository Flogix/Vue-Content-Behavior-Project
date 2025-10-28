const appData = {
  data() {
    return {
      facts, 
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

Vue.createApp(appData).mount("body");
