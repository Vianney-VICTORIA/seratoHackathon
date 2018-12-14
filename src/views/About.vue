<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="container mt-3 mt-sm-5">
      <input class="form-control" placeholder="New item" v-model="newTodo" @keydown.enter="addTodo">
      <ul class="list-unstyled">
        <li v-for="todo in todos" :class="{ completed: todo.completed }">
          <input type="checkbox" v-model="todo.completed">
          {{ todo.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'About',
    data() {
      return {
        newTodo: '',
        todos: []
      }
    },
    methods: {
      addTodo() {
        this.todos.push({ text: this.newTodo, completed: false });
        this.newTodo = '';
      },
    },
    mounted() {
      // console.log('App mounted!');
      if (localStorage.getItem('todos')) this.todos = JSON.parse(localStorage.getItem('todos'));
    },
    watch: {
      todos: {
        handler() {
          // console.log('Todos changed!');
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deep: true,
      },
    }
  }
</script>

<style lang="scss" scoped>
  .completed { text-decoration: line-through; }
</style>