import React from 'react';
import Header from '../components/Header';
import './ProfessorHome.css';

function ProfessorHome() {
  return (
    <div>
      <Header />
      <main className="prof-home">
        <h1 className="welcome">João Vitor, bem-vindo!</h1>

        <section className="categories">
          <h2>Categorias</h2>
          <div className="category-list">
            <span>Economia</span>
            <span>Informática</span>
            <span>Programação</span>
            <span>Organização</span>
            <span>Linguagens</span>
            <span>Comunicação</span>
          </div>
        </section>

        <section className="top-courses">
          <h2>Seus Cursos</h2>
          <div className="course-card">
            <h3>Curso: Python para Iniciantes</h3>
            <p>Alunos inscritos: 78</p>
            <p>Avaliação: ⭐ 4.9 (79 Reviews)</p>
          </div>

          <div className="course-card">
            <h3>Curso: Lógica de Programação</h3>
            <p>Alunos inscritos: 53</p>
            <p>Avaliação: ⭐ 4.7 (42 Reviews)</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProfessorHome;
