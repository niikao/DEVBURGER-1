/* eslint-disable react/react-in-jsx-scope */
import { UserCircle } from '@phosphor-icons/react';
import { useUser } from '../../hooks/UserContext'
import {
    Container,
    HeaderLink,
    LinkContainer,
    Logout,
    Navigation,
    Options,
    Profile,
    Content,
} from './styles'
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from '@phosphor-icons/react/dist/ssr';



export function Header() {
   const navigate = useNavigate();
   const { logout, userInfo } = userUser();

   const { pathname } = useResolvePath();

   function logoutUser(){
    logout();
    navigate('/login')
   }
    return (
        
        <Container>
            <Content>
            <Navigation>
                <div>
                    <HeaderLink to='/'  $isActive={pathname === '/'} 
                    >Home
                    </HeaderLink>
                    <hr></hr>
                    <HeaderLink to ='/cardapio' isActive={pathname === '/cardapio'}>
                    Cardápio
                    </HeaderLink>
                </div>
            </Navigation>
            <Options>
                <Profile>
                    <UserCircle color='#fff' size={24}    />
                    <div>
                        <p>
                            Olá, <span>{userInfo.name}</span>
                        </p>
                        <Logout onClick={logoutUs}>Sair</Logout>
                    </div>
                </Profile>
            </Options>
            <LinkContainer>
            <ShoppingCart color='#fff' size={24} />
                <HeaderLink to ='/carrinho'>Carrinho</HeaderLink>
            </LinkContainer>
            </Content>
        </Container>
    );
}