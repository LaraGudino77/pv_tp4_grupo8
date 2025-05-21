import { useState } from "react";
import ProductList from "./ProductList";

const searchBar =() =>{
    const[idBuscado, setIdBuscado] = userState("");

    const handleChange = (e) => {
    e.preventDefault();
    setIdBuscado(e.target.value);
    };

  <div>
  {producto.filter(producto.id = idBuscado).map(fproducto => (
    <li>
      {fproducto.name}
    </li>
  ))}
  </div>

};



export default searchBar