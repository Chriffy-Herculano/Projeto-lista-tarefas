var todos = [
    {
        text: 'Aprender HTML, CSS e Javascript',
        done: false,
    },
    {
        text: 'Aprender o básico de Vue JS',
        done: true,
    }
];

const todosApp = {
    data() {
        return {
            todos: window.todos,
            newTodo: {
                done: false
            }
        }
    },
    methods: {
        addTarefa: function() {

            if (this.newTodo.text) {

                this.todos.push(this.newTodo);
                this.newTodo = {
                    done: false
                };
                
            } else {
                alert('Preencha o campo!');
            }
            
        }
    }
};

Vue.createApp(todosApp).mount('#app');

