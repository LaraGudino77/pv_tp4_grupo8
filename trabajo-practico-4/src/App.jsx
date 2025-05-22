import { useState, useEffect, useMemo,useCallback  } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precioUnitario, setPrecioUnitario] = useState("");
  const [descuento, setDescuento] = useState("");
  const [stock, setStock] = useState("");
  const [productoEnEdicion, setProductoEnEdicion] = useState(null);

  const productosFiltrados = useMemo(() => {
    return productos.filter((p) =>
      p.descripcion?.toLowerCase().includes(busqueda.toLowerCase()) || 
      p.id.toString().includes(busqueda)
    );
  }, [busqueda, productos]);

useEffect(() => {
    console.log("Productos actualizados:", productos);
  }, [productos]);

  const agregarProducto = useCallback(() => {
    const nuevoProducto = {
      id: Date.now(),
      descripcion,
      precioUnitario: parseFloat(precioUnitario),
      descuento: parseFloat(descuento),
      stock: parseInt(stock),
      precioConDescuento: parseFloat(precioUnitario) * (1 - parseFloat(descuento) / 100)
    };
    setProductos([...productos, nuevoProducto]);
    limpiarFormulario();
  }, [descripcion, precioUnitario, descuento, stock]);

  const actualizarProducto = useCallback((productoActualizado) => {
    const nuevosProductos = productos.map((p) =>
      p.id === productoActualizado.id ? productoActualizado : p
    );
    setProductos(nuevosProductos);
  }, [productos]);

  const eliminarProducto = useCallback((id) => {
    setProductos(productos.filter((p) => p.id !== id));
  }, []);

  const limpiarFormulario = () => {
    setDescripcion("");
    setPrecioUnitario("");
    setDescuento("");
    setStock("");
    setProductoEnEdicion(null);
  };

  const editarProductoDesdeFormulario = useCallback(() => {
    const productoActualizado = {
      ...productoEnEdicion,
      descripcion,
      precioUnitario: parseFloat(precioUnitario),
      descuento: parseFloat(descuento),
      stock: parseInt(stock),
      precioConDescuento: parseFloat(precioUnitario) * (1 - parseFloat(descuento) / 100)
    };
    actualizarProducto(productoActualizado);
    limpiarFormulario();
  }, [descripcion, precioUnitario, descuento, stock, productoEnEdicion, actualizarProducto]);

  const onEditar = (producto) => {
    setProductoEnEdicion(producto);
  };

  return (
    <div>
      
      <h1>Gestión de Productos</h1>

      
      <SearchBar filtrarProductos={setBusqueda} />
      <ProductForm
        descripcion={descripcion}
        setDescripcion={setDescripcion}
        precioUnitario={precioUnitario}
        setPrecioUnitario={setPrecioUnitario}
        descuento={descuento}
        setDescuento={setDescuento}
        stock={stock}
        setStock={setStock}
        onSubmit={productoEnEdicion ? editarProductoDesdeFormulario : agregarProducto}
        productoEnEdicion={productoEnEdicion}
        cancelarEdicion={limpiarFormulario}
      />

      <ProductList
        productos={productosFiltrados}
        actualizarProducto={actualizarProducto}
        eliminarProducto={eliminarProducto}
        onEditar={onEditar}
      />
    </div>
  );
};

export default App;
