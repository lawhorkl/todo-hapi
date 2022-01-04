import Hapi from '@hapi/hapi'
import { Server } from '@hapi/hapi'
import routes from './routes'

'use strict'

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    })

    routes(server)

    await server.start()
    console.log('Server is running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
    console.log(err)

    process.exit(1)
})

init()