// src/services/api.ts
import axios from "axios";

// Configura o Axios com a URL da API
const api = axios.create({
  baseURL: "http://localhost:3100",
  withCredentials: true, // Necessário se precisar enviar cookies/credenciais
  headers: {
    "Content-Type": "application/json",
  },
});

// Função para buscar professores
export const fetchProfessores = async () => {
  try {
    const response = await api.get("/teachers");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar professores:", error);
    throw error;
  }
};
