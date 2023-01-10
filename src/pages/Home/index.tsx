import { 
	CoffeListContainer, 
	CoffeListMainContainer, 
	CofferListHeaderContainer, 
	HomeContainer, 
	IntroContainer, 
	ItemContainer, 
	TextContainer 
} from "./styles";
import coffeImg from "../../assets/coffe.svg";
import { Coffee, Timer, ShoppingCart, Package } from "phosphor-react";
import { Card } from "./Card";

export function Home(){
	return(
		<HomeContainer>
			<IntroContainer>
				<TextContainer>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
					<ItemContainer>
						<span>
							<div className="icon-1">
								<ShoppingCart size={16} weight="fill" />
							</div>
						Compra simples e segura
						</span>
						<span>
							<div className="icon-2">
								<Package size={16} weight="fill" />
							</div>
						Embalagem mantém o café intacto
						</span>
						<span>
							<div className="icon-3">
								<Timer size={16} weight="fill" />
							</div>
						Entrega rápida e rastreada
						</span>
						<span>
							<div className="icon-4">
								<Coffee size={16} weight="fill" />
							</div>
						O café chega fresquinho até você
						</span>
					</ItemContainer>
				</TextContainer>
			
				<img src={coffeImg} alt="" />
			</IntroContainer>

			<CoffeListContainer>
				<CofferListHeaderContainer>
					<h1>Nossos Cafés</h1>

					<div>
						<button>Tradicional</button>
						<button>Especial</button>
						<button>Com leite</button>
						<button>Alcoolico</button>
						<button>Gelado</button>
					</div>
				</CofferListHeaderContainer>
				
				<CoffeListMainContainer>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</CoffeListMainContainer>
			</CoffeListContainer>
		</HomeContainer>
	);
}