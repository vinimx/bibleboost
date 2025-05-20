export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primario: "var(--cor-primaria)",
        secundario: "var(--cor-secundaria)",
        destaque: "var(--cor-destaque)",
        fundo: "var(--cor-fundo)",
        superficie: "var(--cor-superficie)",
        neutro: "var(--cor-neutra)",
        texto: "var(--cor-texto)",
        titulo: "var(--cor-titulo)",
        link: "var(--cor-link)",
      },
      fontFamily: {
        titulo: "var(--fonte-titulo)",
        corpo: "var(--fonte-corpo)",
      },
      boxShadow: {
        elevacao: "var(--sombra-elevacao)",
      },
    },
  },
  plugins: [],
};
