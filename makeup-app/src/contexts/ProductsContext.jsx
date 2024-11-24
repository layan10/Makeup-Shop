import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../api/products-api';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
ProductsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const products = await getProducts();
                setProducts(products);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    const fetchProduct = async (id) => {
        setLoading(true);
        try {
            const product = await getProduct(id);
            setProduct(product);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    const addProduct = async (product) => {
        setLoading(true);
        try {
            const newProduct = await createProduct(product);
            setProducts([...products, newProduct]);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    const editProduct = async (id, product) => {
        setLoading(true);
        try {
            const updatedProduct = await updateProduct(id, product);
            setProducts(products.map((product) => product.id === id ? updatedProduct : product));
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    const removeProduct = async (id) => {
        setLoading(true);
        try {
            await deleteProduct(id);
            setProducts(products.filter((product) => product.id !== id));
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <ProductsContext.Provider value={{ products, product, error, loading, fetchProduct, addProduct, editProduct, removeProduct }}>
            {children}
        </ProductsContext.Provider>
    );

}