import { Server } from "@hapi/hapi";
import { createTodo, deleteTodo, getTodos, updateTodo } from "./api/todos";
import Joi from 'joi'

const todoPayload = Joi.object({
    name: Joi.string().required(),
    date: Joi.string().required(),
    completed: Joi.boolean().required()
})

const todoParams = Joi.object({
    todoId: Joi.number().required()
})

const routes = (server: Server) => {
    server.route({
        method: 'GET',
        path: '/todos',
        handler: getTodos
    });

    server.route({
        method: 'POST',
        path: '/todos',
        handler: createTodo,
        options: {
            validate: {
                payload: todoPayload
            }
        }
    });

    server.route({
        method: 'PUT',
        path: '/todos/{todoId}',
        handler: updateTodo,
        options: {
            validate: {
                params: todoParams,
                payload: todoPayload
            }
        }
    });

    server.route({
        method: 'DELETE',
        path: '/todos/{todoId}',
        handler: deleteTodo,
        options: {
            validate: {
                params: todoParams
            }
        }
    });
}

export default routes