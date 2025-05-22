import { useState } from "react";

const SearchBar = ({ filtrarProductos }) => {
    const [busqueda, setBusqueda] = useState("");

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        filtrarProductos(e.target.value); // Actualiza la búsqueda en App.jsx
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Buscar por ID o descripción..." 
                value={busqueda} 
                onChange={handleChange} 
            />
        </div>
    );
};

export default SearchBar;
