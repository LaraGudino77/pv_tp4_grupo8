import { useState } from "react";
import ProductForm from "./ProductForm";

const ProductItem = ({ producto, actualizarProducto, eliminarProducto }) => {
  const [editando, setEditando] = useState(false);
  const [descripcion, setDescripcion] = useState("");
  const [precioUnitario, setPrecioUnitario] = useState("");
  const [descuento, setDescuento] = useState("");
  const [stock, setStock] = useState("");

  const handleGuardar = () => {
    const productoActualizado = {
      ...producto,
      descripcion,
      precioUnitario: parseFloat(precioUnitario),
      descuento: parseFloat(descuento),
      stock: parseInt(stock),
    };
    actualizarProducto(productoActualizado);
    setEditando(false);
  };

  const handleCancelar = () => {
    setEditando(false);
  };

  if (editando) {
    return (
      <tr>
        <td colSpan="7">
          <ProductForm
            descripcion={descripcion}
            setDescripcion={setDescripcion}
            precioUnitario={precioUnitario}
            setPrecioUnitario={setPrecioUnitario}
            descuento={descuento}
            setDescuento={setDescuento}
            stock={stock}
            setStock={setStock}
            onSubmit={handleGuardar}
            cancelarEdicion={handleCancelar}
            productoEnEdicion={producto}
          />
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.descripcion}</td>
      <td>{producto.precioUnitario}</td>
      <td>{producto.descuento}</td>
      <td>
        ${(
          producto.precioUnitario *
          (1 - producto.descuento / 100)
        ).toFixed(2)}
      </td>
      <td>{producto.stock}</td>
      <td>
        <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
        <button onClick={() => setEditando(true)}>Editar</button>
      </td>
    </tr>
  );
};

export default ProductItem;