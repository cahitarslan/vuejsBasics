<template>
    <div class="form-area card border p-2">
        <div class="mb-3">
            <label for="title" class="form-label">Başlık</label>
            <input type="text" v-model="userData.title" class="form-control" id="title" placeholder="vue3...">
        </div>
        <div class="mb-3">
            <label for="url" class="form-label">URL</label>
            <input type="text" v-model="userData.url" class="form-control" id="url" placeholder="https://...">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Açıklama</label>
            <textarea class="form-control" v-model="userData.description" id="description" placeholder="Bu var ya..." rows=" 3"></textarea>
        </div>
    </div>

    <div class="d-flex justify-content-end align-items-center mt-3">
        <button class="btn btn-sm btn-secondary me-2" @click="$router.push({ name: 'HomePage' })">İptal</button>
        <button class="btn btn-sm btn-primary" @click="onSave">Kaydet</button>
    </div>
</template>
<script>

export default {
    data() {
        return {
            userData: {
                title: null,
                url: null,
                description: null
            }
        }
    },
    methods: {
        onSave() {
            console.log(this.userData);
            this.$appAxios.post('/bookmarks', this.userData).then(save_response => {
                console.log("save_response", save_response);
                this.resetData();
                this.$router.push("/");
            })
        },
        resetData() {
            Object.keys(this.userData).forEach(key => (this.userData[key] = null));
        }
    }
}
</script>