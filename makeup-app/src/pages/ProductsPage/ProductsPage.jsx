import ProductCard from "../../components/ProductCard/ProductCard";
import {ProductsContext} from "../../contexts/ProductsContext";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import "./ProductsPage.css"

export default function ProductsPage() {
    const {products} = useContext(ProductsContext);
    localStorage.setItem('products', JSON.stringify(products));
    console.log("products", products);
    const isAdmin = localStorage.getItem('isAdmin');
    const navigate = useNavigate();

    const handleAddProuduct = () => {
        navigate('/Makeup-Shop/products/edit');
    }
    return (
        <>
        {isAdmin && <button className="add-product-button" onClick={handleAddProuduct}>Add Product</button>}
        <div className="products-container">
            {products.map(product => <ProductCard key={product.id} product={product} withInfo={false} />)}
        </div>
        </>
        
    )
}