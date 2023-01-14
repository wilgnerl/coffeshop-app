import { ActionContainer, CartContainer, HeaderContainer, LocationContainer } from "./styles";
import logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/CartContext";

export function Header(){
	const { cartList } = useContext(ShoppingCartContext);
	return(
		<HeaderContainer>
			<NavLink to="/">
				<img src={logo}/>
			</NavLink>

			<ActionContainer>
				<LocationContainer>
					<MapPin size={22} weight="fill"/>
					<span>Porto Alegre, RS</span>
				</LocationContainer>
				<NavLink to="/checkout">
					<CartContainer>
					
						<ShoppingCart size={22} weight="fill"/>
						{cartList.length > 0 && <span>{cartList.length}</span>}
					</CartContainer>
				</NavLink>
			</ActionContainer>
		</HeaderContainer>
	);
}