<template>
  <div>
    <h2>Todo List</h2>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="deleteTodo(index)">Hapus</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useTodoStore } from '../store/store';

export default defineComponent({
  setup() {
    const todoStore = useTodoStore();

    return {
      todos: todoStore.todos,
      deleteTodo: todoStore.deleteTodo,
    };
  },
});
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul{
  display: flex;
  align-items: center;
  flex-direction: column;
}
  li {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    border: solid;
    border-radius: 5px;
    margin-top: 5px;
    width: 300px;
  }

  button{
    background-color:#FF204E;
    color: white;
    border-radius: 5px;
  }

  button:hover{
    background-color: #A0153E;
  }
</style>