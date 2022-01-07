import { Request, ResponseToolkit } from "@hapi/hapi";
import { Todo } from "../db/repos/TodoRepository";


export const getTodos = (
    request: Request, 
    handler: ResponseToolkit
) => {
    return {
        "test": "123"
    }
}

export const createTodo = (
    request: Request,
    handler: ResponseToolkit
) => {
    const todo = request.payload as Todo

    return todo
}

export const updateTodo = (
    request: Request,
    handler: ResponseToolkit
) => {
    const todoId = request.params.todoId as number
    const todo = request.payload as Todo

    return {
        todoId,
        ...todo
    }
}

export const deleteTodo = (
    request: Request,
    handler: ResponseToolkit
) => {
    const todoId = request.params.todoId as number

    return {
        todoId
    }
}