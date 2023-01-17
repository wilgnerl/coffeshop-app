import { createContext, ReactNode, useReducer, useState } from "react";
import { 
	changeCartItemAction, 
	removeItemOfCartAction, 
	resetCartListAction, 
	updateCartListAction } from "../reducers/actions";
import { cartReducer, CoffeAttributes } from "../reducers/reducer";
interface FormFields{
	cep: string,
	rua: string,
	numero: number | string,
	complemento: string,
	bairro: string,
	cidade: string,
	uf: string,
}
interface PaymentMethod{
	paymentType: "Debito" | "Credito" | "Dinheiro"
}
interface ShoppingCartContextType{
  cartList: CoffeAttributes[],
  formData: FormFields
  paymentType: PaymentMethod
  handlePaymentMethod: (typeOfPayment: PaymentMethod) => void
  createNewDataFormCart: (data: FormFields) => void
  updateCartList: (coffeToAdd: CoffeAttributes) => void
  removeItemOfCart: (coffeToRemove: CoffeAttributes) => void
  changeCartItem: (coffeId: string, type: "Increase" | "Decrease") => void
  resetCartList: () => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

interface ShoppingCartContextProvidesProps {
  children: ReactNode
}

export function ShoppingCartContextProvider({ children }: ShoppingCartContextProvidesProps){
	const [cartState, dispatch] = useReducer(cartReducer, {
		cartList: []
	});

	const { cartList } = cartState;

	const [paymentType, setPaymentType] = useState<PaymentMethod>({
		paymentType: "Credito"
	});
	const [formData, setFormData] = useState<FormFields>({
		cep: "",
		rua: "",
		numero: 0,
		complemento: "",
		bairro: "",
		cidade: "",
		uf: "",
	});

	function updateCartList(coffeToAdd: CoffeAttributes){
		dispatch(updateCartListAction(coffeToAdd));
	}

	function changeCartItem(coffeId: string, type: "Increase" | "Decrease"){
		dispatch(changeCartItemAction(coffeId, type));
	}

	function removeItemOfCart(coffeToRemove: CoffeAttributes){
		dispatch(removeItemOfCartAction(coffeToRemove));
	}

	function createNewDataFormCart(data: FormFields){
		setFormData(data);
	}

	function handlePaymentMethod(typeOfPayment: PaymentMethod){
		setPaymentType(typeOfPayment);
	}

	function resetCartList(){
		dispatch(resetCartListAction());
	}
	return (
		<ShoppingCartContext.Provider 
			value={{
				cartList,
				formData,
				paymentType,
				handlePaymentMethod,
				updateCartList,
				changeCartItem,
				removeItemOfCart,
				createNewDataFormCart,
				resetCartList
			}}>
			{ children }
		</ShoppingCartContext.Provider>
	);
}