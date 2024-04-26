<template>
  <div id="app">
    <TodoList />
    <AddTodoForm />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TodoList from './components/TodoList.vue';
import AddTodoForm from './components/AddTodoForm.vue';
import { useTodoStore } from './store/store';


export default defineComponent({
  components: {
    TodoList,
    AddTodoForm,
  },
  setup() {
    const todoStore = useTodoStore();
    const todoCount = todoStore.todoCount;

    return {
      todoCount,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>