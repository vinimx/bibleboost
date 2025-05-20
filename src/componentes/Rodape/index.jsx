// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import logo from "../../assets/logo-transparente.png";

export default function Rodape() {
  return (
    <motion.footer
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, delay: 0.7 }}
      className="w-full bg-superficie/95 border-t border-neutro/30 py-8 sm:py-12 mt-16 sm:mt-24 flex flex-col items-center shadow-lg relative overflow-hidden"
    >
      {/* Elemento decorativo de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-primario/5 to-transparent opacity-50" />
      
      {/* Linha decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primario/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-titulo text-base flex flex-col items-center gap-4 sm:gap-6 relative z-10 px-4 sm:px-6 w-full max-w-4xl mx-auto"
      >
        {/* Logo e Nome */}
        <div className="flex items-center gap-3 mb-2 group">
          <motion.img
            src={logo}
            alt="BibleBoost Logo"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1.25, opacity: 1 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
            className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-lg rounded-xl bg-superficie/80 p-1 group-hover:scale-110 transition-transform duration-300"
          />
          <motion.span 
            className="font-extrabold tracking-widest text-xl sm:text-2xl text-primario drop-shadow-sm select-none group-hover:text-primario/90 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            BibleBoost
          </motion.span>
        </div>

        {/* Descrição */}
        <span className="text-neutro/70 text-sm sm:text-base text-center max-w-md leading-relaxed">
          Uma experiência moderna para leitura bíblica online.
          <br />
          Desenvolvido por{" "}
          <a
            href="https://github.com/vinimx"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primario font-semibold transition-colors duration-300"
          >
            Marcos Vinícius Marcolino Rocha
          </a>
        </span>

        {/* Links Sociais */}
        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/vinimx/bibleboost"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutro/60 hover:text-primario transition-colors duration-300"
            title="GitHub"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05 .89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.73 1.03A9.18 9.18 0 0 1 12 7.07c.84.004 1.69.11 2.48.32 1.9-1.3 2.73-1.03 2.73-1.03 .54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48C19.13 20.54 22 16.74 22 12.26 22 6.58 17.52 2 12 2z" />
              </svg>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-primario/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Ver no GitHub
              </span>
            </motion.div>
          </a>
        </div>

        {/* Copyright e Versículo */}
        <div className="flex flex-col items-center mt-4 gap-2 w-full border-t border-neutro/20 pt-4">
          <span className="text-neutro/60 text-xs sm:text-sm text-center w-full">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">BibleBoost</span>. Todos os direitos
            reservados.
          </span>
          <motion.div 
            className="text-neutro/40 text-xs sm:text-sm italic text-center w-full max-w-md px-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="leading-relaxed">
              "A tua palavra é lâmpada que ilumina os meus passos e luz que
              clareia o meu caminho."
            </p>
            <span className="not-italic font-semibold block mt-1 text-primario/70">
              Salmos 119:105
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
