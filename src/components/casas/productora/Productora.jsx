function Productora() {
  const clientes = ['Edipo', 'Artistas', 'Vicki'];

  return (
    <div>
      <h2>Productora</h2>
      <ul>
        {clientes.map((cliente, index) => (
          <li key={index}>{cliente}</li>
        ))}
      </ul>
    </div>
  );
}

export default Productora;
