const createProducts = ({ products }) => {
    const container = document.querySelector('.container');
    const section = document.createElement('section');
    section.classList.add('section');

    if(products?.length) {
        products.forEach((product) => {
            const article = document.createElement('article');
            article.classList.add('product');
    
            const name = document.createElement('p');
            name.classList.add('product__name');
            name.textContent = `Product name: ${product.name}`;
    
            const price = document.createElement('p');
            price.classList.add('product__price');
            price.textContent = product.price;
    
            const image = document.createElement('img');
            image.classList.add('product__image');
            image.setAttribute('src', product.image);
            image.setAttribute('alt', product.name);
    
            const button = document.createElement('button');
            button.classList.add('product__button');
            button.textContent = `Buy ${ product.name }`;
    
            const funcEvent = () => {
                console.log(`${product.name} - ${ product.price }`);
                name.textContent = 'test';
            };
    
            button.addEventListener('click', funcEvent);
    
            article.appendChild(name);
            article.appendChild(image);
            article.appendChild(price);
            article.appendChild(button);
    
            section.appendChild(article);
        });
    } else {
        const header = document.createElement('h2');
        header.textContent = 'Товари відсутні';
        section.appendChild(header);
    }


    container.appendChild(section);
};

const createErrorMessage = (err) => {
    const defaultErrorMessage = 'OOPS. Something went wrong. :(';
    const container = document.querySelector('.container');
    const header = document.createElement('h2');
    header.textContent = err?.message ?? defaultErrorMessage;

    container.appendChild(header);
};

// Можна виконати все в одній функції
// async function getProducts() {
//     try {
//         const response = await fetch('./products.json');
//         const result = await response.json();
//
//         const newResponse = await fetch('./new-products.json');
//         const newResult = await newResponse.json();
//
//         return [ ...result.products, ...newResult.products ];
//     } catch(err) {
//         return { error: { message: 'Something went wrong.' } };
//     }
// };

// Або можна винести повторюючу частину в окрему функцію для перевикористання.
const loadProducts = (url) => fetch(url).then((response) => response.json());

async function getProducts() {
    try {
        const result = await loadProducts('./products.json');
        const newResult = await loadProducts('./new-products.json');

        // throw "ERROR"; // за допомогою throw Ви можете імітувати помилку в цьому блоці (в параметр err блока catch буде переданий рядок "ERROR").
        // throw { message: "ERROR" }; // за допомогою throw Ви можете імітувати помилку в цьому блоці (в параметр err блока catch буде переданий об'єкт { message: "ERROR" }).

        return { response: [ ...result.products, ...newResult.products ] };
    } catch(err) {
        return { error: { message: err?.message ?? 'Something went wrong.' } };
    }
};

getProducts()
    .then(({ response, error }) => {
        if (error) {
            createErrorMessage(error);
        } else {
            createProducts({ products: response });
        }
    });

// Імплементацію вище можна виконати за допомогою 'Promise.all'.
// Promise.all([
//     fetch('./products.json')
//         .then((response) => response.json())
//         .then((result) => result),
//     fetch('./new-products.json')
//         .then((response) => response?.json())
//         .then((result) => result)
// ])
// .then((data) => {
//     const [ result, newResult ] = data;
//     createProducts({ products: [ ...result.products, ...newResult.products ] });
// })
// .catch((err) => createErrorMessage(err));