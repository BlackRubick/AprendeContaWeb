# Contabilidad Web

Aplicación web para aprender contabilidad con ejercicios prácticos y simuladores.

## Estructura del Proyecto

```
contabilidad-web/
├── public/
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navigation.jsx
│   │   ├── home/
│   │   │   └── Hero.jsx
│   │   └── temas/
│   │       ├── CuentasContables.jsx
│   │       ├── LibroDiario.jsx
│   │       ├── EstadosFinancieros.jsx
│   │       └── Dinamicas/
│   │           ├── EjercicioPractico.jsx
│   │           └── SimuladorContable.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Temas.jsx
│   │   ├── DetallesTema.jsx
│   │   └── Dinamicas.jsx
│   ├── context/
│   │   └── ContabilidadContext.jsx
│   ├── data/
│   │   └── temasContabilidad.js
│   ├── hooks/
│   │   └── useContabilidad.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Tecnologías

- React
- Vite
- Tailwind CSS
- React Router

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev
```

