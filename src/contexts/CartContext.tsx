import { createContext, ReactNode, useState } from "react";

interface CoffeAttributes{
	id: string;
  image: string;
  name: string;
  price: number;
  amount: number
}

interface ShoppingCartContextType{
  cartList: CoffeAttributes[]
  updateCartList: (coffeToAdd: CoffeAttributes) => void
  removeItemOfCart: (coffeToRemove: CoffeAttributes) => void
  changeCartItem: (coffeId: string, type: "Increase" | "Decrease") => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

interface ShoppingCartContextProvidesProps {
  children: ReactNode
}

export function ShoppingCartContextProvider({ children }: ShoppingCartContextProvidesProps){
	const [cartList, setCartList] = useState<CoffeAttributes[]>([]);

	function updateCartList(coffeToAdd: CoffeAttributes){
		const coffeExists = cartList.findIndex((item) => item.id === coffeToAdd.id);

		if(coffeExists < 0){
			setCartList([...cartList, coffeToAdd]);
		} else{
			const newCart = cartList;
			newCart[coffeExists].amount += coffeToAdd.amount;
			setCartList(newCart);
		}
	}

	function changeCartItem(coffeId: string, type: "Increase" | "Decrease"){
		const coffeExists = cartList.findIndex((coffee) => {
			return coffeId === coffee.id;
		});
		const newCart = cartList;
		if (coffeExists >= 0) {
			
			if (type === "Increase") {
				newCart[coffeExists].amount = newCart[coffeExists].amount + 1;
				setCartList(newCart);
			} else if (type === "Decrease" && newCart[coffeExists].amount > 1) {
				newCart[coffeExists].amount = newCart[coffeExists].amount - 1;
				setCartList(newCart);
			}
			
			
		}
		
	}

	function removeItemOfCart(coffeToRemove: CoffeAttributes){

		const newCart = cartList.filter((coffe) => coffe.id !== coffeToRemove.id);

		setCartList(newCart);
	}
	return (
		<ShoppingCartContext.Provider 
			value={{
				cartList,
				updateCartList,
				changeCartItem,
				removeItemOfCart
			}}>
			{ children }
		</ShoppingCartContext.Provider>
	);
}