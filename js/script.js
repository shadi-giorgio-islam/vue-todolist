var app = new Vue({
  el: '#list',
  data: {
    todos: ['HTML5', 'CSS', 'JQUERY', 'JAVASCRIPT', 'SQL', 'PHP'],
    todoInput: [],
    todosDelete: []
  },
  created(){
    console.log(this.todos);
  },
  methods: {
    addTodo(){
      this.todos.push(this.todoInput);
    },
    removeTodo(index){
      this.todosDelete.push(this.todos[index]);
      this.todos.splice(index, 1);
    },
    restoreTodo(index){
      this.todos.push(this.todosDelete[index]);
      this.todosDelete.splice(index, 1);
    },
    removeAll(){
      const length = this.todos.length;
      for (let i = 0; i < length; i++) {
        this.todosDelete.push(this.todos[0]);
        this.todos.splice(0, 1);
      }
    },
    restoreAll(){
      const length = this.todosDelete.length;
      for (let i = 0; i < length; i++) {
        this.todos.push(this.todosDelete[0]);
        this.todosDelete.splice(0, 1);
      }
    },
    removeDefinitely(index){
      this.todosDelete.splice(index, 1);
    },
    removeDefinitelyall(index){
      this.todosDelete.splice(index);
    },
    changeTodo(index){
      const change = prompt('Inserisci nuovo to do');
      this.todos.push(change);
      this.todos.splice(index, 1);
    }
  }
});
