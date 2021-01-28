var app = new Vue({
  el: '#list',
  data: {
    todos: ['HTML5', 'CSS', 'JQUERY', 'JAVASCRIPT', 'SQL', 'PHP'],
    todosDelete: []
  },
  methods: {
    removeTodo(index){
      this.todosDelete.push(this.todos[index]);
      this.todos.splice(index, 1);
    }
  }
});
