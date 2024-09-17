import fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";   
import { teacherRoutes } from "./presentation/routes/teacher.routes"
import { studentRoutes } from "./presentation/routes/student.routes";

const app: FastifyInstance = fastify({ logger: true })

// Configurando CORS para permitir requisições de um frontend React
app.register(cors, {
  origin: (origin, cb) => {
    const allowedOrigins = ["http://localhost:3000"]; // Adicione outras origens se necessário
    
    // Se a origem for indefinida (undefined), considere a requisição válida (não é uma requisição CORS)
    if (!origin || allowedOrigins.includes(origin)) {
      // Chamando a callback com `null` para indicar que não há erro, e `true` para permitir a requisição
      cb(null, true);
    } else {
      // Chamando a callback com um erro e `false` para bloquear a requisição
      cb(new Error("Not allowed by CORS"), false);
    }
  },
  credentials: true, // Para habilitar o envio de cookies ou autenticação
});

app.register(teacherRoutes, {
    prefix: "/teachers"
})

app.register(studentRoutes, {
    prefix: "/students"
})

app.listen(
    {
        port: 3100
    },
    () => console.log("Server is running on port 3100")
);
