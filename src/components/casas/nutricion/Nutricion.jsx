import React, { useState, useEffect } from 'react';
import styles from './Nutricion.module.css';

function Nutricion() {
  const [foodLog, setFoodLog] = useState([]);
  const [currentFood, setCurrentFood] = useState('');
  const [nutrientTotals, setNutrientTotals] = useState({
    proteinas: 0,
    carbohidratos: 0,
    vitaminas: 0,
    grasas: 0
  });

  const foodNutrientValues = {
    banana: { proteinas: 1, carbohidratos: 10, vitaminas: 5, grasas: 0 },
    manzana: { proteinas: 0.5, carbohidratos: 8, vitaminas: 5, grasas: 0 },
    pastas: { proteinas: 5, carbohidratos: 20, vitaminas: 1, grasas: 2 },
    soja: { proteinas: 15, carbohidratos: 10, vitaminas: 3, grasas: 5 },
    ensalada: { proteinas: 2, carbohidratos: 5, vitaminas: 8, grasas: 1 },
    papas: { proteinas: 2, carbohidratos: 15, vitaminas: 3, grasas: 0 },
    garbanzo: { proteinas: 10, carbohidratos: 12, vitaminas: 2, grasas: 3 },
    lentejas: { proteinas: 12, carbohidratos: 15, vitaminas: 2, grasas: 1 },
    atun: { proteinas: 20, carbohidratos: 0, vitaminas: 2, grasas: 5 },
    palta: { proteinas: 2, carbohidratos: 5, vitaminas: 6, grasas: 15 },
    huevo: { proteinas: 6, carbohidratos: 1, vitaminas: 4, grasas: 5 }
  };

  const weeklyGoals = {
    proteinas: 100,
    carbohidratos: 100,
    vitaminas: 100,
    grasas: 100
  };

  const addFood = () => {
    if (currentFood && foodNutrientValues[currentFood]) {
      if (foodLog.length >= 7) {
        // Si hay más de 7 entradas, eliminar la más antigua
        setFoodLog([...foodLog.slice(1), currentFood]);
      } else {
        setFoodLog([...foodLog, currentFood]);
      }
      
      // Actualizar los totales nutricionales
      const newTotals = { ...nutrientTotals };
      const nutrients = foodNutrientValues[currentFood];

      Object.keys(newTotals).forEach(key => {
        newTotals[key] += nutrients[key];
      });

      setNutrientTotals(newTotals);
      setCurrentFood('');
    }
  };

  const calculatePercentage = (total, goal) => {
    return Math.min(100, ((total / goal) * 100).toFixed(2));
  };

  return (
    <div className={styles.nutricion}>
      <h2>Nutrición</h2>

      <h3>Registro de Alimentos Consumidos</h3>
      <input 
        type="text" 
        value={currentFood} 
        onChange={(e) => setCurrentFood(e.target.value)} 
        placeholder="Añade un alimento"
      />
      <button onClick={addFood}>Añadir Comida</button>

      <h3>Comidas Recientes</h3>
      <ul>
        {foodLog.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>

      <h3>Consumo Nutricional Semanal</h3>
      <ul>
        <li><strong>Proteínas:</strong> {calculatePercentage(nutrientTotals.proteinas, weeklyGoals.proteinas)}%</li>
        <li><strong>Carbohidratos:</strong> {calculatePercentage(nutrientTotals.carbohidratos, weeklyGoals.carbohidratos)}%</li>
        <li><strong>Vitaminas:</strong> {calculatePercentage(nutrientTotals.vitaminas, weeklyGoals.vitaminas)}%</li>
        <li><strong>Grasas Saludables:</strong> {calculatePercentage(nutrientTotals.grasas, weeklyGoals.grasas)}%</li>
      </ul>
      
      <p>Estos porcentajes se basan en consumos aproximados y objetivos semanales recomendados. Asegúrate de tener una dieta variada y consulta a un profesional si tienes necesidades específicas.</p>
    </div>
  );
}

export default Nutricion;
