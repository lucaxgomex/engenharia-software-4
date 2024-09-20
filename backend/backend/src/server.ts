import fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";   
import { professorRoutes } from "./routes/teacher.routes";
import { alunoRoutes } from "./routes/student.routes";
import { disciplinaRoutes } from "./routes/disciplina.routes";

const app: FastifyInstance = fastify({ logger: true });

app.register(
    cors, 
    {
        origin: '*'
    }
);

app.register(professorRoutes, {
    prefix: "/professores"
});

app.register(alunoRoutes, {
    prefix: "/alunos"
});

app.register(disciplinaRoutes, {
    prefix: '/disciplina'
});

app.listen({
        port: 3100
    },
    () => console.log("Server is running on port 3100")
);
