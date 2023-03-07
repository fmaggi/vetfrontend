import React from 'react';

import Root from './routes/Root';
import LabTests, { action as savePdf, loader as loadPatient } from './routes/LabTests';
import Patients, { loader as loadPatients} from './routes/Patients';
import Home, {} from './routes/Home';
import Stats, { loader as loadStats } from './routes/Stats';
import Error from './routes/Error';

import { createHashRouter, RouterProvider } from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react'

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'labs/:patient',
        element: <LabTests />,
        loader: loadPatient,
        action: savePdf
      },
      {
        path: 'pacientes',
        element: <Patients />,
        loader: loadPatients
      },
      {
        path: 'estadisticas',
        element: <Stats />,
        loader: loadStats
      }
    ]
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
