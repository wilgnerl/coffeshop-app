import { ActionContainer, CartContainer, HeaderContainer, LocationContainer } from "./styles";
import logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header(){
	return(
		<HeaderContainer>
			<img src={logo}/>

			<ActionContainer>
				<LocationContainer>
					<MapPin size={22} weight="fill"/>
					<span>Porto Alegre, RS</span>
				</LocationContainer>
				<CartContainer>
					<ShoppingCart size={22} weight="fill"/>
				</CartContainer>
			</ActionContainer>
		</HeaderContainer>
	);
}