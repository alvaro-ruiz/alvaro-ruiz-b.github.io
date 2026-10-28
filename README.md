# Portfolio · Álvaro Ruiz

React 19 + Vite + Tailwind CSS v4. Todo el contenido vive en `src/data/content.ts`.

## Estructura

```
src/
  data/content.ts      ← textos, proyectos, skills, enlaces (edita aquí)
  components/          ← Sidebar, Hero, About, Projects, Skills, Education, Contact
  index.css            ← colores y fuentes (bloque @theme)
public/foto.jpg        ← tu foto (cámbiala por otra con el mismo nombre)
```

## Desarrollo

```bash
npm install
npm run dev
```

## Editar contenido

- **GitHub / CV:** en `profile` rellena `github` y `cvUrl` (copia el PDF a `public/` y pon `'cv.pdf'`).
- **Proyectos:** en cada elemento de `projects` rellena `url` y aparece el enlace.
- **Añadir un proyecto/skill:** añade un objeto al array correspondiente.

## Publicar en GitHub Pages

1. Sube el proyecto a un repositorio (rama `main`).
2. En GitHub: **Settings → Pages → Source: GitHub Actions**.
3. Cada `git push` a `main` despliega la web automáticamente.
