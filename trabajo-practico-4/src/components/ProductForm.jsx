import { useEffect } from "react";

const ProductForm = ({
  descripcion,
  setDescripcion,
  precioUnitario,
  setPrecioUnitario,
  descuento,
  setDescuento,
  stock,
  setStock,
  onSubmit,
  productoEnEdicion,
  cancelarEdicion,
}) => {
  useEffect(() => {
    if (productoEnEdicion) {
      setDescripcion(productoEnEdicion.descripcion);
      setPrecioUnitario(productoEnEdicion.precioUnitario.toString());
      setDescuento(productoEnEdicion.descuento.toString());
      setStock(productoEnEdicion.stock.toString());
    }
  }, [productoEnEdicion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{productoEnEdicion ? "Editar Producto" : "Agregar Producto"}</h2>

        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Precio Unitario"
          value={precioUnitario}
          onChange={(e) => setPrecioUnitario(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Descuento (%)"
          value={descuento}
          onChange={(e) => setDescuento(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />

        <button type="submit">
          {productoEnEdicion ? "Guardar Cambios" : "Agregar"}
        </button>

        {productoEnEdicion && (
          <button type="button" onClick={cancelarEdicion}>
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
};

export default ProductForm;
