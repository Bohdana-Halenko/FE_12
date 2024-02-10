import { useState, useEffect } from 'react';

export const Test = (props) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("./products.json")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
                setError(null);
            })
            .catch((err) => {
                setProducts([]);
                setError(err);
            });
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