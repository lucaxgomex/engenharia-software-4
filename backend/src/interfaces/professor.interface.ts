export interface Professor {
    id: number;
    email: string;
    name: string;   
    createdAt: Date;
    updatedAt: Date;
}

export interface ProfessorCreate {
    email: string;
    name: string;
}

export interface ProfessorRepository {
    create(data: ProfessorCreate): Promise<Professor>;
    findByEmail(email: string): Promise<Professor | null>;
}