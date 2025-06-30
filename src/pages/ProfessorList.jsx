import React, { useEffect, useState } from 'react';
import EditProfessorModal from '../components/EditProfessorModal';
import Header from '../components/Header';
import './ProfessorList.css';

function ProfessorList() {
  const [professores, setProfessores] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [professorEditando, setProfessorEditando] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/professores')
      .then((res) => res.json())
      .then((data) => setProfessores(data));
  }, []);

  const editarProfessor = (professor) => {
    setProfessorEditando(professor);
    setModalOpen(true);
  };

  const excluirProfessor = (id) => {
    if (confirm("Tem certeza que deseja excluir?")) {
      fetch(`http://localhost:8080/professores/${id}`, {
        method: 'DELETE',
      }).then(() => {
        alert("Professor excluído!");
        setProfessores((prev) => prev.filter((p) => p.id !== id));
      });
    }
  };

  // ⬇️ RETURN TEM QUE ESTAR AQUI DENTRO DA FUNÇÃO
  return (
    <div>
      <Header />
      <div className="prof-list-container">
        <h1>Lista de Professores</h1>

        <table className="prof-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Telefone</th>
              <th>Licença</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {professores.map((prof) => (
              <tr key={prof.id}>
                <td>{prof.nome}</td>
                <td>{prof.idade}</td>
                <td>{prof.telefone}</td>
                <td>{prof.licenca}</td>
                <td>
                  <button onClick={() => editarProfessor(prof)}>✏️ Editar</button>
                  <button onClick={() => excluirProfessor(prof.id)}>🗑️ Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <EditProfessorModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          professor={professorEditando}
          onUpdate={() => {
            fetch('http://localhost:8080/professores')
              .then((res) => res.json())
              .then((data) => setProfessores(data));
          }}
        />
      </div>
    </div>
  );
}

export default ProfessorList;
