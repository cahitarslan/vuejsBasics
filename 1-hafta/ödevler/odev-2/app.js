const app = Vue.createApp({
    data() {
        return {
            value: '',
            value2: '',
        };
    },
    methods: {
        showAlert() {
            alert('Bu bir alert..');
        },
        keyDownEvent(event) {
            this.value = event.target.value;
        },
        keyUpEvent(event) {
            this.value2 = event.target.value;
        },
    },
});
app.mount('#exercise');
