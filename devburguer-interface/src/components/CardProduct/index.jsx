import Proptypes from 'prop-types'
import { Container, CardImage } from './styles';
import { CartButton } from '../CartButton';
import { useCart } from '../../hooks/CartContext';


export function CardProduct({ product }) {
    const { putProductsInCart } = useCart();

    return (
        <Container>
            <CardImage src={product.url} alt={product.name} />

            <div>
                <p>{product.name} < /p>
                    <strong>{product.currencyValue} </strong>
            </div>
            <CardButton onClick={() => putProductsInCart(product)} ></CardButton>
        </Container>
    );
};

CardProduct.Proptypes = {
    product: Proptypes.object,
};