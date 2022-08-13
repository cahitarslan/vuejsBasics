const app = Vue.createApp({
  data() {
    return {
      memberList: [
        { id: 1, name: "Cihan Özen" },
        { id: 2, name: "Ramazan Sancar" },
        { id: 3, name: "Enes Taha Sarı" },
        { id: 4, name: "Gökhan Kandemir" },
        { id: 5, name: "Defne Kandermir" },
        { id: 6, name: "Beek X (Berk)" },
        { id: 7, name: "Asy" },
        { id: 8, name: "Onur Şen" },
        { id: 9, name: "Emirhan Çifçi" },
        { id: 10, name: "Tamer Karalürt" },
      ],
    };
  },
}).mount("#app");
