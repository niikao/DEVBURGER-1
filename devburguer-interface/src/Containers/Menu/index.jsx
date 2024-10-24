import { useEffect, useState } from "react";
import { CategoryButton, Container } from "./styles";
import { api } from "../../services/api";
import { FormatPrice } from "../../utils/formatPrice";
import { useLocation, useNavigate } from "react-router-dom";

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [ filterProducts, setProducts] = useState([]);

    const navigate = useNavigate();

    const { search } = useLocation();
    
    
    const queryParams = new URLSearchParams(search);

    const categoryId = queryParams.get('categoria')

    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryId = +queryParams.get('categoria');

        if(categoryId){
            return categoryId
        }
        return 0
    });
    


    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data];
            console.log(data);
        }


        async function loadProducts() {
            const { data } = await api.get('/products')

            const newProducts = data.map(product => ({
                currencyValue: FormatPrice(product.price),
                ...product,
            }));

            setOffers(newProducts);

        }
        loadCategories();

        loadProducts();


    }, []);

    	useEffect(() => {
            if(activeCategory === 0) {
                setFilteredProducts(products);
            } else {
                const newFilteredProducts = products.filter (
                    product => product.category_id === activeCategory,
                );

                setFilteredProducts(newFilteredProducts)
            }
        }, [products, activeCategory])


    return (
        <Container>
            <Banner>
                <h1>
                    O MELHOR
                    <br />
                    HAMBURGUER
                    <br />
                    ESTÁ AQUI
                    <span>Esse cardápio está irresistível</span>
                </h1>

            </Banner>
            <CategoryMenu>
                {categories.map(category => (
                    <CategoryButton>
                        key={category.id}
                        $isActiveCategory={category.id === activeCategory }
                        onClick={() => {
                            navigate(
                                {
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`
                                },
                                {
                                    replace: true,
                                },

                            );

                            setActiveCategory(category.id)
                        }}
                        >{category.name} </CategoryButton>
                ))}
            </CategoryMenu>

            <ProductContainer>
                {filteredProducts.map((product) => (
                    <CardProduct product={product} key={product.id} />
                ))}
            </ProductContainer>
        </Container>
    );
}