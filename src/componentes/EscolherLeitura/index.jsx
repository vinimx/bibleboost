import { useState } from "react";
import { useBiblia } from "../../hooks/useBiblia";
import { livrosBiblia, versoes } from "../../dados/dadosDaBiblia";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function EscolherLeitura() {
  const {
    versao,
    setVersao,
    livro,
    setLivro,
    capitulo,
    setCapitulo,
    dados,
    carregando,
    erro,
    favoritos,
    adicionarAosFavoritos,
    removerDosFavoritos,
    proximoCapitulo,
    capituloAnterior,
  } = useBiblia();

  // Estado para abrir/fechar o modal de livros
  const [modalLivro, setModalLivro] = useState(false);
  // Estado para abrir/fechar o modal de capítulos
  const [modalCapitulo, setModalCapitulo] = useState(false);

  // Busca o objeto do livro selecionado para saber quantos capítulos tem
  const livroObj = livrosBiblia.find((l) => l.id === livro);
  const totalCapitulos = livroObj ? livroObj.capitulos : 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center min-h-screen bg-fundo"
    >
      {/* Botão de versão */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-12 mb-8 flex justify-center"
      >
        <motion.div
          whileHover={{
            scale: 1.04,
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative"
        >
          <select
            className="appearance-none font-titulo font-semibold text-titulo text-base px-6 py-3 bg-superficie/80 rounded-lg border border-primario/20 shadow focus:outline-none focus:ring-2 focus:ring-primario/30 transition-all duration-200 pr-10"
            value={versao}
            onChange={(e) => setVersao(e.target.value)}
          >
            {versoes.map((v) => (
              <option
                key={v.id}
                value={v.id}
                className="text-titulo bg-superficie"
              >
                {v.nome}
              </option>
            ))}
          </select>
          {/* Ícone de seta customizado */}
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-primario/60">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path
                d="M7 10l5 5 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </motion.div>
      </motion.div>

      {/* Botões principais */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="border-b border-neutro px-2 py-0 flex gap-6 justify-center max-w-md w-full mx-auto"
      >
        {/* Botão estilizado para selecionar livro */}
        <button
          className="group font-titulo font-semibold text-titulo text-base px-5 py-2 bg-superficie/80 rounded-md border-b-2 border-primario shadow hover:bg-primario/10 hover:text-primario hover:scale-105 transition-all flex items-center gap-2"
          onClick={() => setModalLivro(true)}
        >
          {livroObj ? livroObj.nome : "Selecione um livro"}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Modal customizado para seleção de livro */}
        {modalLivro && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-titulo/40">
            <div className="bg-superficie rounded-xl shadow-xl p-6 max-h-[80vh] w-[90vw] max-w-md overflow-y-auto">
              <h2 className="font-titulo text-xl mb-4 text-primario text-center">
                Escolha um livro
              </h2>
              <ul className="grid grid-cols-2 gap-2">
                {livrosBiblia.map((l) => (
                  <li key={l.id}>
                    <button
                      className={`w-full text-left px-4 py-2 rounded hover:bg-primario/20 transition ${
                        livro === l.id
                          ? "bg-primario/30 font-bold text-primario"
                          : ""
                      }`}
                      onClick={() => {
                        setLivro(l.id);
                        setCapitulo(1);
                        setModalLivro(false);
                      }}
                    >
                      {l.nome}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                className="mt-6 w-full py-2 rounded bg-neutro/20 hover:bg-neutro/40 text-titulo font-semibold transition"
                onClick={() => setModalLivro(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        {/* Botão estilizado para selecionar capítulo */}
        <button
          className="group font-titulo font-semibold text-titulo text-base px-5 py-2 bg-superficie/80 rounded-md border-b-2 border-primario shadow hover:bg-primario/10 hover:text-primario hover:scale-105 transition-all flex items-center gap-2 disabled:opacity-50"
          onClick={() => setModalCapitulo(true)}
          disabled={!livro}
        >
          {capitulo ? `Capítulo ${capitulo}` : "Capítulo"}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Modal customizado para seleção de capítulo */}
        {modalCapitulo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-titulo/40">
            <div className="bg-superficie rounded-xl shadow-xl p-6 max-h-[80vh] w-[90vw] max-w-xs overflow-y-auto">
              <h2 className="font-titulo text-xl mb-4 text-primario text-center">
                Escolha o capítulo
              </h2>
              <ul className="grid grid-cols-4 gap-2">
                {Array.from({ length: totalCapitulos }, (_, i) => (
                  <li key={i + 1}>
                    <button
                      className={`w-full px-3 py-2 rounded hover:bg-primario/20 transition ${
                        capitulo === i + 1
                          ? "bg-primario/30 font-bold text-primario"
                          : ""
                      }`}
                      onClick={() => {
                        setCapitulo(i + 1);
                        setModalCapitulo(false);
                      }}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                className="mt-6 w-full py-2 rounded bg-neutro/20 hover:bg-neutro/40 text-titulo font-semibold transition"
                onClick={() => setModalCapitulo(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Navegação de capítulos */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-2 mt-8 justify-center items-center"
      >
        <button
          className="px-5 py-2 rounded-lg bg-neutro/20 text-titulo font-semibold shadow-sm hover:bg-primario/10 hover:text-primario transition disabled:opacity-40 disabled:cursor-not-allowed border border-primario/20"
          onClick={capituloAnterior}
          disabled={capitulo <= 1}
          title="Capítulo anterior"
        >
          <svg
            className="w-5 h-5 inline-block mr-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Anterior
        </button>
        <span className="font-titulo text-xl text-primario bg-superficie/90 px-6 py-2 rounded-lg shadow-sm select-none border border-primario/10">
          {capitulo}
        </span>
        <button
          className="px-5 py-2 rounded-lg bg-neutro/20 text-titulo font-semibold shadow-sm hover:bg-primario/10 hover:text-primario transition disabled:opacity-40 disabled:cursor-not-allowed border border-primario/20"
          onClick={proximoCapitulo}
          disabled={!livroObj || capitulo >= totalCapitulos}
          title="Próximo capítulo"
        >
          Próximo
          <svg
            className="w-5 h-5 inline-block ml-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </motion.div>

      {/* Exibição do texto */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 max-w-xl w-full"
      >
        {carregando ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center py-12 text-lg text-primario"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Carregando...
            </motion.div>
          </motion.div>
        ) : erro ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-destaque/10 text-destaque rounded p-4 text-center font-semibold shadow"
          >
            {erro}
          </motion.div>
        ) : dados && dados.verses ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-superficie/80 rounded-xl shadow-lg p-6"
          >
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-titulo text-2xl text-primario mb-6 text-center tracking-wide drop-shadow"
            >
              {dados.reference}
            </motion.h3>
            <div className="space-y-4">
              <AnimatePresence>
                {dados.verses.map((versiculo, index) => (
                  <motion.div
                    key={versiculo.verse}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-primario/10 transition"
                  >
                    <span className="font-bold text-primario text-lg min-w-[2.5rem] text-right select-none">
                      {versiculo.verse}
                    </span>
                    <span className="text-base text-titulo leading-relaxed flex-1">
                      {versiculo.text}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="ml-2 text-xl transition"
                      title={
                        favoritos.some((fav) => fav.id === versiculo.id)
                          ? "Remover dos favoritos"
                          : "Adicionar aos favoritos"
                      }
                      onClick={() => {
                        const isFavorito = favoritos.some(
                          (fav) => fav.id === versiculo.id
                        );
                        if (isFavorito) {
                          removerDosFavoritos(versiculo.id);
                        } else {
                          adicionarAosFavoritos(versiculo);
                        }
                      }}
                    >
                      {favoritos.some((fav) => fav.id === versiculo.id) ? (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-destaque drop-shadow"
                        >
                          ★
                        </motion.span>
                      ) : (
                        <span className="text-neutro/60 group-hover:text-destaque">
                          ☆
                        </span>
                      )}
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-neutro/70 py-12 text-lg"
          >
            Selecione um livro e capítulo para começar
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
