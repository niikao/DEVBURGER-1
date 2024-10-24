import { createBrowserRouter } from 'react-router-dom';
import { useNavigate, Resolve} from 'react-router-dom';


import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Cart, Checkout, CompletePayment, Home,Login,Menu,Register }  from '../Containers'



export const router = createBrowserRouter([

    {
        path: '/',
        element:
            (
                <>
                    <Header />
                    <Home />
                </>
            ) < Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },
    {
        path: '/cardapio',
        element: (
            <>
                <Header />
                <Home />
            </>
        ),
    },
    {
        path: '/carrinho',
        element: <Cart />
    },
    {
        path: '/checkout',
        element: <Checkout />
    },
    {
        path: '/complete',
        element: <CompletePayment />
    },
    

]);