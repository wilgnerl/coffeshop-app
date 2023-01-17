import { 
	CardFormContainer, 
	FormContainer, PaymentButton, PaymentMethodButtonsContainer, PaymentMethodContainer } from "./styles";
import { MapPin, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { ShoppingCartContext } from "../../../contexts/CartContext";
import { useContext } from "react";

export function DataForm(){
	const { handlePaymentMethod, paymentType } = useContext(ShoppingCartContext);
	const { register } = useFormContext();

	const { paymentType: Payment} = paymentType;

	return(
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
					<input 
						type="text" 
						className="cep" 
						placeholder="CEP" id="cep"
						{...register("cep")}
						required
					/>
					<input 
						type="text" 
						className="street" 
						placeholder="Rua" 
						id="rua" 
						{...register("rua")}
						required
					/>
					<div>
						<input 
							type="text" 
							className="numero" 
							placeholder="Numero" 
							id="numero" 
							{...register("numero")}
							required
						/>
						<input 
							type="text" 
							className="complemento" 
							placeholder="Complemento" 
							id="complemento"
							{...register("complemento")}
						/>
					</div>
					<div>
						<input 
							type="text" 
							className="bairro" 
							placeholder="Bairro" 
							id="bairro" 
							{...register("bairro")}
							required
						/>
						<input 
							type="text" 
							className="cidade" 
							placeholder="Cidade" 
							id="cidade" 
							{...register("cidade")}
							required
						/>
						<input 
							type="text" 
							className="uf" 
							placeholder="UF" 
							id="uf" 
							{...register("uf")}
							required
						/>
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
					<PaymentButton 
						type="button" 
						onClick={() => handlePaymentMethod({paymentType: "Credito"})}
						isActive={Payment === "Credito"}
					>
						<div><CreditCard size={16}/></div>
								Cartao de credito
					</PaymentButton>
					<PaymentButton 
						type="button" 
						onClick={() => handlePaymentMethod({paymentType: "Debito"})}
						isActive={Payment === "Debito"}
					>
						<div><Bank size={16}/></div>
								Cartao de debito
					</PaymentButton>
					<PaymentButton 
						type="button" 
						onClick={() => handlePaymentMethod({paymentType: "Dinheiro"})}
						isActive={Payment === "Dinheiro"}  
					>
						<div><Money size={16}/></div>
								Dinheiro
					</PaymentButton>
				</PaymentMethodButtonsContainer>
			</PaymentMethodContainer>
		</FormContainer>
	);
}