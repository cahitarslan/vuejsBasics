const app = Vue.createApp({
    data() {
        return {
            title: 'Bu Vue tarafından verilen bir bilgidir..',
            content: 'Lorem ipsum dolor sit amet',
            hobbies: [1, 2, 3, 4, 5],
            personel: {
                name: 'Cahit',
                lname: 'Arslan',
                phone: 'xxxxx',
            },
            details: `<a href="https:www.google.com">Google için tıklayınız.</a>`,
            url: 'https:www.google.com',
            coordX: 0,
            coordY: 0,
            fullName: 'Cahit Arslan',
        };
    },
    methods: {
        updateTitle(title) {
            this.title = title || 'Bu benim yeni mesajım..';
            this.fullName = 'Değiştirildi..';
        },
        updateCoords(e) {
            this.coordX = e.offsetX;
            this.coordY = e.offsetY;
            this.updateTitle(`${this.coordX},${this.coordY}`);
        },
        updateValue(customText, e) {
            console.log(customText, e);
            this.fullName = e.target.value;
        },
    },
}).mount('#app');

// Vue2 Version
// new Vue{
//     el: "#app",
//     data: {}
// }
