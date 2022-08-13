<template>
    <!-- <small class="mt-2 d-flex justify-content-end text-right green">{{ todoList.length }} adet todo vardır</small> -->
    <small class="mt-2 d-flex justify-content-end text-right green">{{ itemCount }} adet todo vardır</small>
</template>

<script>
export default {
    props: ['itemCount'],
};
</script>
