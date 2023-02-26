import React from 'react';
import logo from './logo.svg';
import './App.css';

import Root from './routes/Root'
import LabTests, { action as LabPost} from './routes/LabTests';
import Patients, { loader as loadPatients, patientLoader} from './routes/Patients';

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
        action: LabPost,
        loader: patientLoader
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
