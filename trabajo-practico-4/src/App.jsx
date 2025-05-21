import { useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

const App = () => {
  const [productos, setProductos] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [precioUnitario, setPrecioUnitario] = useState("");
  const [descuento, setDescuento] = useState("");
  const [stock, setStock] = useState("");
  const [productoEnEdicion, setProductoEnEdicion] = useState(null);

  const agregarProducto = () => {
    const nuevoProducto = {
      id: Date.now(),
      descripcion,
      precioUnitario: parseFloat(precioUnitario),
      descuento: parseFloat(descuento),
      stock: parseInt(stock),
    };
    setProductos([...productos, nuevoProducto]);
    limpiarFormulario();
  };

  const actualizarProducto = (productoActualizado) => {
    const nuevosProductos = productos.map((p) =>
      p.id === productoActualizado.id ? productoActualizado : p
    );
    setProductos(nuevosProductos);
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  const limpiarFormulario = () => {
    setDescripcion("");
    setPrecioUnitario("");
    setDescuento("");
    setStock("");
    setProductoEnEdicion(null);
  };

  const editarProductoDesdeFormulario = () => {
    const productoActualizado = {
      ...productoEnEdicion,
      descripcion,
      precioUnitario: parseFloat(precioUnitario),
      descuento: parseFloat(descuento),
      stock: parseInt(stock),
    };
    actualizarProducto(productoActualizado);
    limpiarFormulario();
  };

  const onEditar = (producto) => {
    setProductoEnEdicion(producto);
  };

  return (
    <div>
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
        productos={productos}
        actualizarProducto={actualizarProducto}
        eliminarProducto={eliminarProducto}
        onEditar={onEditar}
      />
    </div>
  );
};

export default App;
