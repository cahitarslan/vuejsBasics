const app = Vue.createApp({
    data() {
        return {
            title: 'Vue.js Bootcamp 1.gün',
            content: 'Lorem ipsum dolor sit amet..',
            eduflow: {
                title: "Google'a gitmek için tıklayınız",
                target: '_blank',
                url: 'https://www.google.com',
                alt: 'google-web-site',
            },
            owner: 'Coordinates',
            coords: {
                x: 0,
                y: 0,
            },
        };
    },
    methods: {
        changeTitle(pTitle) {
            this.title = pTitle;
        },
        updateCoords(message, event) {
            // console.log(message, event.x, event.y);
            this.changeTitle(`${event.x},${event.y}`);
            this.coords = {
                x: event.x,
                y: event.y,
            };
        },
    },
}).mount('#app');

/* Vue2 Version
new Vue({
    el : "#app",
    data: {

    }
}) */
