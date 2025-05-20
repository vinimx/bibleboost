import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-secundario shadow-elevacao text-texto font-corpo sticky top-0 z-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between h-20 items-center">
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
              className="h-14 w-auto md:h-16"
            />
          </motion.div>

          {/* Links do menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex space-x-6 lg:space-x-10"
          >
            {["Início", "Planos de Leitura", "Devocionais", "Sobre"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  href="#"
                  whileHover={{ scale: 1.12, color: "#fca311" }}
                  className="text-superficie hover:text-destaque transition-colors text-lg lg:text-xl px-2 py-1 rounded-md hover:bg-primario/10"
                >
                  {item}
                </motion.a>
              )
            )}
          </motion.div>

          {/* Botão de ação */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden md:flex"
          >
            <motion.a
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="bg-primario text-superficie px-6 py-2 rounded-lg font-titulo text-lg shadow hover:bg-destaque transition-colors"
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
                className="h-8 w-8"
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
              className="px-4 pt-3 pb-4 space-y-2 bg-superficie shadow-elevacao rounded-b"
            >
              {["Início", "Planos de Leitura", "Devocionais", "Sobre"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    href="#"
                    className="block px-4 py-2 rounded-lg hover:bg-destaque hover:text-superficie transition-colors text-base font-medium"
                  >
                    {item}
                  </motion.a>
                )
              )}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                href="#"
                className="block px-4 py-2 mt-2 bg-primario text-superficie rounded-lg font-titulo text-base font-semibold shadow hover:bg-destaque transition-colors"
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
