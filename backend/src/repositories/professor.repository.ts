import { prisma } from "../database/prisma-client";
import { Professor, ProfessorCreate, ProfessorRepository } from "../interfaces/professor.interface";

class ProfessorRepositoryPrisma implements ProfessorRepository {
    // method #1
    async create(data: ProfessorCreate): Promise<Professor> {
        const result = await prisma.professor.create({
            data: {
                name: data.name,
                email: data.email
            }
        });
        return result;
    }

    // method #2
    async findByEmail(email: string): Promise<Professor | null> {
        const result = await prisma.professor.findFirst({
            where: {
                email
            }
        });
        return result || null;
    }
}

export { ProfessorRepositoryPrisma };