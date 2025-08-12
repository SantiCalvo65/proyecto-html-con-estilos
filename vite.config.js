import { defineConfig } from "vite";

export default defineConfig({
  base: "/proyecto-html-con-estilos/", // Usa rutas relativas en los enlaces generados en el HTML
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "quienes_somos.html"),
        cursos: resolve(__dirname, "Cursos.html"),
        curso_1: resolve(__dirname, "Curso_1.html"),
        curso_2: resolve(__dirname, "Curso_2.html"),
        Blog: resolve(__dirname, "Noticias.html"),
        Blog_1: resolve(__dirname, "Noticias_1.html"),
        Blog_2: resolve(__dirname, "Noticias_2.html"),
        Registro: resolve(__dirname, "Registro.html"),
        Login: resolve(__dirname, "Login.html"),
        Contact: resolve(__dirname, "Contacto.html"),

      },
    },
  },
});
