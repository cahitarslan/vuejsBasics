const app = Vue.createApp({
    data() {
        return {
            value: 0,
            result2: null,
        };
    },
    computed: {
        result() {
            return this.value === 33 ? 'Tamamlandı' : 'Henüz tamamlanmadı';
        },
    },
    watch: {
        value(v) {
            if (v === 33) {
                this.result2 = 'Tamamlandı';
            } else {
                this.result2 = 'Henüz tamamlanmadı';
            }
        },
        result() {
            setTimeout(() => {
                this.value = 0;
            }, 2000);
        },
    },
});
app.mount('#exercise');
