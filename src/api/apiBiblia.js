const API_URL = "https://bible-api.com";

// Lista de traduções suportadas
const TRADUCOES_SUPORTADAS = [
  "kjv",
  "bbe",
  "web",
  "niv",
  "asv",
  "esv",
  "nlt",
  "nrsv",
  "nasb",
  "amp",
];

// Função para formatar o nome do livro para a API
const formatarNomeLivro = (livro) => {
  // Remove espaços, hífens e converte para minúsculas
  return livro
    .toLowerCase()
    .replace(/\s+/g, "") // Remove espaços
    .replace(/-/g, "") // Remove hífens
    .replace(/\+/g, ""); // Remove o símbolo +
};

export const buscarLivro = async (livro, versao = "kjv") => {
  try {
    if (!TRADUCOES_SUPORTADAS.includes(versao.toLowerCase())) {
      throw new Error(
        `Tradução não suportada. Traduções disponíveis: ${TRADUCOES_SUPORTADAS.join(
          ", "
        )}`
      );
    }

    const livroFormatado = formatarNomeLivro(livro);
    const response = await fetch(
      `${API_URL}/${livroFormatado}?translation=${versao}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(
          `Livro "${livro}" não encontrado. Verifique o nome do livro.`
        );
      }
      throw new Error(
        `Erro ao buscar livro: ${response.status} ${response.statusText}`
      );
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
    if (!TRADUCOES_SUPORTADAS.includes(versao.toLowerCase())) {
      throw new Error(
        `Tradução não suportada. Traduções disponíveis: ${TRADUCOES_SUPORTADAS.join(
          ", "
        )}`
      );
    }

    const livroFormatado = formatarNomeLivro(livro);
    const response = await fetch(
      `${API_URL}/${livroFormatado}+${capitulo}:${versiculo}?translation=${versao}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(
          `Versículo não encontrado. Verifique o livro, capítulo e versículo.`
        );
      }
      throw new Error(
        `Erro ao buscar versículo: ${response.status} ${response.statusText}`
      );
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
    if (!TRADUCOES_SUPORTADAS.includes(versao.toLowerCase())) {
      throw new Error(
        `Tradução não suportada. Traduções disponíveis: ${TRADUCOES_SUPORTADAS.join(
          ", "
        )}`
      );
    }

    const livroFormatado = formatarNomeLivro(livro);
    const response = await fetch(
      `${API_URL}/${livroFormatado}+${capitulo}?translation=${versao}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(
          `Capítulo não encontrado. Verifique o livro e capítulo.`
        );
      }
      throw new Error(
        `Erro ao buscar capítulo: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar capítulo:", error);
    throw error;
  }
};
