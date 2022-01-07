import Knex from 'knex'

const create = () => Knex({
    client: 'mssql',
    connection: {
        user: 'todo-app',
        password: 'P@ssw0rd!',
        server: '10.2.8.6',
        database: 'TodoTrainingDB'
    }
})

export default create