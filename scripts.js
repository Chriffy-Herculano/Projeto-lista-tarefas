// var todos = [
//     {
//         text: 'Aprender HTML, CSS e Javascript',
//         done: false,
//     },
//     {
//         text: 'Aprender o básico de Vue JS',
//         done: true,
//     }
// ];

const todosApp = {

    data() {
        return {
            todos: [],
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

                //add no localStorage do browser
                localStorage.setItem("Tarefas", JSON.stringify(this.todos));
            } else {
                alert('Preencha o campo!');
            }
        }, // So sera chamado quando for requisitado
        storeTodos () {
            localStorage.setItem("Tarefas", JSON.stringify(this.todos));
            console.log('Foi');
        }
    }, //Depois de criar a aplicação e antes de abastecer o HTML
    created() {
        this.todos = localStorage.getItem("Tarefas") ? JSON.parse(localStorage.getItem("Tarefas")) : this.todos;
    },
    updated() {
        // Pode ser usado em uma aplicação simples, a cada interação na pagina ele vai ser chamado 
        //localStorage.setItem("Tarefas", JSON.stringify(this.todos));
    },
};

// Inicia a aplicação injetando os dados no HTML
Vue.createApp(todosApp).mount('#app');



