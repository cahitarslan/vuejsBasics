<template>
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odit aliquam illo repellat rerum fugit molestias odio eius atque iste est sit perferendis quibusdam, alias iusto quia deleniti aliquid explicabo.</p>
    <input type="text" @keydown.enter="goToDetails">
</template>

<script>
export default {
    methods: {
        goToDetails(e) {
            // alert(e.target.value)
            // this.$router.push(`/detay/${e.target.value}`)
            this.$router.push({
                name: "DetailPage",
                params: {
                    userID: e.target.value
                },
                query: {
                    type: "DetailAuth",
                    user: "Tayfun Erbilen"
                }
            })
        }
    },
}
</script>