const API_URL = "https://bible-api.com";

export const buscarLivro = async (livro, versao = "kjv") => {
  try {
    const response = await fetch(`${API_URL}/${livro}?translation=${versao}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar livro");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar livro:", error);
    throw error;
  }
};

export const buscarVersiculo = async (
  livro,
  capitulo,
  versiculo,
  versao = "kjv"
) => {
  try {
    const response = await fetch(
      `${API_URL}/${livro}+${capitulo}:${versiculo}?translation=${versao}`
    );
    if (!response.ok) {
      throw new Error("Erro ao buscar versículo");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar versículo:", error);
    throw error;
  }
};

export const buscarCapitulo = async (livro, capitulo, versao = "kjv") => {
  try {
    const response = await fetch(
      `${API_URL}/${livro}+${capitulo}?translation=${versao}`
    );
    if (!response.ok) {
      throw new Error("Erro ao buscar capítulo");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar capítulo:", error);
    throw error;
  }
};
