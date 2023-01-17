import illustrationImg from "../../assets/Illustration.svg";
import { 
	InfoContainer, 
	InfoIcon1Container, 
	InfoIcon2Container, 
	InfoIcon3Container, 
	InfoTextContainer, 
	OrderInfoContainer, SucessContainer, SucessHeaderContainer, SucessMainContainer } from "./styles";
import { MapPin, CurrencyDollar, Timer, } from "phosphor-react";
import { ShoppingCartContext } from "../../contexts/CartContext";
import { useContext } from "react";

export function Sucess(){
	const { formData, paymentType } = useContext(ShoppingCartContext);

	const { paymentType: Payment} = paymentType;

	return(
		<SucessContainer>
			<SucessHeaderContainer>
				<h1>Uhu! Pedido confirmado</h1>
				<p>Agora é só aguardar que logo o café chegará até você</p>
			</SucessHeaderContainer>
			<SucessMainContainer>
				<OrderInfoContainer>
					<InfoContainer>
						<InfoIcon1Container>
							<MapPin size={16} weight="fill"/>
						</InfoIcon1Container>
						<InfoTextContainer>
							<span>Entrega em <strong>{formData.rua}, {formData.numero}</strong></span>
							<span>{formData.bairro} - {formData.cidade}, {formData.uf}</span>
						</InfoTextContainer>
					</InfoContainer>
					<InfoContainer>
						<InfoIcon2Container>
							<Timer size={16} weight="fill"/>
						</InfoIcon2Container>
						<InfoTextContainer>
							<span>Previsão de entrega</span>
							<strong>20 min - 30 min </strong>
						</InfoTextContainer>
					</InfoContainer>
					<InfoContainer>
						<InfoIcon3Container>
							<CurrencyDollar size={16} weight="fill"/>
						</InfoIcon3Container>
						<InfoTextContainer>
							<span>Pagamento na entrega</span>
							{
								(Payment === "Debito" && (<strong>Cartão de Debito</strong>))	
							}
							{
								(Payment === "Credito" && (<strong>Cartão de Credito</strong>))	
							}
							{
								(Payment === "Dinheiro" && (<strong>Dinheiro</strong>))	
							}
						</InfoTextContainer>
					</InfoContainer>
				</OrderInfoContainer>
				<img src={illustrationImg} alt="" />
			</SucessMainContainer>
		</SucessContainer>
	);
}