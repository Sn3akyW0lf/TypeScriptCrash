import { Router } from 'express';

import { Todo } from '../models/todo';

let todos: Todo[] = [];

const router = Router();

router.get('/', (req: any, res: any, next: any) => {
    res.status(200).json({ todos: todos })
});

router.post('/todo', (req: any, res: any, next: any) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);

    res.status(201).json({ message: 'Added todo', todo: newTodo, todos: todos });
});

router.put('todo/:todoId', (req: any, res: any, next: any) =>{
    const tid = req.params.todoId;
    const todoInd = todos.findIndex(todoItem => todoItem.id === tid);

    if (todoInd >= 0) {
        todos[todoInd] = { id: todos[todoInd].id, text: req.body.text };
        return res.status(200).json({ message: 'Updated todo', todos: todos });
    }
    res.status(404).json({ message: 'No Todo with this ID!' })
});

router.delete('/todo/:todoId', (req: any, res: any, next: any) => {
    todos = todos.filter(todoItem => todoItem.id !== req.params.todoId);

    res.status(200).json({ message: 'Deleted Todo', todos: todos });
});

export default router;