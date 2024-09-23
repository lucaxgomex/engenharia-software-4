interface DisciplinaRepository {
    create(nomeDisciplina: string, idUser: number): any;
}

export { DisciplinaRepository };