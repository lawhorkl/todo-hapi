import Knex from 'knex'
import createDbConnection from '..'

export interface Todo {
    name: string,
    date: string,
    completed: boolean
}

export class TodoRepository {
    private knex = createDbConnection()

    async createTodo(todo: Todo): Promise<void> {
        await this.knex.raw('INSERT INTO Todos (name, date, completed)')
    }

    // async updateTodo(todoId: number, todo: Todo): Promise<Todo> {

    // }

    // async deleteTodo(todoId: number): Promise<boolean> {

    // }
}

export default new TodoRepository()