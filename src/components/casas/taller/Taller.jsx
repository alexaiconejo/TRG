import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function Taller() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [newDescription, setNewDescription] = useState(''); // Estado para la descripción
  const [selectedTag, setSelectedTag] = useState('');
  const navigate = useNavigate();

  const tags = ['Taller', 'Casa', 'Conexion', 'Nutricion', 'Disco', 'Social', 'Secret', 'Plan', 'Productora', 'Evolucion', 'Sueño'];

  useEffect(() => {
    // Cargar las notas desde localStorage al montar el componente
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    // Guardar las notas en localStorage cada vez que cambian
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote && newDescription && selectedTag) {
      const newEntry = { text: newNote, description: newDescription, tag: selectedTag };
      setNotes([...notes, newEntry]);
      setNewNote('');
      setNewDescription(''); // Limpiar la descripción después de agregar la nota
      setSelectedTag('');
    }
  };

  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const handleBackClick = () => {
    navigate('/trg'); // Cambia la ruta según la configuración de tus rutas
  };

  return (
    <div>
      <button onClick={handleBackClick} style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'absolute', top: '10px', left: '10px' }}>
        <FaArrowLeft size={32} style={{ color: 'black', borderRadius: '50%', background: '#ddd', padding: '5px' }} />
      </button>
      <h2>Taller</h2>
      <input 
        type="text" 
        value={newNote} 
        onChange={(e) => setNewNote(e.target.value)} 
        placeholder="Escribe una nota" 
      />
      <textarea
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        placeholder="Escribe una descripción"
        style={{ display: 'block', marginTop: '10px' }} // Ajuste de estilo para visualización
      />
      <select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)} style={{ marginTop: '10px' }}>
        <option value="">Selecciona una etiqueta</option>
        {tags.map((tag, index) => (
          <option key={index} value={tag}>{tag}</option>
        ))}
      </select>
      <button onClick={addNote} style={{ marginTop: '10px' }}>Agregar Nota</button>
      <ul style={{ marginTop: '20px' }}>
        {notes.map((note, index) => (
          <li key={index}>
            <strong>Nota:</strong> {note.text} <br />
            <strong>Descripción:</strong> {note.description} <br />
            <strong>Etiqueta:</strong> {note.tag}
            <button onClick={() => removeNote(index)} style={{ marginLeft: '10px' }}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Taller;
