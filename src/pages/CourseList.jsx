import React, { useEffect, useState } from 'react';
import './CourseList.css';
import Header from '../components/Header';
import EditCourseModal from '../components/EditCourseModal';

function CourseList() {
  const [cursos, setCursos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [cursoEditando, setCursoEditando] = useState(null);

  const buscarCursos = () => {
    fetch('http://localhost:8080/cursos')
      .then((res) => res.json())
      .then((data) => setCursos(data))
      .catch((err) => console.error('Erro ao buscar cursos:', err));
  };

  useEffect(() => {
    buscarCursos();
  }, []);

  const excluirCurso = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este curso?")) {
      fetch(`http://localhost:8080/cursos/${id}`, {
        method: 'DELETE',
      })
        .then(() => {
          alert("Curso excluído com sucesso!");
          buscarCursos();
        })
        .catch((err) => console.error("Erro ao excluir:", err));
    }
  };

  const editarCurso = (curso) => {
    setCursoEditando(curso);
    setModalOpen(true);
  };

  return (
    <div>
      <Header />
      <div className="course-list-container">
        <h1>Lista de Cursos</h1>
        {cursos.length === 0 ? (
          <p>Nenhum curso cadastrado ainda.</p>
        ) : (
          <div className="course-grid">
            {cursos.map((curso) => (
              <div key={curso.id} className="course-card">
                <h3>{curso.nome}</h3>
                <p><strong>Categoria:</strong> {curso.categoria}</p>
                <p><strong>Descrição:</strong> {curso.descricao}</p>
                <p><strong>Professor:</strong> {curso.professor?.nome || 'Sem professor'}</p>
                <a href={curso.videoUrl} target="_blank" rel="noreferrer">Assistir Aula</a>
                <div className="actions">
                  <button onClick={() => editarCurso(curso)}>✏️ Editar</button>
                  <button onClick={() => excluirCurso(curso.id)}>🗑️ Excluir</button>
                </div>
              </div>
            ))}
          </div>
        )}

        <EditCourseModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          curso={cursoEditando}
          onUpdate={buscarCursos}
        />
      </div>
    </div>
  );
}

export default CourseList;
