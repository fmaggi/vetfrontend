import React from 'react';

import Root from './routes/Root'
import LabTests, { action as savePdf, loader as loadPatient } from './routes/LabTests';
import Patients, { loader as loadPatients} from './routes/Patients';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <h1>Hey there!</h1>
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
