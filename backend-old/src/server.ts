import fastity, { FastifyInstance } from "fastify";
import { professorRoutes } from "./routes/professor.routes";
import { disciplinaRoutes } from "./routes/disciplina.routes";

const app: FastifyInstance = fastity(
    { 
        logger: false 
    }
);

app.register(
    professorRoutes,
    {
        prefix: '/users',
    }
);

app.register(
    disciplinaRoutes,
    {
        prefix: '/disciplina',
    }
);

app.listen(
    {
        port: 3100,
    },
    () => console.log('Server is running'),
);