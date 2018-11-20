<template>
  <div id="app">
    <h1>
      ToDo list 
    </h1>
    <div class="todosContainer">
      <ToDo v-for="todo of todos" v-bind:key="todo.id" v-bind:todo="todo" />
    </div>
    <CreateNewTodo v-on:new-todo="handleNewTodo" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ToDo from './components/ToDo.vue';
import CreateNewTodo from './components/CreateNewTodo.vue';
import ToDoModel from '@/models/ToDoModel';

@Component({
  components: {
    ToDo,
    CreateNewTodo
  }
})
export default class App extends Vue {
  todos: ToDoModel[] = require('./assets/todos.json');

  handleNewTodo(newTodo: ToDoModel) {
    this.todos.push(newTodo);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.todosContainer {
  width: 50%;
  min-width: 300px;
  margin: auto;
}
</style>
