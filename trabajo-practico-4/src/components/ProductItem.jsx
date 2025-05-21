import { useState } from "react";

const ProductItem = ({ producto, actualizarProducto, eliminarProducto }) => {
    const [productoEditado, setProductoEditado] = useState(producto);

    const handleEdit = (e) => {
        setProductoEditado({ ...productoEditado, [e.target.name]: e.target.value });
    };

    const handleBlur = () => {
        actualizarProducto(productoEditado); 
    };

    return (
        <tr>
            <td>{productoEditado.id}</td>
            <td><input type="text" name="descripcion" value={productoEditado.descripcion} onChange={handleEdit} onBlur={handleBlur} /></td>
            <td><input type="number" name="precioUnitario" value={productoEditado.precioUnitario} onChange={handleEdit} onBlur={handleBlur} /></td>
            <td><input type="number" name="descuento" value={productoEditado.descuento} onChange={handleEdit} onBlur={handleBlur} /></td>
            <td>${(productoEditado.precioUnitario * (1 - productoEditado.descuento / 100)).toFixed(2)}</td>
            <td><input type="number" name="stock" value={productoEditado.stock} onChange={handleEdit} onBlur={handleBlur} /></td>
            <td><button onClick={() => eliminarProducto(producto.id)}>Eliminar</button></td>
        </tr>
    );
};

export default ProductItem;