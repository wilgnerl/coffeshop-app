import { ActionTypes } from "./actions";
import { produce } from "immer";

export interface CoffeAttributes{
	id: string;
  image: string;
  name: string;
  price: number;
  amount: number
}

interface InputAttributes{
  cartList: CoffeAttributes[]
}

export function cartReducer(state: InputAttributes, action: any){
	switch(action.type){
	case ActionTypes.UPDATE_CART:{

		return produce(state, draft => {
			const coffeExists = state.cartList.findIndex((item) => item.id === action.payload.coffeToAdd.id);

			if(coffeExists < 0){
				draft.cartList.push(action.payload.coffeToAdd);
			} else{
				
				draft.cartList[coffeExists].amount += action.payload.coffeToAdd.amount;
			}
		});
	}
	
	case ActionTypes.CHANGE_CART_ITEM:{
		return produce(state, draft => {
			const coffeExists = state.cartList.findIndex((coffee) => {
				return action.payload.coffeId === coffee.id;
			});
			if (coffeExists >= 0) {
				if (action.payload.type === "Increase") {
					draft.cartList[coffeExists].amount = draft.cartList[coffeExists].amount + 1;
					
				} else if (action.payload.type === "Decrease" && draft.cartList[coffeExists].amount > 1) {
					draft.cartList[coffeExists].amount = draft.cartList[coffeExists].amount - 1;
				}
			}
		});

	}

	case ActionTypes.REMOVE_ITEM_OF_CART:{
		return produce(state, draft => {
			draft.cartList.filter((coffe) => coffe.id !== action.payload.coffeToRemove.id);
		});
	}

	case ActionTypes.RESET_CART:{
		return produce(state, draft => {
			draft.cartList.splice(0, draft.cartList.length);
		});
	}

	default:
		return state;
	}
}