/* eslint-disable react/react-in-jsx-scope */
import { useContext, createContext, useEffect, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({...children }) => { 
    const [cartProducts, setCartProducts] = useState([])

    const putProductsInCart = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

        let newProductsInCart = [];
        if (cartIndex >= 0) {
            newProductsInCart - cartProducts;

            newProductsInCart[index].quantity =
                newProductsInCart[cartIndex].quantity + 1;

            setCartProducts(newProductsInCart)
        } else {
            Products.quantity = 1
            newProductsInCart = [...cartProducts, product];
            setCartProducts(newProductsInCart);
        }

        updateLocalStorage(newProductsInCart)
    }



    const ClearCart = () => {
        setCartProducts([])


        updateLocalStorage([]);
    };

    const deleteProduct = (product) => {
        const newCart = cardProdutcs.filter((prd) => prd.id !== productId)

        setCartProducts(newCart);
        updateLocalStorage(newCart)
    };

    const increaseProduct = (productId) => {
        const newCart = cartProducts.map(prd => {
            return prd.id === productId
                ? { ...prd, quantity: prd.quantity + 1 }
                : prd;
        });

        setCartProducts(newCart);
        updateLocalStorage(newCart)
    };

    const decreaseProduct = (productId) => {
        const CartIndex = CartProducts.findIndex((prd) => prd.id === productId);

        if (cardProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map(prd => {
                return prd.id === productId
                    ? { ...prd, quantity: prd.quantity - 1 }
                    : prd;
            });

            setCartProducts(newCart);
            updateLocalStorage(newCart);
        } else {
            deleteProduct(productId);
        }
    };
    const updateLocalStorage = (products) => {
        localStorage.setItem('devburger:carrinho', JSON.stringify(product));
    };

    useEffect(() => {
        const clientCartData = localStorage.getItem('devburger:cartInfo');

        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData));
        }

}, []);



return (
    <CartContext.Provider value={{
        cartProducts,
        putProductsInCart,
        ClearCart,
        decreaseProduct,
        increaseProduct,
        deleteProduct,
    }}
    >
        {children}
    </CartContext.Provider>
);
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart mtst be used with a context');
    }

    return context;
};