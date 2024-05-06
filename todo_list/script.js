document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var todoInput = document.getElementById('todo-input');
    var todoText = todoInput.value;

    if (todoText!= '') {
        var li = document.createElement('li');
        var todoTextNode = document.createTextNode(todoText);
        var deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        deleteButton.addEventListener('click', function() {
            li.parentNode.removeChild(li);
        });

        li.appendChild(todoTextNode);
        li.appendChild(deleteButton);

        document.getElementById('todo-list').appendChild(li);
        todoInput.value = '';
    }
});
