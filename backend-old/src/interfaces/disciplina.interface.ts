export interface Disciplina {
    id: number;
    name: string;
    professorId: number;
}

export interface DisciplinaCreate {
    name: string;
    professorId: number;
}

export interface DisciplinaRepository {
    create(data: DisciplinaCreate): Promise<Disciplina>;
}