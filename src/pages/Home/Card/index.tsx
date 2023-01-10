import { Minus, Plus, ShoppingCart } from "phosphor-react";
import coffeImg from "../../../assets/coffes/expresso.svg";
import { 
	BuyContainer, 
	CardContainer, 
	CartButton, 
	CounterContainer, 
	DescriptionContainer, 
	DescriptionTagContainer 
} from "./styles";


export function Card(){
	return(
		<CardContainer>
			<img src={coffeImg} alt="" />

			<DescriptionContainer>
				<DescriptionTagContainer>
					<span>Tradicional</span>
					<span>Com leite</span>
				</DescriptionTagContainer>
				<h1>Expresso tradicional</h1>
				<p>O tradicional café feito com água quente e grãos moídos</p>
			</DescriptionContainer>

			<BuyContainer>
				<span>R$ <strong>9,90</strong></span>
				<CounterContainer>
					<button>
						<Minus size={14} weight="bold"/>
					</button>
					<span>1</span>
					<button>
						<Plus size={14} weight="bold"/>
					</button>
				</CounterContainer>
				<CartButton>
					<ShoppingCart size={22} weight="fill"/>
				</CartButton>
			</BuyContainer>

		</CardContainer>
	);
}