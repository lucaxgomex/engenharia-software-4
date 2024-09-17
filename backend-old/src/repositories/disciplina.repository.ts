import { Disciplina, DisciplinaCreate, DisciplinaRepository } from "../interfaces/disciplina.interface";

class DisciplinaRepositoryPrisma implements DisciplinaRepository {
    create(data: DisciplinaCreate): Promise<Disciplina> {}
}

export { DisciplinaRepositoryPrisma };