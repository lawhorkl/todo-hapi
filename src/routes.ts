import { Server } from "@hapi/hapi";

const routes = (server: Server) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, hapi) => {
            return 'Hello World'
        }
    });
}

export default routes