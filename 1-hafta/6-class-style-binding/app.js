const app = Vue.createApp({
    data() {
        return {
            showBorder: false,
            redBg: false,
            boxClass: 'border red',
        };
    },
    computed: {
        boxClasses() {
            return { border: this.showBorder, red: this.redBg };
        },
    },
});
app.mount('#app');
