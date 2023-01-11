import { CardItem } from "./CardItem";
import { MapPin, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import { 
	BillingContainer,
	ButtonCardCartContainer,
	CardCartContainer, 
	CardFormContainer, 
	CardsContainer, 
	CartContainer, FormContainer, PaymentMethodButtonsContainer, PaymentMethodContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export function Checkout(){
	const navigate = useNavigate();

	function handleSubmit(){
		navigate("/sucess");
	}

	return(
		<CardsContainer onSubmit={handleSubmit}>
			<FormContainer>
				<span>Complete seu pedido</span>
				<CardFormContainer>
					<header>
						<div>
							<MapPin size={22}/>
						</div>
						<div>
							<h1>Endereço de Entrega</h1>
							<span>Informe o endereço onde deseja receber seu pedido</span>
						</div>
					</header>
					<main>
						<input type="text" className="cep" placeholder="CEP"/>
						<input type="text" className="street" placeholder="Rua"/>
						<div>
							<input type="number" className="numero" placeholder="Numero"/>
							<input type="text" className="complemento" placeholder="Complemento"/>
						</div>
						<div>
							<input type="text" className="bairro" placeholder="Bairro"/>
							<input type="text" className="cidade" placeholder="Cidade"/>
							<input type="text" className="uf" placeholder="UF"/>
						</div>
					</main>
				</CardFormContainer>
				<PaymentMethodContainer>
					<header>
						<div>
							<CurrencyDollar weight="bold" size={22}/>
						</div>
						<div>
							<h1>Pagamento</h1>
							<span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
						</div>
					</header>
					<PaymentMethodButtonsContainer>
						<button>
							<div><CreditCard size={16}/></div>
								Cartao de credito
						</button>
						<button>
							<div><Bank size={16}/></div>
								Cartao de debito
						</button>
						<button>
							<div><Money size={16}/></div>
								Dinheiro
						</button>
					</PaymentMethodButtonsContainer>
				</PaymentMethodContainer>
			</FormContainer>

			<CartContainer>
				<h1>Cafes selecionado</h1>
				<CardCartContainer>
					<CardItem />
					<CardItem />
					<CardItem />
					<BillingContainer>
						<div>
							<span>Total de itens</span>
							<span>R$ 29,70</span>
						</div>
						<div>
							<span>Entrega</span>
							<span>R$ 29,70</span>
						</div>
						<div>
							<span>Total</span>
							<span>R$ 29,70</span>
						</div>
					</BillingContainer>
					<ButtonCardCartContainer type="submit">Confirmar pedido</ButtonCardCartContainer>
				</CardCartContainer>
					
			</CartContainer>
		</CardsContainer>
			
	);
}