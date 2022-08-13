const app = Vue.createApp({
  data() {
    return {
      myClass: "text-green bg-orange",
      counter: 0,
    };
  },
  created() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  updated() {
    if (this.counter > 3) {
      this.counter = 0;
    }
  },
  computed: {
    boxClass() {
      return {
        "text-red": this.counter === 3,
        "text-green": this.counter === 0,
        "text-orange": this.counter === 1,
        "text-blue": this.counter === 2,
      };
    },
  },
}).mount("#app");
