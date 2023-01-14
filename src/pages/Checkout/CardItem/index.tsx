import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../../contexts/CartContext";
import { 
	ActionContainer, 
	ButtonsContainer, CardItemContainer, CounterContainer, RemoveButton } from "./styles";

interface CoffeAttributes{
	id: string;
  image: string;
  name: string;
  price: number;
  amount: number;
}
interface CardProps{
	coffe: CoffeAttributes
	recalculateTotal: () => void
}

export function CardItem({ coffe, recalculateTotal}: CardProps){
	const { changeCartItem, removeItemOfCart } = useContext(ShoppingCartContext);
	const [amount, setAmount] = useState<number>(1);
	
	function increaseCoffeAmount(){
		changeCartItem(coffe.id, "Increase");
		setAmount((state) => state + 1);
		recalculateTotal();
	}

	function decreaseCoffeAmount(){
		changeCartItem(coffe.id, "Decrease");
		setAmount((state) => state - 1);
		recalculateTotal();
	}

	function handleRemoveItemOfCart(){
		removeItemOfCart(coffe);
	}

	return(
		<CardItemContainer>
			<img src={coffe.image}/>
			<ActionContainer>
				<span>{coffe.name}</span>
				<ButtonsContainer>
					<CounterContainer>
						<button onClick={decreaseCoffeAmount} type="button">
							<Minus size={14} weight="bold"/>
						</button>
						<span>{amount}</span>
						<button onClick={increaseCoffeAmount} type="button">
							<Plus size={14} weight="bold"/>
						</button>
					</CounterContainer>
					<RemoveButton onClick={handleRemoveItemOfCart}>
						<div>
							<Trash size={16}/>
						</div>
						remove
					</RemoveButton>
				</ButtonsContainer>
				
			</ActionContainer>
			<span>{(coffe.price * amount).toFixed(2).replace(".", ",")}</span>
		</CardItemContainer>
	);
}