import { defineStore } from 'pinia';

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
  getters: {
    todoCount() {
      return this.todos.length;
    },
  },
});