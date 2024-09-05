import fastity, { FastifyInstance } from "fastify";

const app: FastifyInstance = fastity(
    { 
        logger: false 
    }
);

app.listen(
    {
        port: 3100,
    },
    () => console.log('Server is running'),
);