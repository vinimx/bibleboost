import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-secundario shadow-elevacao text-texto font-corpo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Título */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0 flex items-center"
          >
            <motion.img
              whileHover={{ scale: 1.1, rotate: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="/src/assets/logo-vertical.png"
              alt="Logo"
              className="h-auto w-36"
            />
          </motion.div>

          {/* Links do menu */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex space-x-8"
          >
            {["Início", "Planos de Leitura", "Devocionais", "Sobre"].map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                href="#"
                whileHover={{ scale: 1.1, color: "#fca311" }}
                className="hover:text-destaque transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>

          {/* Botão de ação */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden md:flex"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="bg-primario text-superficie px-4 py-2 rounded font-titulo hover:bg-destaque transition-colors"
            >
              Entrar
            </motion.a>
          </motion.div>

          {/* Menu mobile */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="md:hidden flex items-center"
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="button"
              className="text-primario hover:text-destaque focus:outline-none"
              aria-label="Abrir menu"
              onClick={() => setMenuAberto(!menuAberto)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Menu mobile dropdown */}
      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-2 pt-2 pb-3 space-y-1 bg-superficie shadow-elevacao rounded-b"
            >
              {["Início", "Planos de Leitura", "Devocionais", "Sobre"].map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  href="#"
                  className="block px-3 py-2 rounded hover:bg-destaque hover:text-superficie transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                href="#"
                className="block px-3 py-2 mt-2 bg-primario text-superficie rounded font-titulo hover:bg-destaque transition-colors"
              >
                Entrar
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
