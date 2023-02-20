// alert('Hello World!');
$('#wd-todo').append(`
    <div class="container">
        <h1>Todo example</h1>
    </div>
`);

import TodoList from "./TodoList.js";

export default [
    'Buy milk',
    'Pickup the kids',
    'Walk the dog'
];


$('#wd-todo').append(`
    <div class="container">
        <h1>Todo example</h1>
        ${TodoList()}
    </div>
`);

