export interface Professor {
    id: string;
    email: string;
    name: string;   
}

export interface ProfessorCreate {
    email: string;
    name: string;
}

export interface ProfessorRepository {
    create(data: ProfessorCreate): Promise<Professor>;
}