import React, { useState } from 'react';

function Evolucion() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState('');
  const [progress, setProgress] = useState('');
  const [goal, setGoal] = useState('');

  const addProject = () => {
    if (newProject && progress && goal) {
      const newEntry = { name: newProject, progress: parseInt(progress), goal: parseInt(goal) };
      setProjects([...projects, newEntry]);
      setNewProject('');
      setProgress('');
      setGoal('');
    }
  };

  const calculateCompletion = (progress, goal) => {
    return ((progress / goal) * 100).toFixed(2);
  };

  const getPrediction = (progress, goal) => {
    const remaining = goal - progress;
    if (remaining <= 0) {
      return "¡Felicidades! Has alcanzado tu objetivo.";
    } else if (remaining < goal * 0.1) {
      return "Estás muy cerca de tu objetivo, ¡sigue así!";
    } else {
      return "Continúa avanzando, aún te queda un tramo por recorrer.";
    }
  };

  return (
    <div>
      <h2>Evolución</h2>
      <p>Este espacio puede ser utilizado para seguir el progreso de proyectos, desarrollo personal, o cualquier otra métrica relevante. También podría integrarse con IA para análisis predictivo y recomendaciones.</p>
      
      <div>
        <h3>Agregar Proyecto</h3>
        <input 
          type="text" 
          value={newProject} 
          onChange={(e) => setNewProject(e.target.value)} 
          placeholder="Nombre del proyecto" 
        />
        <input 
          type="number" 
          value={progress} 
          onChange={(e) => setProgress(e.target.value)} 
          placeholder="Progreso actual" 
          style={{ marginLeft: '10px' }}
        />
        <input 
          type="number" 
          value={goal} 
          onChange={(e) => setGoal(e.target.value)} 
          placeholder="Meta" 
          style={{ marginLeft: '10px' }}
        />
        <button onClick={addProject} style={{ marginLeft: '10px' }}>Agregar</button>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Proyectos</h3>
        {projects.length > 0 ? (
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <strong>{project.name}</strong><br />
                Progreso: {project.progress}/{project.goal} ({calculateCompletion(project.progress, project.goal)}%)<br />
                Predicción: {getPrediction(project.progress, project.goal)}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay proyectos actualmente.</p>
        )}
      </div>
    </div>
  );
}

export default Evolucion;
