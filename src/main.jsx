import React from 'react';
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";
import App from "./App";
import Us from './components/us/Us.jsx';
import TRG from './components/TRG/TRG.jsx';

import "./index.css";
import Nutricion from './components/casas/nutricion/Nutricion.jsx';
import Disco from './components/casas/disco/Disco.jsx';
import Social from './components/casas/social/Social.jsx';
import Sueño from './components/casas/sueño/Sueño.jsx';
import Taller from './components/casas/taller/Taller.jsx';
import Casa from './components/casas/casa/Casa.jsx';
import Conexion from './components/casas/conexion/Conexion.jsx';
import Plan from './components/casas/plan/Plan.jsx';
import Secret from './components/casas/secret/Secret.jsx';
import Productora from './components/casas/productora/Productora.jsx';
import Evolucion from './components/casas/evolucion/Evolucion.jsx';
import Astros from './components/astros/Astros.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <App /> },
      { path: "/us", element: <Us /> },
      { path: "/trg", element: <TRG /> },
      { path: "/trg/taller", element: <Taller /> },
      { path: "/trg/casa", element: <Casa /> },
      { path: "/trg/conexion", element: <Conexion /> },
      { path: "/trg/nutricion", element: <Nutricion /> },
      { path: "/trg/disco", element: <Disco /> },
      { path: "/trg/social", element: <Social /> },
      { path: "/trg/secret", element: <Secret /> },
      { path: "/trg/plan", element: <Plan /> },
      { path: "/trg/productora", element: <Productora /> },
      { path: "/trg/evolucion", element: <Evolucion /> },
      { path: "/trg/sueño", element: <Sueño /> },
      { path: "/astros", element: <Astros /> },




    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
