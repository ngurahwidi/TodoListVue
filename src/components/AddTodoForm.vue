<template>
  <div>
    <h2>Add Todo</h2>
    <input type="text" v-model="newTodo">
    <button @click="addTodo">Tambah</button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useTodoStore } from '../store/store';

export default defineComponent({
  setup() {
    const todoStore = useTodoStore();
    const newTodo = ref('');

    const addTodo = () => {
      if (newTodo.value.trim() !== '') {
        todoStore.addTodo(newTodo.value);
        newTodo.value = '';
      }
    };

    return {
      newTodo,
      addTodo,
    };
  },
});
</script>

<style scoped>
button{
  background-color: #40679E;
  color: white;
  border-radius: 5px;
}

button:hover{
  background-color: #1B3C73;
}

input{
  border-radius: 5px;
}
</style>