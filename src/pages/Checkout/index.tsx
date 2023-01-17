import { CardItem } from "./CardItem";
import { 
	BillingContainer,
	ButtonCardCartContainer,
	CardCartContainer, 
	CardsContainer, 
	CartContainer  } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../contexts/CartContext";
import { DataForm } from "./DataForm";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const dataFormValidationSchema = zod.object({
	cep: zod.string().min(9, "O CEP Deve ter 13 caracteres"),
	rua: zod.string(),
	numero: zod.string().transform((value) => Number(value)),
	complemento: zod.string(),
	bairro: zod.string(),
	cidade: zod.string(),
	uf: zod.string().max(2).min(2),
});

type dataForm = zod.infer<typeof dataFormValidationSchema>

interface FormFields{
	cep: string,
	rua: string,
	numero: number | string,
	complemento: string,
	bairro: string,
	cidade: string,
	uf: string,
}

export function Checkout(){
	const { cartList, createNewDataFormCart, resetCartList } = useContext(ShoppingCartContext);
	const [totalItems, setTotalItems] = useState<number>(0);
	const navigate = useNavigate();
	const dataForm = useForm<dataForm>({
		resolver: zodResolver(dataFormValidationSchema),
		defaultValues:{
			cep: "",
			rua: "",
			numero: 0,
			complemento: "",
			bairro: "",
			cidade: "",
			uf: "",
		}
	});

	const { handleSubmit, reset} = dataForm;

	useEffect(() => {
		if (!cartList) {
			setTotalItems(0);
		} else {
			calculateTotalItems();
		}
	}, [cartList]);

	function calculateTotalItems() {
		setTotalItems(
			cartList
				.map((coffee) => coffee.price * coffee.amount)
				.reduce((total, coffee) => total + coffee, 0)
		);
	}

	function handleTotal(){
		calculateTotalItems();
	}
	
	const deliveryPrice = 3.99;
	const totalOfPurchase = deliveryPrice + totalItems;

	function handleCreateNewForm(data: FormFields){
		createNewDataFormCart(data);
		navigate("/sucess");
		resetCartList();
		reset();
	}


	return(
		<CardsContainer onSubmit={handleSubmit(handleCreateNewForm)} id="confirmOrder">
			
			<FormProvider {...dataForm}>
				<DataForm />
			</FormProvider>
			

			<CartContainer>
				<h1>Cafes selecionado</h1>
				<CardCartContainer>
					{cartList.map((coffe) => {
						return(
							<CardItem 
								coffe={coffe} 
								key={coffe.id}
								recalculateTotal={handleTotal}
							/>
						);
					})}
					<BillingContainer>
						<div>
							<span>Total de itens</span>
							<span>R$ {totalItems.toFixed(2).replace(".", ",")}</span>
						</div>
						<div>
							<span>Entrega</span>
							<span>R$ {deliveryPrice.toFixed(2).replace(".", ",")}</span>
						</div>
						<div>
							<span>Total</span>
							<span>R$ {totalOfPurchase.toFixed(2).replace(".", ",")}</span>
						</div>
					</BillingContainer>
					<ButtonCardCartContainer type="submit" form="confirmOrder">Confirmar pedido</ButtonCardCartContainer>
				</CardCartContainer>
					
			</CartContainer>

		</CardsContainer>
			
	);
}