import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import ProfessorList from './pages/ProfessorList.jsx';
import CreateCourse from './pages/CreateCourse.jsx';
import ProfessorForm from './pages/ProfessorForm.jsx';
import CourseList from './pages/CourseList.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="professores" element={<ProfessorList />} />
          <Route path="cadastrar-professor" element={<ProfessorForm />} />
          <Route path="cadastrar-curso" element={<CreateCourse />} />
          <Route path="cursos" element={<CourseList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
