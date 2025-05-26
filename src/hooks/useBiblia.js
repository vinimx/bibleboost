import { useState, useEffect } from "react";
import { buscarLivro } from "../api/apiBiblia";
import { livrosBiblia } from "../dados/dadosDaBiblia";

export const useBiblia = () => {
  const [versao, setVersao] = useState("kjv");
  const [livro, setLivro] = useState("");
  const [capitulo, setCapitulo] = useState(1);
  const [versiculo, setVersiculo] = useState(null);
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const [historico, setHistorico] = useState([]);

  // Buscar capítulo inteiro
  const buscarCapitulo = async () => {
    if (!livro || !capitulo) return;
    setCarregando(true);
    setErro(null);
    try {
      const referencia = `${livro}+${capitulo}`;
      const resultado = await buscarLivro(referencia, versao);
      setDados(resultado);
      adicionarAoHistorico({
        livro,
        capitulo,
        versao,
        data: new Date().toISOString(),
      });
    } catch {
      setErro("Erro ao buscar capítulo");
    } finally {
      setCarregando(false);
    }
  };

  // Buscar versículo específico
  const buscarVersiculoEspecifico = async (numVersiculo) => {
    if (!livro || !capitulo || !numVersiculo) return;
    setCarregando(true);
    setErro(null);
    try {
      const referencia = `${livro}+${capitulo}:${numVersiculo}`;
      const resultado = await buscarLivro(referencia, versao);
      setDados(resultado);
    } catch {
      setErro("Erro ao buscar versículo");
    } finally {
      setCarregando(false);
    }
  };

  // Favoritos
  const adicionarAosFavoritos = (item) => {
    setFavoritos((prev) => [
      ...prev,
      {
        ...item,
        livro,
        capitulo,
        versao,
        data: new Date().toISOString(),
      },
    ]);
  };

  const removerDosFavoritos = (id) => {
    setFavoritos((prev) => prev.filter((fav) => fav.id !== id));
  };

  // Histórico
  const adicionarAoHistorico = (leitura) => {
    setHistorico((prev) => [leitura, ...prev].slice(0, 10));
  };

  // Navegação de capítulos
  const proximoCapitulo = () => {
    const livroAtual = livrosBiblia.find((l) => l.id === livro);
    if (livroAtual && capitulo < livroAtual.capitulos) {
      setCapitulo((c) => c + 1);
    }
  };

  const capituloAnterior = () => {
    if (capitulo > 1) {
      setCapitulo((c) => c - 1);
    }
  };

  // Atualiza dados ao trocar livro/capítulo/versão
  useEffect(() => {
    if (livro && capitulo) {
      buscarCapitulo();
    }
    // eslint-disable-next-line
  }, [livro, capitulo, versao]);

  return {
    versao,
    setVersao,
    livro,
    setLivro,
    capitulo,
    setCapitulo,
    versiculo,
    setVersiculo,
    dados,
    carregando,
    erro,
    favoritos,
    historico,
    buscarCapitulo,
    buscarVersiculoEspecifico,
    adicionarAosFavoritos,
    removerDosFavoritos,
    proximoCapitulo,
    capituloAnterior,
  };
};
