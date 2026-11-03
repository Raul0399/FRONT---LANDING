// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Sucursales from "./pages/branches"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sucursales" element={<Sucursales />} />
      </Routes>
    </BrowserRouter>
  )
}