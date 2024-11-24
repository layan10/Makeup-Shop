import { useParams } from 'react-router-dom';
import "./ProductPage.css";
import ProductCard from '../../components/ProductCard/ProductCard';

export default function ProductPage() {
    const { id } = useParams();
    console.log("id from params in product page", id);
    const products = JSON.parse(localStorage.getItem('products'));
    console.log("productsssssssssssssssssss", products);
    const product = products.find(product => product.id === id);
    console.log("productttttttttttttttttttttttttttttt", product);

    return (
        <ProductCard product={product} withInfo={true} />
    )
}