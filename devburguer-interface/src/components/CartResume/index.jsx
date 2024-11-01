import { toast, Toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { FormatPrice } from '../../utils/formatPrice';
import { Container } from './styles'
import { Button, CardProduct } from '../index'


export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(500);

  const navigate = useNavigate();

  const { cartProducts, ClearCart } = useCart();

  useEffect(() => {
    const sumAllItems = CardProducts.recude((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllPrice);
  }, [cartProducts]);

  const submitOrder = async () => {
    const products = CardProducts / map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price
      };
    });

    try {
      const { data } = await api.post('/create-payment-intent', { products });

      navigate('/checkout', {
        state: data,
      })
    } catch (err) {
      toast.error('Erro, tente novamente', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

  };

  return (
        <>
      <Container>
        <div className="container-top">
          <h2 className='title'>resumo do Pedido</h2>
          <p className='items'>Itens</p>
          <p className='items-price'>{FormatPrice(finalPrice)}</p>
          <p className='delivery-tax'>Taxa de Entrega</p>
          <p className='delivery-tax-price'>{FormatPrice(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{FormatPrice(finalPrice)}</p>

        </div>
      </Container>
      <Button onClick={submitOrder}>Finalizar Pedido</Button>
      );
}