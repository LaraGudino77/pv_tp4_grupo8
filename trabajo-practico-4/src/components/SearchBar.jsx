import React, {useEffect, useState} from "react";

const search =({NombreBuscar, setNombreBuscar}) =>{
    return <input 
    type="text"
    value={NombreBuscar}
    onChange ={(e)=>setNombreBuscar(e.target.value)}
    
    />

} 

useEffect(()  =>{

    setFiltro(
        productos.filter((productos) => productos.toLowercase().
        includes(search.toLowercase()))
    )
        
}, [nombreBuscar, productos])

const lista =({productos}) =>{

    if (productos.lenght===0)return <div>Sin resultados </div>

    return <ul>
        {
            productos.map((producto, index) =>(
                <li key={index}>{producto}</li>
            ))
        }
    </ul>

}




const searchBar =() =>{

    const[nombreBuscar, setNombreBuscar] = usedState('');

    const[filtro, setFiltro] = usedState([]);

    const[productos, setproductos] = useState(
        [
            "prod1",
            "prod2",
            "prod3",
        ]);
    

    return <div>
        <search {...{nombreBuscar, setNombreBuscar }}/>
        <lista {...{productos: filtered}}/>
    </div>

}

export default searchBar
