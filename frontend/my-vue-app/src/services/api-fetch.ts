// src/services/api.ts

const API_URL = "http://localhost:3100";

// Função para buscar professores
export const fetchProfessores = async () => {
  try {
    const response = await fetch(`${API_URL}/teachers`, {
      method: "GET",
      credentials: "include", // Importante se sua API precisar enviar cookies ou credenciais de autenticação
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar professores:", error);
    throw error;
  }
};

