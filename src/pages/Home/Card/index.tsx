import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { v4 } from "uuid";
import { ShoppingCartContext } from "../../../contexts/CartContext";
import { 
	BuyContainer, 
	CardContainer, 
	CartButton, 
	CounterContainer, 
	DescriptionContainer, 
	DescriptionTagContainer 
} from "./styles";

interface CoffeAttributes{
	id: string;
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}
interface CardProps{
	coffe: CoffeAttributes
}

export function Card({ coffe }: CardProps){
	const [coffeAmount, setCoffeAmount] = useState<number>(1);
	const { updateCartList } = useContext(ShoppingCartContext);

	function increaseCoffeAmount(){
		setCoffeAmount((state) => state + 1);
	}

	function decreaseCoffeAmount(){
		setCoffeAmount((state) => state - 1);
	}

	function handleAddCoffeInCart(){
		updateCartList({
			id: coffe.id,
			image: coffe.image,
			price: coffe.price,
			name: coffe.name,
			amount: coffeAmount
		});
	}

	return(
		<CardContainer>
			<img src={coffe.image} alt="" />

			<DescriptionContainer>
				<DescriptionTagContainer>
					{coffe.tags.map(tag => {
						return(
							<span key={v4()}>{tag}</span>
						);
					})}
				</DescriptionTagContainer>
				<h1>{coffe.name}</h1>
				<p>{coffe.description}</p>
			</DescriptionContainer>

			<BuyContainer>
				<span>R$ <strong>{coffe.price}</strong></span>
				<CounterContainer>
					<button onClick={decreaseCoffeAmount}>
						<Minus size={14} weight="bold"/>
					</button>
					<span>{coffeAmount}</span>
					<button onClick={increaseCoffeAmount}>
						<Plus size={14} weight="bold"/>
					</button>
				</CounterContainer>
				<CartButton onClick={handleAddCoffeInCart}>
					<ShoppingCart size={22} weight="fill"/>
				</CartButton>
			</BuyContainer>

		</CardContainer>
	);
}