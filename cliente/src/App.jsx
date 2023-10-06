import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tasks" element={<h1>Tareas</h1>} />
        <Route path="/profile" element={<h1>Perfil</h1>} />
        <Route path="/add-task" element={<h1>Update tarea</h1>} />
        <Route path="/task/:id" element={<h1>Id de tarea</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
