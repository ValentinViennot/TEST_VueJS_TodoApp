<template>
  <div class="todoContainer" @click="toggleDone">
      <div v-if="todo.done" class="todoIsDone true">
          [DONE]
      </div>
      <div v-else class="todoIsDone false">
          [TODO]
      </div>
      <div class="todoText">
      <p>{{ todo.text }}</p>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ToDoModel from '../models/ToDoModel';

@Component
export default class ToDo extends Vue {
  @Prop()
  private todo!: ToDoModel;

  private toggleDone() {
    this.todo.done = !this.todo.done;
  }
}
</script>

<style scoped>
.todoContainer {
  display: block;
  background-color: white;
  cursor: pointer;
  opacity: 0.5;
}
.todoContainer:hover {
  opacity: 1;
}

.todoContainer:nth-child(2n) {
  background-color: whitesmoke;
}

.todoContainer > * {
  display: inline-block;
  margin: 5px;
}

.todoIsDone {
  font-size: 0.5em;
  font-weight: bold;
}

.todoIsDone.true {
  color: green;
}
.todoIsDone.false {
  color: red;
}
</style>
