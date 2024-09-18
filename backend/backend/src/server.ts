import fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";   
import { teacherRoutes } from "./presentation/routes/teacher.routes";
import { studentRoutes } from "./presentation/routes/student.routes";
import { disciplinaRoutes } from "./presentation/routes/disciplina.routes";


const app: FastifyInstance = fastify({ logger: true });

// Configurando CORS para permitir requisições de um frontend React
app.register(
    cors, 
    {
        origin: '*'
    }
);

app.register(teacherRoutes, {
    prefix: "/teachers"
});

app.register(studentRoutes, {
    prefix: "/students"
});

app.register(disciplinaRoutes, {
    prefix: '/disciplina'
});

app.listen({
        port: 3100
    },
    () => console.log("Server is running on port 3100")
);
