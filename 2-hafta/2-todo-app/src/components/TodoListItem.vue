<template>
    <!-- <li v-for="todoItem in todoList" :key="todoItem.id" class="d-flex justify-content-between align-items-center">
        <span>{{ todoItem.text }}</span>
        <button @click="deleteItem(todoItem)" class="sm red">Sil</button>
    </li> -->
    <li class="d-flex justify-content-between align-items-center">
        <span>{{ item.text }}</span>
        <button @click="deleteItem(item)" class="sm red">Sil</button>
    </li>
</template>

<script>
export default {
    props: ['item'],
    inject: ["deleteItem"]
};
</script>
