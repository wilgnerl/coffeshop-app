import { Minus, Plus, Trash } from "phosphor-react";
import coffeImg from "../../../assets/coffes/expresso.svg";
import { ActionContainer, ButtonsContainer, CardItemContainer, CounterContainer, RemoveButton } from "./styles";


export function CardItem(){
	return(
		<CardItemContainer>
			<img src={coffeImg} alt="" />
			<ActionContainer>
				<span>Expresso tradicional</span>
				<ButtonsContainer>
					<CounterContainer>
						<button>
							<Minus size={14} weight="bold"/>
						</button>
						<span>1</span>
						<button>
							<Plus size={14} weight="bold"/>
						</button>
					</CounterContainer>
					<RemoveButton>
						<div>
							<Trash size={16}/>
						</div>
						remove
					</RemoveButton>
				</ButtonsContainer>
				
			</ActionContainer>
			<span>R$ 9,90</span>
		</CardItemContainer>
	);
}