import ProductItem from "./ProductItem";

const ProductList = ({ productos, actualizarProducto, eliminarProducto }) => {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Descripción</th>
                    <th>Precio Unitario</th>
                    <th>Descuento</th>
                    <th>Precio con Descuento</th>
                    <th>Stock</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((producto) => (
                    <ProductItem key={producto.id} producto={producto} actualizarProducto={actualizarProducto} eliminarProducto={eliminarProducto} />
                ))}
            </tbody>
        </table>
    );
};

export default ProductList;



