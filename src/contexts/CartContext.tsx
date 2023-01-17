import { createContext, ReactNode, useState } from "react";

interface CoffeAttributes{
	id: string;
  image: string;
  name: string;
  price: number;
  amount: number
}

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
	const [cartList, setCartList] = useState<CoffeAttributes[]>([]);
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

	function createNewDataFormCart(data: FormFields){
		setFormData(data);
	}

	function handlePaymentMethod(typeOfPayment: PaymentMethod){
		setPaymentType(typeOfPayment);
	}

	function resetCartList(){
		setCartList([]);
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