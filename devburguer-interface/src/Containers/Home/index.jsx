import { OffersCarousel,CategoriesCarousel} from "../../components/OffersCarousel";
import { userUser } from '../../hooks/UserContext';

import { Banner, Container,} from "./styles";


export function Home() {
   
   
    return (
        <main>
            <Banner>
                <h1>Bem-Vindo!</h1>
            </Banner>
            <Container>                                        
                <div>
                    <CategoriesCarousel />
                    <OffersCarousel />
                </div>
            </Container>
        </main>
    );
}

