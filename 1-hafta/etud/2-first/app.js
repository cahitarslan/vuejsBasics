const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {
    getResult() {
      return this.counter > 0 ? "Pozitif" : this.counter < 0 ? "Negatif" : "Sıfır";
    },
    getResult2() {
      return this.counter2 > 0 ? "Pozitif" : this.counter2 < 0 ? "Negatif" : "Sıfır";
    },
  },
}).mount("#app");
