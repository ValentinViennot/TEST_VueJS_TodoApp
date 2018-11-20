<template>
  <div class="addContainer">
      <input class="addInput" type="text" v-model="newTodo.text" @keyup.enter="handleAdd" />
      <button class="addButton" @click="handleAdd">Add</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ToDoModel from '../models/ToDoModel';

@Component
export default class CreateNewTodo extends Vue {
  newTodo: ToDoModel = CreateNewTodo.getEmptyTodo();

  handleAdd() {
    if (this.isTodoEmpty()) return;
    this.$emit('new-todo', this.newTodo);
    this.newTodo = CreateNewTodo.getEmptyTodo();
  }

  private isTodoEmpty() {
    return this.newTodo.text.length === 0;
  }

  static getEmptyTodo() {
    return {
      text: '',
      done: false,
      id: -1
    };
  }
}
</script>

<style scoped>
</style>
