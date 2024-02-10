import { useState, useEffect } from 'react';

export const TestAsync = (props) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    const getProducts = async () => {
        try {
            const response = await fetch("./products.json");
            const result = await response.then((data) => data.json());

            const newResponse = await fetch("./new-products.json");
            const newResult = await newResponse.then((data) => data.json());

            setProducts([ ...result.products, ...newResult.products ]);
            setError(null);
        } catch(err) {
            setProducts([]);
            setError(err);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    if (error) {
        return <h2>{ error?.message ?? 'OOPS. Something went wrong. :(' }</h2>
    }

    return (<div>
        {
            products.length ?
                products.map((product) => {
                    {/* Тут Ви можете створити розмітку для товарів. */}
                }) :
                (<h2>Товари відсутні</h2>)
        }
    </div>);
};