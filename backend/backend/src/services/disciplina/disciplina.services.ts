import { prisma } from "../../infra/database/prisma-client";
import { DisciplinaRepository } from "../../domain/repository/disciplina.repository";

class DisciplinaServices implements DisciplinaRepository {
    async create(nomeDisciplina: string, idUser: number) {    
        const disciplina = prisma.subject.create({
            data: {
                name: nomeDisciplina,
                teacherId: idUser
            }
        });
    }
}

export { DisciplinaServices };