//import React from 'react';
//import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
//import RootLayout from "./layout/RootLayout";
import { CartProvider } from "./CartContext";
import Home from "./Home";
//import { Checkout } from "./Checkout";


const App = () => {

  

 /* const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} >
      </Route>,),);

  return (
    <>
      <CartProvider >
        <RouterProvider router={router} />
      </CartProvider>
    </>
  )
    */
  return (
    <>
      <CartProvider >
        <Home />
      </CartProvider>
    </>
  )

}

export default App